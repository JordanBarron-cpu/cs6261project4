import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResistanceService {
  private theCalculation: number;

  constructor() {
    this.theCalculation = 0;
  }

  addSigFigures() {

  }

  addMultiplier() {

  }

  addTolerance() {

  }

  getCalculation(): number {
    "sigFigure * numericValueForMultiplier"
    return this.theCalculation;
  }

  calculationToString(): string {
    return this.theCalculation + "(measurement) +/- (tolerance)"
  }
}
