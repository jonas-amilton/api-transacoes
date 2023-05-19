import express, { Response, Request } from "express";
import { Transactions } from "./models/transactions";
import { User } from "./models/user";
import { usersDb } from "./database/users.db";

const app = express();
app.use(express.json());
// app.use();

app.listen(3333, () => {
  console.log("api is running");
});

app.post("/users/", (req: Request, res: Response) => {
  try {
    const { name, cpf, email, age } = req.body;

    if (!name) {
      return res.status(400).send({
        ok: false,
        message: "Name was not found",
      });
    }
    if (!cpf) {
      return res.status(400).send({
        ok: false,
        message: "CPF was not found",
      });
    }

    if (!email) {
      return res.status(400).send({
        ok: false,
        message: "Email was not found",
      });
    }
    if (!age) {
      return res.status(400).send({
        ok: false,
        message: "Age was not found",
      });
    }

    const user = new User(name, cpf, email, age);
    usersDb.push(user);

    return res.status(201).send({
      ok: true,
      message: "User was successfully created",
      data: user,
    });
  } catch (error: any) {
    return res.status(500).send({
      ok: false,
      message: error.toString(),
    });
  }
});
