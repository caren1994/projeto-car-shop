import { Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';
import AbstractODM from './AbstractODM';

class CarODM extends AbstractODM<ICar> {
  constructor() {
    const schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false, default: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    super(schema, 'cars');
  }
  public async create(obj:ICar): Promise<ICar> {
    return this.model.create({ ...obj });
  }
  public async findAll() {
    return this.model.find();
  }
  public async findById(id:string) {
    try {
      const car = await this.model.findById(id);
      return car;
    } catch (e) {
      return null;
    }
  }
}
export default CarODM;