import { expect } from 'chai';
import Sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import Car from '../../../src/Domains/Car';
import CarsService from '../../../src/Services/CarsService';
import CarODM from '../../../src/Models/CarODM';

describe('Testes de car service', function () {
  const cars = [
    new Car({
      id: '6348513f34c397abcad040b2',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    }),
  ];

  const carOutput = new Car({
    id: '6348513f34c397abcad040b2',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.990,
    doorsQty: 4,
    seatsQty: 5,
  });

  const car: ICar = {
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.990,
    doorsQty: 4,
    seatsQty: 5,
  };
  const service = new CarsService(
    new CarODM(),
  );
  it('Deveria criar um car com SUCESSO', async function () {
    // Arrange
    Sinon.stub(Model, 'create').resolves(carOutput);
    // Action
    const result = await service.create(car);
    // Assertion
    expect(result.message).to.deep.equal(carOutput);
  });
  it('busca todos os carros', async function () {
    // Arrange

    Sinon.stub(Model, 'find').resolves(cars);

    // Action
    const result = await service.findAll();

    // Assertion
    expect(result.message).to.deep.equal(cars);
  });
  it('buscar carro por  id inválido causando erro', async function () {
    /// Arrange
    Sinon.stub(Model, 'findById').resolves(cars[0]);

    // Action
    const result = await service.findById('1');

    // Assertion
    expect(result.message).to.deep.equal({ message: 'Invalid mongo id' });
  });

  it('busca carro pelo id', async function () {
    // Arrange

    Sinon.stub(Model, 'findById').resolves(cars[0]);

    // Action
    const result = await service.findById('6348513f34c397abcad040b2');

    // Assertion
    expect(result.message).to.deep.equal(cars[0]);
  });
  it('busca carro pelo id inválido e não atualiza', async function () {
    // Arrange
    Sinon.stub(Model, 'findByIdAndUpdate').resolves(cars[0]);
    // Action
    const result = await service.findUpdate('1', car);
    // Assertion
    expect(result.message).to.deep.equal({ message: 'Invalid mongo id' });
  });

  it('busca carro pelo id e atualizar', async function () {
    // Arrange

    Sinon.stub(Model, 'findByIdAndUpdate').resolves(cars[0]);

    // Action
    const result = await service.findUpdate('6348513f34c397abcad040b2', car);

    // Assertion
    expect(result.message).to.deep.equal(cars[0]);
  });

  afterEach(Sinon.restore);
});
