import userModel from "../Models/userModel.js";
import generateToken from "../Utils/generateToken.js";

const signUpUser = async (req, res) => {
  const { firstName, lastName, email, age, profileImage, password } = req.body;
  try {
    const userExists = await userModel.findOne({ email });
    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }

    const user = await userModel.create({
      firstName,
      lastName,
      email,
      age,
      profileImage,
      password,
    });

    res.status(201).json({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      age: user.age,
      profileImage: user.profileImage,
      admin: user.admin,
    });
  } catch (error) {
    throw new Error(error);
  }
};

const signInUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (user.blocked) {
      res.status(401).json({
        message:
          "You have ben banned bu an Admin, you can contact the support by this email:todo.support@gmail.com",
      });
    }

    if (user && (await user.matchPassword(password))) {
      generateToken(res, user._id);
      res.status(200).json({
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        age: user.age,
        profileImage: user.profileImage,
        admin: user.admin,
      });
    } else {
      res.status(401).json({ message: "Invalid Email or password" });
    }
  } catch (error) {
    throw new Error(error);
  }
};

const logoutUser = async (req, res) => {
  res.cookie("JWT", "", { httpOnly: true, expires: new Date(0) });
  res.status(200).json({ message: "User Logged Out" });
};
const updateUser = async (req, res) => {
  const { firstName, lastName, email, age, profileImage, password } = req.body;
  try {
    const user = await userModel.findById(req.user._id);
    if (user) {
      user.firstName = firstName || user.firstName;
      user.lastName = lastName || user.lastName;
      user.email = email || user.email;
      user.age = age || user.age;
      user.profileImage = profileImage || user.profileImage;
      user.password = password || user.password;

      await user.save();
      res.status(200).json({
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        age: user.age,
        profileImage: user.profileImage,
        admin: user.admin,
      });
    }
  } catch (error) {
    res.status(401);
    throw new Error(error);
  }
};
const banUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.findById(id);
    if (user) {
      user.blocked = true;

      await user.save();
      res.status(200).json({
        message: "User Banned",
      });
    }
  } catch (error) {
    res.status(401);
    throw new Error(error);
  }
};
const unBanUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.findById(id);
    if (user) {
      user.blocked = false;

      await user.save();
      res.status(200).json({
        message: "User unBanned",
      });
    }
  } catch (error) {
    res.status(401);
    throw new Error(error);
  }
};

export { signUpUser, signInUser, logoutUser, updateUser, banUser, unBanUser };
