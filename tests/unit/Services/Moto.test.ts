import { expect } from 'chai';
import Sinon from 'sinon';
import { Model } from 'mongoose';
import MotoService from '../../../src/Services/MotoService';
import MotoODM from '../../../src/Models/MotoODM';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import Motorcycle from '../../../src/Domains/Motorcycle';

describe('Test de Moto Service', function () {
  const motoInput: IMotorcycle = {
    model: 'Honda Cb 600f Hornet',
    year: 2005,
    color: 'Yellow',
    buyValue: 30,
    category: 'Street',
    engineCapacity: 600,
    status: true,
  };

  const motorycles = [
    new Motorcycle({
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      buyValue: 30,
      category: 'Street',
      engineCapacity: 600,
      status: true,
      id: '641b5b65100a8a05a3875790',
    }),
  ];
  const service = new MotoService(
    new MotoODM(),
  );

  it('Create motorcycle', async function () {
    Sinon.stub(Model, 'create').resolves(motorycles[0]);
  
    const result = await service.create(motoInput);

    expect(result.message).to.deep.equal(motorycles[0]);
  });
});