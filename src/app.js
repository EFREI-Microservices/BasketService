require('dotenv').config();
const express = require('express');
const basketRoutes = require('./routes/BasketItemRoutes');
const db = require('./config/db');

db();

const app = express();
app.use(express.json());


app.use('/api/basket', basketRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
