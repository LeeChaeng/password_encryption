import express from "express";

import loginRouter from "./login";
import signupRouter from "./signup";

const router = express.Router();

router.use("/login", loginRouter);
router.use("/signup", signupRouter);

module.exports = router;
