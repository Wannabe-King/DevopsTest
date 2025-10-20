import express from "express";
import { client } from "@repo/db/client";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "Hi there user" });
});

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = await client.user.create({ data: { username, password } });
  res.send({
    message: "signup successful",
    id: user.id,
  });
});

app.listen(3002);
