import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotoODM from '../Models/MotoODM';
import { resCorrect } from '../utils/funcResp';

class MotoService {
  private motoODM:MotoODM;
  constructor(motoODM:MotoODM) {
    this.motoODM = motoODM;
  }
  private createMotoDomain(moto:IMotorcycle):Motorcycle | null {
    if (moto) {
      const newMoto = new Motorcycle(moto);
      return newMoto;
    }
    return null;
  }

  public async create(moto:IMotorcycle) {
    const newMoto = await this.motoODM.create(moto);
    return resCorrect(201, this.createMotoDomain(newMoto));
  }
}
export default MotoService;