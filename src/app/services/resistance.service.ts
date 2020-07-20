import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResistanceService {
  public theCalculation: number;
  public sigFigure1ResistanceBuild: number;
  public sigFigure2ResistanceBuild: number;
  public sigFigure3ResistanceBuild: number;
  public toleranceResistanceBuild: number;
  public multiplierResistanceBuild: number;
  public multiplierUnitResistanceBuild: string;

  constructor() {
    this.theCalculation = 0;
    this.sigFigure1ResistanceBuild = 0;
    this.sigFigure2ResistanceBuild = 0;
    this.sigFigure3ResistanceBuild = 0;
    this.toleranceResistanceBuild = 0.0;
    this.multiplierResistanceBuild = 1;
    this.multiplierUnitResistanceBuild = '';
  }

  addSigFigure1ResistanceBuild(sigFigure1DictValue: number) {
    if (sigFigure1DictValue < 0 || sigFigure1DictValue > 9) {
      throw "sigFigure1 value out of range";
    }
      this.sigFigure1ResistanceBuild = sigFigure1DictValue;
  }

  addSigFigure2ResistanceBuild(sigFigure2DictValue: number) {
    if (sigFigure2DictValue < 0 || sigFigure2DictValue > 9) {
      throw "sigFigure2 value out of range";
    }
      this.sigFigure2ResistanceBuild = sigFigure2DictValue;
  }

  addSigFigure3ResistanceBuild(sigFigure3DictValue: number) {
    if (sigFigure3DictValue < 0 || sigFigure3DictValue > 9) {
      throw "sigFigure3 value out of range";
    }
      this.sigFigure3ResistanceBuild = sigFigure3DictValue;
  }

  addMultiplierResistanceBuild(multiplierDictValue: number) {
    if (multiplierDictValue != 1 && multiplierDictValue != 10 &&
        multiplierDictValue != 100 && multiplierDictValue != 0.1 &&
        multiplierDictValue != 0.01) {
      throw "multiplier value out of range";
    }
    this.multiplierResistanceBuild = multiplierDictValue;
  }

  addMultiplierUnitResistanceBuild(multiplierUnitDictValue: string) {
    if (multiplierUnitDictValue != '' && multiplierUnitDictValue != 'K' &&
        multiplierUnitDictValue != 'M' && multiplierUnitDictValue != 'G') {
      throw "multiplier unit value out of range";
    }
    this.multiplierUnitResistanceBuild = multiplierUnitDictValue;
  }

  addToleranceResistanceBuild(toleranceDictValue: number) {
    if (toleranceDictValue != 1 && toleranceDictValue != 2 &&
        toleranceDictValue != 0.5 && toleranceDictValue != 0.25 &&
        toleranceDictValue != 0.1 && toleranceDictValue != 0.05 &&
        toleranceDictValue != 5 && toleranceDictValue != 10 &&
        toleranceDictValue != 20) {
      throw "tolerance value out of range";
    }
    this.toleranceResistanceBuild = toleranceDictValue;
  }

  getSigFigure1ResistanceBuild() {
    return this.sigFigure1ResistanceBuild;
  }
  getSigFigure2ResistanceBuild() {
    return this.sigFigure2ResistanceBuild;
  }
  getSigFigure3ResistanceBuild() {
    return this.sigFigure3ResistanceBuild;
  }
  getMultiplierResistanceBuild() {
    return this.multiplierResistanceBuild;
  }
  getMultiplierUnitResistanceBuild() {
    return this.multiplierUnitResistanceBuild;
  }
  getToleranceResistanceBuild(): number {
    return this.toleranceResistanceBuild;
  }

  getCalculation(): number {
    let fullSigFigureString: string = "";
    fullSigFigureString = this.getSigFigure1ResistanceBuild().toString() + this.getSigFigure2ResistanceBuild().toString() + this.getSigFigure3ResistanceBuild().toString();
    let conversionWithMultiplier: number =  Number(fullSigFigureString) * this.getMultiplierResistanceBuild();
    this.theCalculation = conversionWithMultiplier;
    return this.theCalculation;
  }

  calculationToString(): string {
    return this.getCalculation().toString() + this.getMultiplierUnitResistanceBuild() + " +/- " + this.getToleranceResistanceBuild() + "%";
  }
}
