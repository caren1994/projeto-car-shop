import { isValidObjectId } from 'mongoose';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import { resCorrect, respError } from '../utils/funcResp';

class CarsService {
  private carODM:CarODM;
  constructor(carODM:CarODM) {
    this.carODM = carODM;
  }
  private createCarDomain(car:ICar):Car | null {
    if (car) {
      const newcar = new Car(car);
      return newcar;
    }
    return null;
  }
  
  public async create(car:ICar) {
    const newCar = await this.carODM.create(car);
    return resCorrect(201, this.createCarDomain(newCar));
  }
  public async findAll() {
    const cars = await this.carODM.findAll();
    const carsDomain = cars.map((e:ICar) => this.createCarDomain(e));
    return resCorrect(200, carsDomain);
  }
  public async findById(id: string) {
    if (!isValidObjectId(id)) return respError(422, 'Invalid mongo id');
    const car = await this.carODM.findById(id);
    if (!car) return respError(404, 'Car not found');
    return resCorrect(200, this.createCarDomain(car));
  }
  public async findUpdate(id:string, car: Partial<ICar>) {
    if (!isValidObjectId(id)) return respError(422, 'Invalid mongo id');
    const updateCar = await this.carODM.findUpdate(id, car);
    if (!updateCar) return respError(404, 'Car not found');
    return resCorrect(200, this.createCarDomain(updateCar));
  }
}
export default CarsService;