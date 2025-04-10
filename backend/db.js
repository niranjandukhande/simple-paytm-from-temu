const mongoose = require("mongoose")

mongoose.connect(
  "mongodb+srv://admin:NHJjpqQAJzJGlD1N@cluster0.652gq.mongodb.net/paytm"
)

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  password: { type: String, required: true, minLength: 6 },
  firstName: { type: String, required: true, trim: true, maxLength: 50 },
  lastName: { type: String, required: true, trim: true, maxLength: 50 },
})

const AccountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
})

const Account = mongoose.model("Account", AccountSchema)
const User = mongoose.model("User", UserSchema)

module.exports = {
  User,
  Account,
}
