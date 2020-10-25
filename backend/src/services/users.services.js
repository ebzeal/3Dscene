import db from '../db';
import PasswordHash from '../utils/passwordHash';

/**
 * @class UserService
 */
class UserService {
  /**
   * @static
   * @param {*} root Apollo server root arg
   * @param {object} input input from req body
   * @returns {object} database model
   * @memberof UserService
   * @description Creates a new User in the db
   */
  static async createUser(root, { input }) {
    try {
      const { password, email, userName } = input;
      const hashedPassword = await PasswordHash.hashPassword(password);
      const isUserName = await db.users.list().find((user) => user.userName === userName);
      if (isUserName && isUserName.userName === userName) throw new Error('username already exist in our DB');
      const isUserEmail = await db.users.list().find((user) => user.email === email);
      if (isUserEmail && isUserEmail.email === email) throw new Error('email already exist in our DB');
      input.password = hashedPassword;
      const id = await db.users.create(input);
      return db.users.get(id);
    } catch (error) { return error; }
  }

  /**
   * @static
   * @param {*} root Apollo server root arg
   * @param {object} logInDetails input from req body
   * @returns {object} database model
   * @memberof UserService
   * @description fetches a User from the db
   */
  static async getUser(root, { logInDetails }) {
    try {
      const { password, details } = logInDetails;
      const isUser = db.users.list().find(
        (user) => user.email === details || user.userName === details
      );
      const decryptPassword = await PasswordHash.verifyPassword(isUser?.password, password);
      if (!(isUser && decryptPassword)) throw new Error('User not found');
      return isUser;
    } catch (error) { return error; }
  }
}

export default UserService;