# FarmCart — API Documentation

## Base URL

`http://localhost:8080`

## Authentication

Protected endpoints use a JWT token in the request header:

`Authorization: Bearer <token>`

## Authentication and Profile

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/auth/register` | Register a user |
| POST | `/api/auth/signup` | Sign up a user |
| POST | `/api/auth/login` | Log in |
| GET | `/api/profile` | Get profile |
| PUT | `/api/profile` | Update profile |
| PUT | `/api/profile/change-password` | Change password |

## Products and Inventory

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/products` | Get products |
| GET | `/api/products/:id` | Get a product by ID |
| POST | `/api/products` | Create a product |
| PUT | `/api/products/:id` | Update a product |
| DELETE | `/api/products/:id` | Delete a product |
| GET | `/api/farmer-products` | Get farmer products |
| GET | `/api/my-products` | Get the current user's products |
| PUT | `/api/update-stock/:id` | Update product stock |
| GET | `/api/retailer-inventory` | Get retailer inventory |
| PUT | `/api/retailer-inventory` | Update retailer inventory |

## Cart and Orders

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/cart` | Get cart |
| POST | `/cart/add/:productId` | Add a product to cart |
| POST | `/cart/remove/:productId` | Remove a product from cart |
| POST | `/api/orders` | Place an order |
| GET | `/api/my-orders` | Get the user's orders |
| GET | `/api/farmer-orders` | Get farmer orders |
| GET | `/api/retailer-orders` | Get retailer orders |
| PUT | `/api/orders/:id/status` | Update order status |
| PUT | `/api/orders/:id/packaging` | Update packaging details |

## Packaging and Rewards

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/packaging/decision` | Submit a packaging decision |
| GET | `/api/packaging/requests` | Get packaging requests |
| GET | `/api/packaging/request/:id` | Get a packaging request |
| PUT | `/api/packaging/request/:id` | Update a packaging request |
| GET | `/api/admin/packaging` | Get packaging records |

## Retailer Insights

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/retailer-best-selling` | Get best-selling products |
| GET | `/api/retailer-restock` | Get restock information |
| GET | `/api/retailer-earnings` | Get retailer earnings |

## Reviews

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/reviews/:productId` | Add a review |
| GET | `/api/reviews/:productId` | Get product reviews |
| PUT | `/api/reviews/:productId/:reviewId` | Update a review |

## Admin

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/admin/dashboard` | Get admin dashboard data |
| GET | `/api/admin/users` | Get users |
| PUT | `/api/admin/users/:id/role` | Update a user's role |
| DELETE | `/api/admin/users/:id` | Delete a user |
| GET | `/api/admin/products` | Get products for administration |
| DELETE | `/api/admin/products/:id` | Delete a product |
| GET | `/api/admin/orders` | Get orders |
| GET | `/api/admin/orders/:id` | Get an order by ID |

## Delivery

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/deliveries` | Create a delivery |
| GET | `/deliveries` | Get deliveries |
| GET | `/deliveries/:id` | Get a delivery by ID |
| PUT | `/deliveries/:id` | Update a delivery |
| DELETE | `/deliveries/:id` | Delete a delivery |

## Notes

- This document summarizes the API routes defined in `app.js`.
- Some legacy page-rendering routes are not included in these API tables.
- Authentication and authorization requirements may differ by endpoint; check the middleware in `app.js`.
- Some routes in `app.js` have duplicate definitions or require verification. The tables describe their intended purpose, not a guarantee that every endpoint has been tested.