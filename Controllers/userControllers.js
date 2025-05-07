import userModel from "../Models/userModel.js";

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

    res.status(201).json(user);
  } catch (error) {
    throw new Error(error);
  }
};
const signInUser = async (req, res) => {
  res.send("User SignIn");
};
const logoutUser = async (req, res) => {
  res.send("User Logout");
};
const updateUser = async (req, res) => {
  res.send("User Updated");
};
export { signUpUser, signInUser, logoutUser, updateUser };
