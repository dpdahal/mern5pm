import express from 'express';
import UserControllers from '../controllers/userController.js';
import FileUploads from '../config/FileUploads.js';
const userRouter = express.Router();

const userInstance = new UserControllers();
const fInstance = new FileUploads();
const upload = fInstance.fileUpload('/users');


userRouter.get('/', userInstance.index );
userRouter.post('/',upload.single('image'), userInstance.store);
userRouter.get('/:id', userInstance.show);
userRouter.put('/:id', userInstance.update);
userRouter.delete('/:id', userInstance.destroy);


export default userRouter;