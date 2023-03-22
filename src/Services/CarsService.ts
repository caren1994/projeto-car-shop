import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarsService {
  private carODM:CarODM;
  constructor(carODM:CarODM) {
    this.carODM = carODM;
  }
  private createCarDomain(car:ICar):Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }
  
  public async create(car:ICar) {
    const newCar = await this.carODM.create(car);
    return this.createCarDomain(newCar);
  }
}
export default CarsService;