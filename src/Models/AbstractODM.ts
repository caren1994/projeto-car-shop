import { Model, Schema, model, models } from 'mongoose';

abstract class AbstractODM<T> {
  readonly model: Model<T>;
  private schema: Schema<T>;
  
  constructor(schema:Schema <T>, modelName:string) {
    this.schema = schema;
    this.model = models[modelName] || model(modelName, this.schema);
  }
}

export default AbstractODM;