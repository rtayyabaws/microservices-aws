const express = require("express");
const { v4: uuid } = require("uuid");

const app = express();
app.use(express.json());

app.get("/health", (req, res) => res.json({ status: "ok", service: "orders" }));

app.post("/orders", (req, res) => {
  const orderId = uuid();
  const order = {
    id: orderId,
    userId: req.body.userId || "u1",
    items: req.body.items || [{ productId: "p1", qty: 1 }],
    status: "CREATED"
  };

  // Later (on AWS) we will send this event to SQS.
  console.log("ORDER_CREATED event (later -> SQS):", JSON.stringify(order));

  res.status(201).json(order);
});

app.get("/orders/:id", (req, res) => {
  res.json({ id: req.params.id, status: "CREATED" });
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`orders-service listening on ${port}`));
