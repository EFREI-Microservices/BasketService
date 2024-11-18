const axios = require('axios');
const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {
    try {
        // Extraire le token de la requête
        const token = req.headers["authorization"]?.replace("Bearer ", "");
        if (!token) return res.status(401).json({ message: "Token manquant" });

        // Vérifier et décoder le token pour obtenir l'ID utilisateur
        const { userId } = jwt.verify(token, process.env.JWT_SECRET);

        // Faire une requête GET à la route de l'utilisateur pour vérifier son existence
        const response = await axios.get(`http://localhost:8009/api/user/${userId}`, {
            headers: { Authorization: `Bearer ${token}` }
        });

        if (response.data) {
            req.user = response.data; // Attacher l'utilisateur authentifié à `req.user`
            next(); // Passer au prochain middleware
        } else {
            return res.status(401).json({ message: "Non autorisé" });
        }
    } catch (error) {
        return res.status(401).json({ message: "Non autorisé" });
    }
};

module.exports = authMiddleware;
