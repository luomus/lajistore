import { Test, TestingModule } from '@nestjs/testing';
import { LajiApiService } from './laji-api.service';
import { lastValueFrom } from 'rxjs';

describe('LajiApiService', () => {
  let service: LajiApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LajiApiService],
    }).compile();

    service = module.get<LajiApiService>(LajiApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return list of classes', async () => {
    const classes = await lastValueFrom(service.getAllClasses());
    expect(classes).toContainEqual(expect.objectContaining({ id: 'MY.document' }));

    const doc = classes.find((c) => c.id === 'MY.document');

    expect(doc).toBeDefined();
    expect(doc).toHaveProperty('class');
    expect(doc).toHaveProperty('shortName');
    expect(doc).toHaveProperty('label');
  });

  it('should return data for properties', async () => {
    const properties = await lastValueFrom(service.getProperties());
    const gatherings = properties.find(
      (p) => p.property === 'MY.gatherings'
    );

    expect(gatherings).toBeDefined();
    expect(gatherings).toHaveProperty('property');
    expect(gatherings).toHaveProperty('label');
    expect(gatherings).toHaveProperty('shortName');
    expect(gatherings).toHaveProperty('range');

    const altProp = properties.find(
      (p) => p.property === 'MZ.publicityRestrictions'
    );

    expect(altProp).toBeDefined();
    expect(altProp).toHaveProperty('alts');
  });

  it('should return data for alts', async () => {
    const props = await lastValueFrom(service.getProperties());
    const alts = await lastValueFrom(service.getAlts());

    const publicityRestrictionsProp = props.find(
      (p) => p.property === 'MZ.publicityRestrictions'
    );

    expect(publicityRestrictionsProp).toBeDefined();
    expect(publicityRestrictionsProp!.range).toBeDefined();

    const publicityRestrictionsEnum = alts[publicityRestrictionsProp!.range!]

    expect(publicityRestrictionsEnum).toBeDefined();
    expect(publicityRestrictionsEnum.length).toBeGreaterThan(0);
  })
});
