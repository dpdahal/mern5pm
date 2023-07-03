import expres from 'express';
import UserController from '../controllers/UserController.js';

const webRouter = expres.Router();
const userInstance = new UserController();

webRouter.get('/', userInstance.index);

    

export default webRouter;