import Lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync";

const db = Lowdb(new FileSync("./data/db.json"));

module.exports = db;
