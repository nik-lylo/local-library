const bcrypt = require("bcrypt");
const uuid = require("uuid");
const UserModel = require("../models/user-model");
const MailServices = require("../services/mail-services");
const UserDto = require("../dtos/user-dto");
const TokenServices = require("./token-services");
const AuthError = require("../error/AuthError");
const ApiError = require("../error/ApiError");

class UserServices {
  async signup(email, password, first_name, last_name, next) {
    try {
      // const candidate = await UserModel.findOne({ email });
      // if (candidate) {
      //   throw AuthError.alredyExist(email);
      // }
      const hashPassword = await bcrypt.hash(password, 4);
      const activationLink = uuid.v4();
      const user = await UserModel.create({
        email,
        password: hashPassword,
        activationLink,
        first_name,
        last_name,
      });
      await MailServices.sendActivationMail(
        email,
        `${process.env.API_URL}/api/activate/${activationLink}`
      );
      const userDto = new UserDto(user);
      const tokens = TokenServices.genereteTokens({ ...userDto });
      await TokenServices.saveToken(userDto.id, tokens.refreshToken);
      return { ...tokens, user };
    } catch (e) {
      throw e;
    }
  }
}

module.exports = new UserServices();
