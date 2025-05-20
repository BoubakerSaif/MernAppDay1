import jwt from "jsonwebtoken";
import UserModel from "../Models/userModel.js";

const protect = async (req, res, next) => {
  let token;
  token = req.cookies.JWT;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await UserModel.findById(decoded.userId);
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized,Invalid Token");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized,no Token");
  }
};

export { protect };
