import expres from 'express';
const webRouter = expres.Router();
import userRouter from './userRoute.js';
import catRoute from './categoryRoute.js';
import newsRouter from './newsRoute.js';


webRouter.get('/', (req, res) => {
    res.send('Hello World!');
});

webRouter.use('/user', userRouter);
webRouter.use('/category', catRoute);
webRouter.use('/news', newsRouter);

export default webRouter;

