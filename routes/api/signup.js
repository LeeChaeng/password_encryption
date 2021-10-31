import express from "express";
import db from "../../data/db";
import bctypt from "bcrypt";

const router = express.Router();

router.post("/", function (req, res, next) {
  const id = req.body.id;
  const pw = req.body.pw;

  const saltRounds = 10;

  bctypt
    .genSalt(saltRounds)
    .then((salt) => {
      console.log(`Salt: ${salt}}`);
      return bctypt.hash(pw, salt);
    })
    .then((hash) => {
      console.log(`Hash: ${hash}`);

      db.get("users").push({ id: id, digest: hash }).write();
      res.render("success", { title: "회원가입" });
    })
    .catch((err) => {
      res.send("Something went wrong");
    });
});

module.exports = router;
