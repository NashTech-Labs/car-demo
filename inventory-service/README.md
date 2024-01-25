# Inventory Service

##### Application Overview

This application is conscientiously crafted to oversee the management of available cars for sale within a system. Leveraging the Axon Framework for CQRS (Command Query Responsibility Segregation) and Event Sourcing, it seamlessly orchestrates the creation of inventory, ensures the storage of product details in a database, and adeptly publishes events to a Google Cloud Pub/Sub topic.

## Prerequisites
We must set up Axon Server to handle command and query operations, and configure MySQL as the persistent store destination.

![Screenshot from 2024-01-24 17-01-29.png](https://i.postimg.cc/W1M89wfF/inventory-service-config.png)

## Local setup

- Setup axon-server and MySQL docker images
```
local-dev > docker compose up -d
```
- Run the application
```
inventory-service > mvn clean springboot:run 
```
- Endpoint for resting
  - Get product.
```
curl --location 'http://localhost:9091/products/product/199'
```
## Sonar Configuration

We have integrated sonar in our project for inspection of code quality to perform automatic reviews with static analysis of code to detect bugs, code smells, and security.

Execute the following Maven command to run Sonar analysis:
```dtd
mvn clean verify sonar:sonar
```
### Sonar report
![sonarReport.png](https://i.postimg.cc/x169kQbn/Screenshot-from-2024-01-25-13-49-35.png)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
