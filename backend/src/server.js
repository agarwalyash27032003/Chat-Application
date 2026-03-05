const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth.routes');

dotenv.config();
const app = express();

app.use("/api/auth", authRoutes);

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));