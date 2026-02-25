const express = require("express");
const app = express();

app.use(express.json());

app.get("/health", (req, res) => res.json({ status: "ok", service: "users" }));

app.get("/users/:id", (req, res) => {
  res.json({ id: req.params.id, name: "Demo User", email: "demo@example.com" });
});

const port = process.env.PORT || 3002;
app.listen(port, () => console.log(`users-service listening on ${port}`));
