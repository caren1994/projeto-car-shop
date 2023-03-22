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

  it('Criando moto', async function () {
    Sinon.stub(Model, 'create').resolves(motorycles[0]);
  
    const result = await service.create(motoInput);

    expect(result.message).to.deep.equal(motorycles[0]);
  });
  it('buscando todas as motos', async function () {
    Sinon.stub(Model, 'find').resolves(motorycles);

    const result = await service.findAll();

    expect(result.message).to.deep.equal(motorycles);
  });

  it('id invalido ao tetar buscar moto', async function () {
    Sinon.stub(Model, 'findById').resolves(motorycles[0]);

    const result = await service.findById('1');

    expect(result.message).to.deep.equal({ message: 'Invalid mongo id' });
  });
  it('buscando moto por  id', async function () {
    Sinon.stub(Model, 'findById').resolves(motorycles[0]);

    const result = await service.findById('641b5b65100a8a05a3875790');

    expect(result.message).to.deep.equal(motorycles[0]);
  });

  it('erro id ao tentar atualizar moto', async function () {
    Sinon.stub(Model, 'findByIdAndUpdate').resolves(motorycles[0]);

    const result = await service.findUpdate('1', motoInput);

    expect(result.message).to.deep.equal({ message: 'Invalid mongo id' });
  });
  it('atualizando moto ', async function () {
    Sinon.stub(Model, 'findByIdAndUpdate').resolves(motorycles[0]);

    const result = await service.findUpdate('641b5b65100a8a05a3875790', motoInput);

    expect(result.message).to.deep.equal(motorycles[0]);
  });

  afterEach(Sinon.restore);
});