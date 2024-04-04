import express from "express";
import dotenv from "dotenv";
import  db from "./model/connection.js";
const app = express();

dotenv.config();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(PORT, async () => {
  // await db.User.sync({})
  console.log(db)
  console.log(`server is started on ${PORT}`);
});

// force: true --> //drop table then create new table
//  User.sync(); --> no drop or create
//  User.sync({ alter: true }); -->  update one by one
//  User.drop();--> drop the table

// This will run .sync() only if database name ends with '_test'
// sequelize.sync({ force: true, match: /_test$/ });
