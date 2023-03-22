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
  public async findAll(_req:Request, res:Response, next:NextFunction) {
    try {
      const { status, message } = await this.service.findAll();
      return res.status(status).json(message);
    } catch (error) {
      next(error);
    }
  }
  public async findById(req:Request, res:Response, next:NextFunction) {
    try {
      const { id } = req.params;
      const { status, message } = await this.service.findById(id);
      return res.status(status).json(message);
    } catch (error) {
      next(error);
    }
  }
}
export default MotoController;