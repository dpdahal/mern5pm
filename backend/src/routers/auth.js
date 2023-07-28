import express from "express";
import AuthController from "../controllers/AuthController.js";

let AuthInstance = new AuthController();
let authRoute = express.Router();

authRoute.post('/', AuthInstance.login);

export default authRoute;