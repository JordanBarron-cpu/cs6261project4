import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResistanceService {
  private theCalculation: string;
  public sigFigure1ResistanceBuild: number;
  public sigFigure2ResistanceBuild: number;
  public sigFigure3ResistanceBuild: number;
  public toleranceResistanceBuild: number;
  public multiplierResistanceBuild: number;
  public multiplierUnitResistanceBuild: string;


  constructor() {
    // this.theCalculation = 0
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

  getCalculation(): string {
    let fullSigFigureString: string = "";
    let fullSigFigureNumber: number = 0;
    fullSigFigureString = this.getSigFigure1ResistanceBuild().toString() + this.getSigFigure2ResistanceBuild().toString() + this.getSigFigure3ResistanceBuild().toString();

    this.theCalculation = fullSigFigureString;
    // this.theCalculation = this.getSigFigure1() + this.getSigFigure2() + this.getSigFigure3() * this.getMultiplier();
    return this.theCalculation;
  }

  calculationToString(): string {
    // let calculation: string = this.getCalculation().toString();
    return this.getCalculation() + this.getMultiplierUnitResistanceBuild() + " +/- " + this.getToleranceResistanceBuild() + "%";
      // return this.getCalculation() + this.getMultiplierUnit() + " +/- " + this.getTolerance() + "%";
  }
}
