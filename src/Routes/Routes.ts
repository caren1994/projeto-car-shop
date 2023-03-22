import { Router } from 'express';
import CarsController from '../Controllers/CarsController';
import CarODM from '../Models/CarODM';
import CarsService from '../Services/CarsService';

const routes = Router();
const service = new CarsService(new CarODM());
const carsController = new CarsController(service);

routes.post('/cars', (req, res, next) => carsController.create(req, res, next));

export default routes;