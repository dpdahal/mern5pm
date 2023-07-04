import expres from 'express';
import UserController from '../controllers/UserController.js';

const webRouter = expres.Router();
const userInstance = new UserController();

webRouter.get('/', (req, res) => {
    res.send('Hello World!');
});

/*
==============Start User Routers=========
*/
webRouter.post('/register',userInstance.store);

/*
==============End User Routers=========
*/




export default webRouter;

