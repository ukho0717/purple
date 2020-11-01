import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const UserSchema = new Schema({
  username: String,
  hashedPassword: String,
  premium: {
    type: String,
    enum: ['no_sub','3month','6month','1year'],
    default: 'no_sub'
  }
});

UserSchema.methods.setPassword = async function (password) {
  const hash = await bcrypt.hash(password, 10);
  this.hashedPassword = hash;
};
UserSchema.methods.checkPassword = async function (password) {
  const result = await bcrypt.compare(password, this.hashedPassword);
  return result;
};
UserSchema.methods.serialize = function () {
  const data = this.toJSON();
  delete data.hashedPassword;
  return data;
};
UserSchema.methods.generateToken = function () {
  const token = jwt.sign(
    {
      // 토큰 안에 집어놓고 싶은 데이터
      _id: this.id,
      username: this.username,
    },
    process.env.JWT_SECRET, //JWT 암호
    {
      expiresIn: "7d", //7일 유지
    }
  );
  return token;
};

UserSchema.statics.findByUsername = function (username) {
  // console.dir(this);
  return this.findOne({ username });
};

const User = mongoose.model("User", UserSchema);

export default User;
