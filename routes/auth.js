const { Router } = require("express");
const router = new Router();
const usersController = require("../controllers/UsersController");

// /api/auth/signup
router.post("/signup", usersController.signup);
// /api/auth/signin
router.post("/signin", usersController.signin);
// /api/auth/signout
router.post("/signout", usersController.signout);
// /api/auth/activate/:link
router.get("/activate/:link", usersController.activate);
// /api/auth/refresh
router.get("/refresh", usersController.refresh);
// /api/auth/users
router.get("/users", usersController.getUsers);

module.exports = router;
