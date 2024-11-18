const axios = require('axios');

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.headers["authorization"]?.replace("Bearer ", "");
        if (!token) return res.status(401).json({ message: "Token manquant" });

        const response = await axios.get('http://localhost:8009/api/auth/check-token', {
            headers: { Authorization: `Bearer ${token}` }
        });

        if (response.data) {
            req.user = response.data;
            next();
        } else {
            return res.status(401).json({ message: "Non autorisé" });
        }
    } catch (error) {
        return res.status(401).json({ message: "Non autorisé" });
    }
};

module.exports = authMiddleware;
