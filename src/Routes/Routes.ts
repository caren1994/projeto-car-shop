import { Router } from 'express';
import CarsController from '../Controllers/CarsController';
import CarsService from '../Services/CarsService';

const routes = Router();
const service = new CarsService();
const carsController = new CarsController(service);

routes.post('/cars', (req, res, next) => carsController.create(req, res, next));
routes.get('/cars', (req, res, next) => carsController.findAll(req, res, next));
routes.get('/cars/:id', (req, res, next) => carsController.findById(req, res, next));

export default routes;