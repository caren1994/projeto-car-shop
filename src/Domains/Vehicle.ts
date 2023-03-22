import IVehicle from '../Interfaces/IVehicle';

class Vehicle {
  protected id?: string;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean;
  protected buyValue: number;
  
  constructor(vehicle: IVehicle) {
    this.id = vehicle.id;
    this.model = vehicle.model;
    this.year = vehicle.year;
    this.color = vehicle.color;
    this.status = vehicle.status;
    this.buyValue = vehicle.buyValue;
  }

  public getId() {
    return this.id;
  }

  public setId(v: string) {
    this.id = v;
  }

  public getModel() {
    return this.model;
  }

  public setModel(v: string) {
    this.model = v;
  }

  public getYear() {
    return this.year;
  }

  public setYear(v: number) {
    this.year = v;
  }

  public getColor() {
    return this.color;
  }

  public setColor(v: string) {
    this.color = v;
  }

  public getStatus() {
    return this.status;
  }

  public setStatus(v: boolean) {
    this.status = v;
  }

  public getBuyValue() {
    return this.buyValue;
  }

  public setBuyValue(v: number) {
    this.buyValue = v;
  }
}

export default Vehicle;