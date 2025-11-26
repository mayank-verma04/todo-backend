const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false,
    },
  },
  { timestamps: true }
);



// PASSWORD HASHING (IMPORTANT)
// error next is not a function fix the error
userSchema.pre("save", async function () {
  // ❗ must use normal function, NOT arrow function
  if (!this.isModified("password")) {
    return ;// password not modified, skip hashing
  }


  try {
    this.password = await bcrypt.hash(this.password, 10);
     // now works
  } catch (err) {
    throw new Error("Password hashing failed");}
});



// COMPARE PASSWORD
userSchema.methods.comparePassword = function (enteredPassword) {
  return bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
