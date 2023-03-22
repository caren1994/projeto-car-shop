import { isValidObjectId } from 'mongoose';
import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotoODM from '../Models/MotoODM';
import { resCorrect, respError } from '../utils/funcResp';

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
  public async findAll() {
    const moto = await this.motoODM.findAll();
    const motoDomain = moto.map((e:IMotorcycle) => this.createMotoDomain(e));
    return resCorrect(200, motoDomain);
  }
  public async findById(id:string) {
    if (!isValidObjectId(id)) return respError(422, 'Invalid mongo id');
    const moto = await this.motoODM.findById(id);
    if (!moto) return respError(404, 'Motorcycle not found');
    return resCorrect(200, this.createMotoDomain(moto));
  }
}
export default MotoService;