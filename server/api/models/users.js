import mongoose from 'mongoose'

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstName: {
    type: String,
    Required: 'User first name'
  },
  lastName: {
    type: String,
    Required: 'User last name'
  }
});

var User = mongoose.model('Users', UserSchema);

export default User
