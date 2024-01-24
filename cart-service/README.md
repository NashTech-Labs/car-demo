# Cart Service 

## Application Overview

The Cart Service is a meticulously designed component that facilitates customers in selecting items from the store's website and managing their shopping carts. It leverages a robust architecture to handle the complexities of cart management, providing a seamless experience for users.

### Workflow

#### Cart Interaction
The core functionality revolves around customer interaction with the shopping cart. Users can add items, remove them, and view the contents of their cart. This process is managed through various commands and events.

#### Cart Commands

- AddToCartCommand: Initiates the addition of an item to the shopping cart. 
- RemoveFromCartCommand: Triggers the removal of an item from the cart.

#### Cart Events

- ItemAddedToCartEvent: Raised when an item is successfully added to the cart. 
- ItemRemovedFromCartEvent: Signaled upon the successful removal of an item from the cart.

#### Event Handling

The CartEventHandler is responsible for managing cart-related events.

- ItemAddedToCartEventHandler: Listens for the ItemAddedToCartEvent, updates the cart status, and may perform additional actions based on business logic. 
- ItemRemovedFromCartEventHandler: Listens for the ItemRemovedFromCartEvent, adjusts the cart accordingly, and performs necessary updates.

#### Data Storage
The Cart Service ensures that cart information is efficiently stored for each customer. The CartRepository is responsible for handling data interactions related to the shopping cart.

