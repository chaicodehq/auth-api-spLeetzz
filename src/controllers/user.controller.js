import { User } from "../models/user.model.js";

export async function listUsers(req, res, next) {
  try {
    const users = await User.find();
    return res.status(200).json({ users });
  } catch (error) {
    next(error);
  }
}

export async function getUser(req, res, next) {
  try {
    const user = await User.findById(req.params.id);
    if (!user)
      return res.status(404).json({ error: { message: "User not found" } });
    return res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
}

export async function deleteUser(req, res, next) {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user)
      return res.status(404).json({ error: { message: "User not found" } });
    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    next(error);
  }
}
