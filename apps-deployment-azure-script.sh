#!/bin/bash

# AKS Cluster Configuration
AKS_CLUSTER="cluster"
AKS_RESOURCE_GROUP="group"
AKS_NAMESPACE="default"
ACR_NAME="youracrname"

# Function to build and deploy service to AKS
build_and_deploy_service() {
    SERVICE_NAME="$1"
    DEPLOYMENT_NAME="$2"

    # Checkout code
    git clone https://github.com/your/repository.git "$SERVICE_NAME"
    cd "$SERVICE_NAME" || exit


#     # Create Azure Container Registry
#     az acr create --resource-group $AKS_RESOURCE_GROUP \
#                   --name $ACR_NAME \
#                   --sku Standard \
#                   --location $AKS_REGION
#
#     # Providing required permission for downloading Docker image from ACR into AKS Cluster
#     az aks update -n $AKS_CLUSTER \
#                   -g $AKS_RESOURCE_GROUP \
#                   --attach-acr $ACR_NAME

    # Build and push Docker image to ACR
    az acr login --name "$ACR_NAME"
    docker build -t "$ACR_NAME.azurecr.io/${SERVICE_NAME}:${GITHUB_SHA}" .
    docker push "$ACR_NAME.azurecr.io/${SERVICE_NAME}:${GITHUB_SHA}"

    # Configure Kubernetes environment
    az aks get-credentials --resource-group "$AKS_RESOURCE_GROUP" --name "$AKS_CLUSTER_NAME"

    # Set the image for kustomize
    kustomize edit set image "$ACR_NAME.azurecr.io/${SERVICE_NAME}:${GITHUB_SHA}"

    # Deploy through kubectl
    kustomize build . | kubectl apply -f -
    kubectl rollout status deployment/"$DEPLOYMENT_NAME" -n "$AKS_NAMESPACE"
    kubectl get services -o wide -n "$AKS_NAMESPACE"

    echo "-------------$SERVICE_NAME deployed on $AKS_CLUSTER_NAME----------"
}

for project in $(cat projects-changes-deploy.txt)
do
   :
  case $project in
  # case 1 build and deploy package common
  "common")
    cd common || exit
    mvn -B clean deploy --file pom.xml
    cd ..;;

  # case 2 build and deploy order-service
  "order-service")
    build_and_deploy_service order-service $AKS_CLUSTER orderservice
    cd ..;;

  # case 3 build and deploy inventory-service
  "inventory-service")
    build_and_deploy_service inventory-service $AKS_CLUSTER inventoryservice
    cd ..;;

  # case 4 build and deploy payment-service
  "payment-service")
    build_and_deploy_service payment-service $AKS_CLUSTER paymentservice
    cd ..;;

  # case 5 build and deploy order-service
  "shipment-service")
    build_and_deploy_service shipment-service $AKS_CLUSTER shipmentservice
    cd ..;;


  # case 6 build and deploy admin-service
  "admin-service")
    build_and_deploy_service admin-service $AKS_CLUSTER adminservice
    cd ..;;

  # case 7 build and deploy cart-service
  "cart-service")
      build_and_deploy_service cart-service $AKS_CLUSTER cartservice
      cd ..;;
  esac

done