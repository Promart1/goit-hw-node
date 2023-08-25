const express = require("express");
const { schemas } = require("../../models/user");
const {
  register,
  login,
  getCurrent,
  logout,
} = require("../../controllers/auth");
const { authenticate, validateBody } = require("../../middlewares");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), register);

router.post("/login", validateBody(schemas.loginSchema), login);

router.get("/current", authenticate, getCurrent);

router.post("/logout", authenticate, logout);

module.exports = router;
