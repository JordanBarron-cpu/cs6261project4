import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResistanceService {
  public sigFigure1ResistanceBuild: number;
  public sigFigure2ResistanceBuild: number;
  public sigFigure3ResistanceBuild: number;
  // public colors: string[];
  private theCalculation: string;
  // public sigFiguresDict: any;
  public multiplierDict: any;
  public toleranceDict: any;
  // public sigFigure1: number;
  // public sigFigure2: number;
  // public sigFigure3: number;
  public multiplier: number;
  public multiplierUnit: string;
  public tolerance: number;

  constructor() {
    // this.theCalculation = 0
      this.sigFigure1ResistanceBuild = 0;
      this.sigFigure2ResistanceBuild = 0;
      this.sigFigure3ResistanceBuild = 0;

    // this.colors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue',
    //             'violet', 'grey', 'white', 'gold', 'silver', 'none'];
    // this.theCalculation = 0;

    // this.sigFiguresDict = {
    //                 'black': 0, 'brown': 1,
    //                 'red': 2, 'orange': 3,
    //                 'yellow': 4, 'green': 5,
    //                 'blue': 6, 'violet': 7,
    //                 'grey': 8, 'white': 9
    //               };

    this.multiplierDict = {
                    'black': 1, 'brown': 10,
                    'red': 100, 'orange': 1,
                    'yellow': 10, 'green': 100,
                    'blue': 1, 'violet': 10,
                    'grey': 100, 'white': 1,
                    'gold': 0.1, 'silver': 0.01
                  };

    this.toleranceDict = {
                    'brown': 1, 'red': 2,
                    'green': .5, 'blue': .25,
                    'violet': .1, 'grey': 0.05,
                    'gold': 5, 'silver': 10,
                    'none': 20
                  };
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
  // setSigFigure1(color: string) {
  //   this.sigFigure1 = this.sigFiguresDict[color];
  // }
  //
  // setSigFigure2(color: string) {
  //   this.sigFigure2 = this.sigFiguresDict[color];
  // }
  //
  // setSigFigure3(color: string) {
  //   this.sigFigure3 = this.sigFiguresDict[color];
  // }

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
  //
  // setTolerance(color: string) {
  //   this.tolerance = this.toleranceDict[color];
  // }

  // getSigFigure1(): number  {
  //   return this.sigFigure1;
  // }
  // getSigFigure2(): number  {
  //   return this.sigFigure2;
  // }
  // getSigFigure3(): number  {
  //   return this.sigFigure3;
  // }
  // getSigFigure1ResistanceBuild() {
  //   return this.sigFigure1ResistanceBuild;
  // }
  // getSigFigure2ResistanceBuild() {
  //   return this.sigFigure2ResistanceBuild;
  // }
  // getSigFigure3ResistanceBuild() {
  //   return this.sigFigure3ResistanceBuild;
  // }
  //
  // getMultiplier(): number  {
  //   return this.multiplier;
  // }
  //
  // getMultiplierUnit(): string {
  //   return this.multiplierUnit;
  // }
  //
  // getTolerance(): number {
  //   return this.tolerance;
  // }

  getCalculation(): string {
    let fullSigFigure: Array<number> = [this.sigFigure1ResistanceBuild, this.sigFigure2ResistanceBuild, this.sigFigure3ResistanceBuild];
    let fullSigFigureString: string = "";
    let fullSigFigureNumber: number = 0;
    fullSigFigureString = fullSigFigure[0].toString() + fullSigFigure[1].toString() + fullSigFigure[2].toString();
    //
    // for (let sigFigure of fullSigFigure) {
    //   fullSigFigureString += fullSigFigure[sigFigure];
    // }
    // fullSigFigureNumber = Number(fullSigFigureString);

    this.theCalculation = fullSigFigureString;
    // this.theCalculation = this.getSigFigure1() + this.getSigFigure2() + this.getSigFigure3() * this.getMultiplier();
    return this.theCalculation;
  }

  calculationToString(): string {
    // let calculation: string = this.getCalculation().toString();
    return this.getCalculation() + "M +/- .1%";
      // return this.getCalculation() + this.getMultiplierUnit() + " +/- " + this.getTolerance() + "%";
  }
}
