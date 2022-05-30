require("dotenv").config();
const express = require("express");

const app = express();
const PORT =
    process.env.ENVIRONMENT == "production"
        ? process.env.PROD_PORT
        : process.env.DEV_PORT;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT, () => {
    console.log(`Listening to localhost:${PORT}`);
});
