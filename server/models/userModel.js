const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      match: /^[a-zA-Z]+$/,
      minlength: 2, // Ensures that the first name is at least 2 characters long
    },
    lastName: {
      type: String,
      required: true,
      match: /^[a-zA-Z]+$/,
      minlength: 1, // Ensures that the last name is at least 2 characters long
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      validate: {
        validator: function (value) {
          // Regular expression for email validation
          const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
          return emailRegex.test(value);
        },
        message: "Invalid email format",
      },
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);
