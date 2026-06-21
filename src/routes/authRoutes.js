const express = require("express");
const router = express.Router();

const {body} = require("express-validator");
const validate = require("../middleware/validationMiddleware");

const {register, login} = require("../controllers/authController");

router.post(
    "/register",
    [
        body("name").notEmpty(),
        body("email").isEmail(),
        body("password").isLength({min: 6})
    ],
    validate,
    register
);
router.post("/login", login);
module.exports = router;