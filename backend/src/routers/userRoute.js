import express from 'express';
import UserControllers from '../controllers/userController.js';
import FileUploads from '../config/FileUploads.js';
const userRouter = express.Router();
import RouteMiddleware from "../middleware/RouteMiddleware.js";

const userInstance = new UserControllers();
const fInstance = new FileUploads();
const upload = fInstance.fileUpload('/users');


userRouter.get('/',RouteMiddleware, userInstance.index );
userRouter.post('/',upload.single('image'), userInstance.store);
userRouter.get('/:id', userInstance.show);
userRouter.put('/:id',RouteMiddleware,upload.single('image'), userInstance.update);
userRouter.delete('/:id',RouteMiddleware, userInstance.destroy);


export default userRouter;