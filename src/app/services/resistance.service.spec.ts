import { TestBed } from '@angular/core/testing';

import { ResistanceService } from './resistance.service';

describe('ResistanceService', () => {
  let service: ResistanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResistanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize all values correctly', () => {
    expect(service.theCalculation).toEqual(0);
    expect(service.sigFigure1ResistanceBuild).toEqual(0);
    expect(service.sigFigure2ResistanceBuild).toEqual(0);
    expect(service.sigFigure3ResistanceBuild).toEqual(0);
    expect(service.toleranceResistanceBuild).toEqual(0.0);
    expect(service.multiplierResistanceBuild).toEqual(1);
    expect(service.multiplierUnitResistanceBuild).toEqual('');
  });
});
