import express from "express";
import userModel from "../model/userModel.js";
import UserController from "../controller/userController.js"
const router = express.Router();


//ADD USER TO THE DATABASE using callback
const userController=new UserController();
router.post("/add",userController.addUser);
//READ DATA FROM THE DATABASE
router.get("/:id", userController.readUser);
//UPDATE THE USER IN THE DATABASE
router.put("/update/:id", userController.updateUser);
//DELETE USER FROM THE DATABASE
router.delete("/delete/:id", userController.deleteUser);
export default router;
