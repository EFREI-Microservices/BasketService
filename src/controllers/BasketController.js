const BasketItem = require('../models/BasketItem');

module.exports = {
    addItem: async (req, res) => {
        try {
            const { productId, quantity } = req.body;
            const userId = req.user.id;


            const newItem = new BasketItem({ productId, userId, quantity });

            await newItem.save();

            res.status(201).send({
                message: 'Article ajouté au panier',
                item: newItem
            });
        } catch (error) {
            res.status(400).send({
                message: 'Erreur lors de l\'ajout de l\'article',
                error: error.message
            });
        }
    },

    removeItem: async (req, res) => {
        try {
            const { productId } = req.body;
            const userId = req.user.id;

            const removedItem = await BasketItem.findOneAndDelete({ productId, userId });

            if (!removedItem) {
                return res.status(404).send({ message: 'Article non trouvé ou non autorisé' });
            }

            res.status(200).send({
                message: 'Article supprimé du panier',
                removedItem
            });
        } catch (error) {
            res.status(400).send({
                message: 'Erreur lors de la suppression de l\'article',
                error: error.message
            });
        }
    },

    viewBasket: async (req, res) => {
        try {
            const userId = req.user.id;

            const basketItems = await BasketItem.find({ userId });
            res.status(200).send(basketItems);
        } catch (error) {
            res.status(400).send({
                message: 'Erreur lors de l\'affichage du panier',
                error: error.message
            });
        }
    }
};
