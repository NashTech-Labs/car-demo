# Order Service
This service monitors incoming order requests from the car UI (Car Dashboard), executes the order placement, and provides the relevant response.

## Prerequisites
We must set up Axon Server to handle command and query operations, and configure MySQL as the persistent store destination.

![order-config.png](..%2Fdocumentation%2Forder-config.png)

## Local setup

- Setup axon-server and MySQL docker images
```
local-dev > docker compose up -d
```
- Run the application
```
order-service > mvn clean springboot:run 
```
- Endpoint for resting
  - Generate a request for an order.
```arm
curl --location 'http://localhost:9090/orders/create' \
--header 'Content-Type: application/json' \
--data '{
    "productId": "199",
    "quantity": 1,
    "userId": "1652"
}'
```
  - Get user's order.
```
curl --location 'http://localhost:9090/orders/1652'
```

## Saga Orchestration
Saga orchestration is a design pattern in distributed systems where car-demo process is broken down into a series of smaller, independent transactions (sagas) that can be orchestrated to ensure consistency and reliability across the entire process.

![saga.png](..%2Fdocumentation%2Fsaga.png)

## Sonar Configuration

We have integrated sonar in our project for inspection of code quality to perform automatic reviews with static analysis of code to detect bugs, code smells, and security.

Execute the following Maven command to run Sonar analysis:
```dtd
mvn clean verify sonar:sonar
```
### Sonar report
![sonarReport.png](https://i.postimg.cc/vTbtqTW6/Screenshot-from-2024-01-25-14-12-20.png)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
