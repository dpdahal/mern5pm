import express from 'express';
import CategoryController from '../controllers/CategoryController.js';

let catRoute = express.Router();
let catInstance = new CategoryController();

catRoute.get('/', catInstance.index);
catRoute.get('/:id', catInstance.show);
catRoute.post('/', catInstance.store);
catRoute.put('/:id', catInstance.update);
catRoute.delete('/:id', catInstance.destroy);

export default catRoute;
