# FarmCart — Project Workflow

## 1. Authentication Workflow

```mermaid
flowchart TD
    A[Signup or Login Page] --> B[Submit User Details]
    B --> C[Backend Validates Details]
    C --> D{Successful?}
    D -- No --> E[Display Error]
    D -- Yes --> F[Return Token and User Data]
    F --> G[Store Token and User Data in localStorage]
    G --> H[Open Role-Based Dashboard]
```

## 2. Product Workflow

```mermaid
flowchart TD
    A[Farmer or Retailer Dashboard] --> B[Add or Manage Product]
    B --> C[Send Product Request]
    C --> D[Express Backend]
    D --> E[Validate and Save Product]
    E --> F[(MongoDB)]
    F --> G[Product Available for Listing]
    G --> H[Customer Views Products]
```

## 3. Cart and Order Workflow

```mermaid
flowchart TD
    A[Customer Views Products] --> B[Add Product to Cart]
    B --> C[Cart Updated]
    C --> D[Customer Places Order]
    D --> E[Backend Processes Order]
    E --> F[(Order Saved in MongoDB)]
    F --> G[Order Appears in Customer Orders]
    F --> H[Order Appears for Relevant Seller]
    H --> I[Seller Updates Order Status]
```

## 4. Returnable Packaging Workflow

```mermaid
flowchart TD
    A[Customer Receives Order] --> B[Packaging Return Decision]
    B --> C{Keep or Return?}
    C -- Keep --> D[Packaging Marked as Kept]
    C -- Return --> E[Submit Return Request]
    E --> F[Seller Reviews Returned Packaging]
    F --> G{Approve Return?}
    G -- Yes --> H[Return Approved]
    G -- No --> I[Return Rejected]
```

## Note

These diagrams provide a high-level overview of FarmCart workflows. Exact behavior may vary by endpoint and role.