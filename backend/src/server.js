const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth.routes');
const path = require('path');

dotenv.config();

const app = express();
// const __dirname = path.resolve();

app.use(express.json());
app.use("/api/auth", authRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../../frontend/dist")));

    app.get(/.*/, (req, res) => {
        res.sendFile(path.join(__dirname, "../../frontend/dist/index.html"));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});