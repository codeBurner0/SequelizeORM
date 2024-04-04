import { Sequelize, DataTypes } from "sequelize";

import userModel from "./user.js";
import contactModel from "./contact.js";
const sequelize = new Sequelize("learning", "ankit", "1234", {
  host: "localhost",
  dialect: "postgres",
});

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.User = userModel(sequelize, DataTypes);
db.Contact = contactModel(sequelize, DataTypes);

export default db;
