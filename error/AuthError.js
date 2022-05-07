class AuthError extends Error {
  constructor(message, status) {
    super();
    this.message = message;
    this.status = status;
  }

  static alredyExist(email) {
    return new AuthError(`User with ${email} alredy exist`, 401);
  }
}

module.exports = AuthError;
