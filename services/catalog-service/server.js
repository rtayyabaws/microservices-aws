const express = require("express");
const app = express();

app.use(express.json());

app.get("/health", (req, res) => res.json({ status: "ok", service: "catalog" }));

app.get("/products", (req, res) => {
  res.json([
    { id: "p1", name: "T-Shirt", price: 15 },
    { id: "p2", name: "Shoes", price: 55 }
  ]);
});

app.get("/products/:id", (req, res) => {
  res.json({ id: req.params.id, name: "Sample Product", price: 99 });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`catalog-service listening on ${port}`));
