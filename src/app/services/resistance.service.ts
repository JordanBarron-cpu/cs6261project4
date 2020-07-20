import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResistanceService {
  private theCalculation: number;
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
      this.sigFigure1ResistanceBuild = sigFigure1DictValue;
  }
  addSigFigure2ResistanceBuild(sigFigure2DictValue: number) {
      this.sigFigure2ResistanceBuild = sigFigure2DictValue;
  }
  addSigFigure3ResistanceBuild(sigFigure3DictValue: number) {
      this.sigFigure3ResistanceBuild = sigFigure3DictValue;
  }
  addMultiplierResistanceBuild(multiplierDictValue: number) {
    this.multiplierResistanceBuild = multiplierDictValue;
  }
  addMultiplierUnitResistanceBuild(multiplierUnitDictValue: string) {
    this.multiplierUnitResistanceBuild = multiplierUnitDictValue;
  }
  addToleranceResistanceBuild(toleranceDictValue: number) {
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
