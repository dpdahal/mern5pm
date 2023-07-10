import express from 'express';
import NewsController from '../controllers/NewsController.js';
import FileUploads from '../config/FileUploads.js';
const newsRouter = express.Router();

const newsInstance = new NewsController();
const fInstance = new FileUploads();
const upload = fInstance.fileUpload('/news');


newsRouter.get('/', newsInstance.index );
newsRouter.post('/',upload.single('image'), newsInstance.store);
newsRouter.get('/:id', newsInstance.show);
newsRouter.put('/:id',upload.single('image'), newsInstance.update);
newsRouter.delete('/:id', newsInstance.destroy);


export default newsRouter;