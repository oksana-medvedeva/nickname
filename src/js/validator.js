export default class Validator {
  static validateUsername(name) {
    const result = /^[a-zA-Z][\w-]*[a-zA-Z]$/g.test(name);
    if (!result) {
      return false;
    }
    return !(/\d{3}/g.test(name));
  }
}
