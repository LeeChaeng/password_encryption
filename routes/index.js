import express from "express";

const router = express.Router();

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/signup", function (req, res, next) {
  res.render("signup", { title: "회원가입" });
});

module.exports = router;
