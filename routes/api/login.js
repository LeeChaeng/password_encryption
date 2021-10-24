import express from "express";

const router = express.Router();

/* GET users listing. */
router.post("/", function (req, res, next) {
  res.send("login");
});

module.exports = router;
