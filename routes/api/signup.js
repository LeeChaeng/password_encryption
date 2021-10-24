import express from "express";
import db from "../../data/db";

const router = express.Router();

router.post("/", function (req, res, next) {
  const id = req.body.id;
  const pw = req.body.pw;

  db.get("users").push({ id: id, pw: pw }).write();

  // todo encryption

  res.send("signup completed!");
});

module.exports = router;
