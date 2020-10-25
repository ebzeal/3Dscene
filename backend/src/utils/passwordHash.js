import argon2 from 'argon2';

/**
 * @class PasswordHash
 * @description Hashes and verifies passwords
 */
class PasswordHash {
  /**

 *
 * @description Method to hash a user password
 * @param {string} password user password
 * @returns {string} hashed string
 */
  static async hashPassword(password) {
    try {
      return await argon2.hash(password);
    } catch (err) {
      return err;
    }
  }

  /**

 *
 * @description Method to hash a user password
 * @param {string} hashedPassword hash salt
 * @param {string} inputedPassword hashed password from db
 * @returns {boolean} boolean
 */
  static async verifyPassword(hashedPassword, inputedPassword) {
    try {
      return !!(await argon2.verify(hashedPassword, inputedPassword));
    } catch (err) {
      return err;
    }
  }
}

export default PasswordHash;
