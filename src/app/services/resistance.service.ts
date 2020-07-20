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
  public multiplierDict: any;
  public multiplier: number;
  public multiplierUnit: string;


  constructor() {
    // this.theCalculation = 0
    this.sigFigure1ResistanceBuild = 0;
    this.sigFigure2ResistanceBuild = 0;
    this.sigFigure3ResistanceBuild = 0;
    this.toleranceResistanceBuild = 0.0;

    // this.multiplierDict = {
    //                 'black': 1, 'brown': 10,
    //                 'red': 100, 'orange': 1,
    //                 'yellow': 10, 'green': 100,
    //                 'blue': 1, 'violet': 10,
    //                 'grey': 100, 'white': 1,
    //                 'gold': 0.1, 'silver': 0.01
    //               };
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

  // setMultiplier(color: string) {
  //   this.multiplier = this.multiplierDict[color];
  //   if (color == "black" || color == "brown" || color == "red" || color == "gold" || color == "silver") {
  //     this.multiplierUnit = '';
  //   } else if(color == "orange" || color == "yellow" || color == "green") {
  //     this.multiplierUnit = 'K';
  //   } else if(color == "blue" || color == "violet" || color == "grey") {
  //     this.multiplierUnit = 'G';
  //   } else {
  //     this.multiplierUnit = 'M';
  //   }
  // }

  addToleranceResistanceBuild(toleranceDictValue: number) {
    this.toleranceResistanceBuild = toleranceDictValue;
  }
  // getMultiplier(): number  {
  //   return this.multiplier;
  // }
  //
  // getMultiplierUnit(): string {
  //   return this.multiplierUnit;
  // }
  //
  getSigFigure1ResistanceBuild() {
    return this.sigFigure1ResistanceBuild;
  }
  getSigFigure2ResistanceBuild() {
    return this.sigFigure2ResistanceBuild;
  }
  getSigFigure3ResistanceBuild() {
    return this.sigFigure3ResistanceBuild;
  }
  getToleranceResistanceBuild(): number {
    return this.toleranceResistanceBuild;
  }

  getCalculation(): string {
    let fullSigFigure: Array<number> = [this.sigFigure1ResistanceBuild, this.sigFigure2ResistanceBuild, this.sigFigure3ResistanceBuild];
    let fullSigFigureString: string = "";
    let fullSigFigureNumber: number = 0;
    fullSigFigureString = fullSigFigure[0].toString() + fullSigFigure[1].toString() + fullSigFigure[2].toString();

    this.theCalculation = fullSigFigureString;
    // this.theCalculation = this.getSigFigure1() + this.getSigFigure2() + this.getSigFigure3() * this.getMultiplier();
    return this.theCalculation;
  }

  calculationToString(): string {
    // let calculation: string = this.getCalculation().toString();
    return this.getCalculation() + " +/- " + this.getToleranceResistanceBuild() + "%";
      // return this.getCalculation() + this.getMultiplierUnit() + " +/- " + this.getTolerance() + "%";
  }
}
