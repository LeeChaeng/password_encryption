import express from "express";
import db from "../../data/db";
import bcrypt from "bcrypt";

const router = express.Router();

/* GET users listing. */
router.post("/", function (req, res, next) {
  const id = req.body.id;
  const pw = req.body.pw;

  const digest = db.get("users").find({ id: id }).value().digest ?? "";

  bcrypt
    .compare(pw, digest)
    .then((result) =>
      result
        ? res.render("success", { title: "로그인" })
        : res.send("로그인 정보가 맞지 않습니다.")
    )
    .catch((err) => res.send("Something went wrong"));
});

module.exports = router;
