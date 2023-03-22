import Vehicle from './Vehicle';
import ICar from '../Interfaces/ICar';

class Car extends Vehicle {
  private doorsQty: number | undefined;
  private seatsQty: number | undefined;

  constructor(car:ICar) {
    super(car);
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
  }
  protected getSeatsQty(): number | undefined {
    return this.seatsQty;
  }
  protected setSeatsQty(value: number | undefined) {
    this.seatsQty = value;
  }
  
  protected getDoorsQty(): number | undefined {
    return this.doorsQty;
  }
  protected setDoorsQty(value: number | undefined) {
    this.doorsQty = value;
  }
}
export default Car;