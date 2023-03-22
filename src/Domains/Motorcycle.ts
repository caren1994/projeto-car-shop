import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(motorcycle: IMotorcycle) {
    super(motorcycle);
    this.category = motorcycle.category;
    this.engineCapacity = motorcycle.engineCapacity;
  }

  public getCategory() {
    return this.category;
  }

  public setCategory(v: string) {
    this.category = v;
  }

  public getEngineCapacity() {
    return this.engineCapacity;
  }

  public setEngineCapacity(v: number) {
    this.engineCapacity = v;
  }
}

export default Motorcycle;