import User from '../models/users.js'

export default {
  fetch (callback) {
    User.find({}, callback);
  },
  fetchById (userId, callback) {
    User.findById(userId, callback);
  },
  create (user, callback) {
    new User(user).save(callback)
  }
}
