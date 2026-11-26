# FarmCart — Database Relationships

```mermaid
flowchart TD
    User[User]

    Product[Product]
    Cart[Cart]
    Order[Order]
    Review[Review]
    Delivery[Delivery]
    PackagingReturn[PackagingReturn]
    RewardWallet[RewardWallet]

    User -->|seller / retailer| Product
    User -->|buyer| Cart
    User -->|buyer / farmer / retailer| Order
    Product -->|product reference| Order
    Product -->|product reference| Review
    User -->|reviewer| Review
    Order -->|order reference| Delivery
    User -->|delivery person| Delivery
    Order -->|order reference| PackagingReturn
    User -->|customer / seller| PackagingReturn
    User -->|customer / seller| RewardWallet

    Note: Product items in the Cart and Order are embedded within their respective documents; they are not stored in separate collections.

    