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
    });
  } catch (error) {
    throw new Error(error);
  }
};

const signInUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      generateToken(res, user._id);
      res.status(200).json({
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        age: user.age,
        profileImage: user.profileImage,
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
  res.send("User Updated");
};
export { signUpUser, signInUser, logoutUser, updateUser };
