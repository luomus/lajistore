import { Test, TestingModule } from '@nestjs/testing';
import { LajiGraphQlService } from './laji-graph-ql.service';

describe('LajiGraphQlService', () => {
  let service: LajiGraphQlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LajiGraphQlService],
    }).compile();

    service = module.get<LajiGraphQlService>(LajiGraphQlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return list of classes', async () => {
    const classes = await service.getAllClasses();
    expect(classes).toContainEqual('MY.document');
  });

  it('should return data for classes', async () => {
    const classData = await service.getClassData('MY.document');
    const gatherings = classData.properties.find(
      (p) => p.property === 'MY.gatherings'
    );
    const altProp = classData.properties.find(
      (p) => p.property === 'MZ.publicityRestrictions'
    );

    expect(classData).toBeDefined();
    expect(classData).toHaveProperty('class');
    expect(classData).toHaveProperty('shortName');
    expect(classData).toHaveProperty('label');
    expect(classData).toHaveProperty('properties');

    expect(gatherings).toBeDefined();
    expect(gatherings).toHaveProperty('property');
    expect(gatherings).toHaveProperty('label');
    expect(gatherings).toHaveProperty('shortName');
    expect(gatherings).toHaveProperty('range');

    expect(altProp).toBeDefined();
    expect(altProp).toHaveProperty('alts');
  });
});
