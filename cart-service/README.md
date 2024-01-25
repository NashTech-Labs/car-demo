# Cart Service 

## Application Overview

The Cart Service is a meticulously designed component that facilitates customers in selecting items from the store's website and managing their shopping carts. It leverages a robust architecture to handle the complexities of cart management, providing a seamless experience for users.

### Prerequisites
We must configure MySQL as the persistent store destination.

![cart-service-config.png](https://i.postimg.cc/1z7yX0RY/cart-service-config.png)

### Local setup
- Setup axon-server and MySQL docker images
```
local-dev > docker compose up -d
```
- Run the application
```
cart-service > mvn clean springboot:run 
```
- Endpoint for resting
    - Generate a request for add to cart.
```arm
curl --location 'http://localhost:9094/cart/add' \
--header 'Content-Type: application/json' \
--data '{
    "productId": "199",
    "quantity": 1,
    "userId": "1652"
}'
```
- Generate a request for remove to cart.
```arm
curl --location 'http://localhost:9094/cart/remove' \
--header 'Content-Type: application/json' \
--data '{
    "productId": "205",
    "quantity": 1,
    "userId": "1652"
}'
```
- Generate a request to get cart contents.
```
curl --location 'http://localhost:9094/cart/get' \
--header 'Content-Type: application/json' \
--data '{
    "userId": "1652"
}'
```
## Sonar Configuration

We have integrated sonar in our project for inspection of code quality to perform automatic reviews with static analysis of code to detect bugs, code smells, and security.

Execute the following Maven command to run Sonar analysis:
```dtd
mvn clean verify sonar:sonar
```
### Sonar report
![sonarReport.png](https://i.postimg.cc/C10ymMt3/Screenshot-from-2024-01-25-14-07-21.png)


### Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.