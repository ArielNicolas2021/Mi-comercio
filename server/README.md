# Backend - Mi Comercio.

Definimos las clases a utilizar: Usuario, Productos, Facturación.

## 1️⃣ Módulo: Productos.

Gestiona productos de una tienda.

### Entidades

- id
- user_id
- product
- cost
- price
- stock

### Casos de uso

- getAllProducts
- getProduct
- createProduct
- deleteProduct
- updateProduct

## 2️⃣ Módulo: Facturación

Gestiona las ventas de la tienda.

### Entidades

- id
- user_id
- date
- items
- total

### Casos de uso

- getAllTickets
- getTicket
- createTicket
- deleteTicket
- updateTicket