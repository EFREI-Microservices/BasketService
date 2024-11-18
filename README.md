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

2. Pull une database MongoDB (⚠️ Cette étape ainsi que l'étape `3` peuvent être ignorées si vous l'avez déjà fait pour le `UserService`)
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
Attention : tous les endpoints nécessitent un token JWT valide dans le header `Authorization`.  
Liste des endpoints :  

#### [POST] `/api/add`
Ajouter un produit au panier de l'utilisateur connecté
```json
{
    "productId": int,
    "quantity": int
}
```

#### [DELETE] `/api/remove`
Supprimer un produit du panier de l'utilisateur connecté.
```json
{
    "productId": int
}
```

#### [GET] `/api/view`
Affiche le panier de l'utilisateur connecté.
