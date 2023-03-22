import { Router } from 'express';
import MotoController from '../Controllers/MotoController';
import MotoService from '../Services/MotoService';
import MotoODM from '../Models/MotoODM';

const service = new MotoService(new MotoODM());
const motoController = new MotoController(service);
const Mroutes = Router();
Mroutes.post('/motorcycles', (req, res, next) => motoController.create(req, res, next));

export default Mroutes;
