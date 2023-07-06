import expres from 'express';
import multer from 'multer';
const webRouter = expres.Router();
import userRouter from './userRoute.js';


webRouter.get('/', (req, res) => {
    res.send('Hello World!');
});

webRouter.use('/user', userRouter);

export default webRouter;

