import { Component, OnInit } from '@angular/core';
import { ResistanceService } from '../services/resistance.service';
import { SigFigure } from '../model/sig-figure';
import { Multiplier } from '../model/multiplier';
import { Tolerance } from '../model/tolerance';

@Component({
  selector: 'app-resistance',
  templateUrl: './resistance.component.html',
  styleUrls: ['./resistance.component.css']
})
export class ResistanceComponent implements OnInit {
  public theSigFigures: Array<SigFigure>;
  public theTolerance: Tolerance;
  public theMultiplier: Multiplier;
  public message: string;

  constructor(private resistanceService: ResistanceService) { }

  ngOnInit(): void {
    this.theSigFigures = [new SigFigure(), new SigFigure(), new SigFigure];
    this.theTolerance = new Tolerance();
    this.theMultiplier = new Multiplier();
    this.message = "";
  }

  setMessage() {
    this.resistanceService.addSigFigure1ResistanceBuild(this.theSigFigures[0].getSigFigureDictValue());
    this.resistanceService.addSigFigure2ResistanceBuild(this.theSigFigures[1].getSigFigureDictValue());
    this.resistanceService.addSigFigure3ResistanceBuild(this.theSigFigures[2].getSigFigureDictValue());
    this.resistanceService.addToleranceResistanceBuild(this.theTolerance.getToleranceDictValue());
    // this.resistanceService.addMultiplierResistanceBuild(this.theMultiplier.getMultiplierDictValue());
    this.resistanceService.addMultiplierUnitResistanceBuild(this.theMultiplier.getMultiplierUnitResistanceBuildDictValue());
    this.message = this.resistanceService.calculationToString();
  }

  trackSigFigureBySlot(index, sigFiguresList) {
    return sigFiguresList.index;
  }

  trackMultiplierBySlot(index, multiplierList) {
    return multiplierList.index;
  }

  trackToleranceBySlot(index, toleranceList) {
    return toleranceList.index;
  }
}
