const express = require("express");
const app = express();
const port = 3110;
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.send("Hello, World! Express is running.");
});

// Sample API route
app.get("/api", (req, res) => {
    res.json({ message: "Welcome to the Express API!" });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
