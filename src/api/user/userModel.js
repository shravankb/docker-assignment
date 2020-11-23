const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true,
},
isArchived: {
    type: Boolean
}
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);
