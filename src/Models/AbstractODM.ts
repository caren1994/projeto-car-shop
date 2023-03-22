import { Model, Schema, model, models } from 'mongoose';

abstract class AbstractODM<T> {
  readonly model: Model<T>;
  private schema: Schema<T>;
  
  constructor(schema:Schema <T>, modelName:string) {
    this.schema = schema;
    this.model = models[modelName] || model(modelName, this.schema);
  }
  public async create(obj:T): Promise<T> {
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
  public async findUpdate(id:string, obj:Partial<T>) {
    try {
      const updateCar = await this.model.findByIdAndUpdate(id, obj, {
        new: true,
      });
      return updateCar;
    } catch (error) {
      return null;
    }
  }
}

export default AbstractODM;