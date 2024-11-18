# BasketService

Documentation du BasketService

## Prérequis
- Node >20.13
- Docker 27 ou plus

## Installation

1. Clone le repository
```bash
git clone https://github.com/EFREI-Microservices/BasketService.git
```

2. Pull une database MongoDB
```bash
docker pull mongodb/mongodb-community-server:latest
```

3. Run la database MongoDB
```bash
docker run --name mongodb -p 27017:27017 -d mongodb/mongodb-community-server:latest
```
4. Installer les dependence
```bash
npm install
```

5. Lancer le serveur
```bash
npm run start
```

## Endpoints

L'API est accessible à l'adresse `http://localhost:8008/`

Liste des endpoints :

#### [POST] `/api/add`
Ajouter un produit au panier
`userId` doit correspondre à celui de l'utilisateur connecté via Token JWT
```json
{
    "productId": string,
    "userId": int,
    "quantity": int
}
```

#### [DELETE] `/api/remove/{productId}`
Supprimer un produit du panier de l'utilisateur connecté.
```json
{
    "userId": int
}
```

#### [GET] `/api/view`
Affiche le panier de l'utilisateur connecté.
```json
{
    "userId": int
}
```
