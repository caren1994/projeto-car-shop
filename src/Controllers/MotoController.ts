import { NextFunction, Request, Response } from 'express';
import MotoService from '../Services/MotoService';
import IMotorcycle from '../Interfaces/IMotorcycle';

class MotoController {
  private service :MotoService;
  constructor(service:MotoService) {
    this.service = service;
  }
  public async create(req:Request, res:Response, next:NextFunction) {
    const moto:IMotorcycle = {
      model: req.body.model,
      year: req.body.year,
      color: req.body.color,
      status: req.body.status,
      buyValue: req.body.buyValue,
      category: req.body.category,
      engineCapacity: req.body.engineCapacity,
    };
    try {
      const { status, message } = await this.service.create(moto);
      return res.status(status).json(message);
    } catch (error) {
      next(error);
    }
  }
}
export default MotoController;