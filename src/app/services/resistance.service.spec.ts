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

  it('should set and get values correctly', () => {
    expect(service.getSigFigure1ResistanceBuild()).toEqual(0);
    service.addSigFigure1ResistanceBuild(9);
    expect(service.getSigFigure1ResistanceBuild()).toEqual(9);

    expect(service.getSigFigure2ResistanceBuild()).toEqual(0);
    service.addSigFigure2ResistanceBuild(5);
    expect(service.getSigFigure2ResistanceBuild()).toEqual(5);

    expect(service.getSigFigure3ResistanceBuild()).toEqual(0);
    service.addSigFigure3ResistanceBuild(2);
    expect(service.getSigFigure3ResistanceBuild()).toEqual(2);

    expect(service.getToleranceResistanceBuild()).toEqual(0);
    service.addToleranceResistanceBuild(0.5);
    expect(service.getToleranceResistanceBuild()).toEqual(0.5);

    expect(service.getMultiplierResistanceBuild()).toEqual(1);
    service.addMultiplierResistanceBuild(100);
    expect(service.getMultiplierResistanceBuild()).toEqual(100);

    expect(service.getMultiplierUnitResistanceBuild()).toEqual('');
    service.addMultiplierUnitResistanceBuild('G');
    expect(service.getMultiplierUnitResistanceBuild()).toEqual('G');
  });

  it('should calculate resistance using significant figures and multiplier', () => {
    service.addSigFigure1ResistanceBuild(4);
    service.addSigFigure2ResistanceBuild(5);
    service.addSigFigure3ResistanceBuild(6);
    service.addMultiplierResistanceBuild(1);
    expect(service.getCalculation()).toEqual(456);

    service.addSigFigure1ResistanceBuild(1);
    service.addSigFigure2ResistanceBuild(2);
    service.addSigFigure3ResistanceBuild(3);
    service.addMultiplierResistanceBuild(10);
    expect(service.getCalculation()).toEqual(1230);

    service.addSigFigure1ResistanceBuild(7);
    service.addSigFigure2ResistanceBuild(8);
    service.addSigFigure3ResistanceBuild(9);
    service.addMultiplierResistanceBuild(100);
    expect(service.getCalculation()).toEqual(78900);
  });

  it('should display full string of the Resistance build', () => {
    service.addSigFigure1ResistanceBuild(2);
    service.addSigFigure2ResistanceBuild(4);
    service.addSigFigure3ResistanceBuild(5);
    service.addMultiplierResistanceBuild(10);
    service.addMultiplierUnitResistanceBuild('M');
    service.addToleranceResistanceBuild(0.25);

    expect(service.calculationToString()).toEqual("2450M +/- 0.25%");
  });

  it('should throw errors', () => {
    let result = function() {
      service.addSigFigure1ResistanceBuild(-1);
    }
    expect(result).toThrow("sigFigure1 value out of range");

    let result2 = function() {
      service.addSigFigure2ResistanceBuild(-2);
    }
    expect(result2).toThrow("sigFigure2 value out of range");

    let result3 = function() {
      service.addSigFigure3ResistanceBuild(11);
    }
    expect(result3).toThrow("sigFigure3 value out of range");

    let result4 = function() {
      service.addMultiplierResistanceBuild(2);
    }
    expect(result4).toThrow("multiplier value out of range");

    let result5 = function() {
      service.addMultiplierUnitResistanceBuild('P');
    }
    expect(result5).toThrow("multiplier unit value out of range");

    let result6 = function() {
      service.addToleranceResistanceBuild(3);
    }
    expect(result6).toThrow("tolerance value out of range");
  });
});
