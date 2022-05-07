const userServices = require("../services/user-services");

class UserController {
  async signup(req, res, next) {
    try {
      const body = req.body;
      const userData = await userServices.signup(
        body.email,
        body.password,
        body.firstname,
        body.lastname,
        next
      );
      res.cookie(`refreshToken`, userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      res.json(userData);
    } catch (e) {
      next(e);
    }
  }
  async signin(req, res, next) {}
  async signout(req, res, next) {}
  async activate(req, res, next) {}
  async refresh(req, res, next) {}
  async getUsers(req, res, next) {
    res.json({ message: "Lol get users" });
  }
}
module.exports = new UserController();
