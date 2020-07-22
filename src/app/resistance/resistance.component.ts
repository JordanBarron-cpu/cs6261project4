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

  setSigFigureResistanceBuildMessage(index: number, event: any) {
    try {
      this.theSigFigures[index].setSigFigure(event);
      this.resistanceService.addSigFigure1ResistanceBuild(this.theSigFigures[0].getSigFigureDictValue());
      this.resistanceService.addSigFigure2ResistanceBuild(this.theSigFigures[1].getSigFigureDictValue());
      this.resistanceService.addSigFigure3ResistanceBuild(this.theSigFigures[2].getSigFigureDictValue());
      this.setMessage();
    } catch(err) {
      this.message = err;
    }
  }

  setMultiplierAndUnitResistanceBuildMessage(event: any) {
    try {
      this.theMultiplier.setMultiplier(event);
      this.theMultiplier.setMultiplierUnit(event);
      this.resistanceService.addMultiplierResistanceBuild(this.theMultiplier.getMultiplierDictValue());
      this.resistanceService.addMultiplierUnitResistanceBuild(this.theMultiplier.getMultiplierUnitDictValue());
      this.setMessage();
    } catch(err) {
      this.message = err;
    }
  }

  setToleranceResistanceBuildMessage(event: any) {
    try {
      this.theTolerance.setTolerance(event);
      this.resistanceService.addToleranceResistanceBuild(this.theTolerance.getToleranceDictValue());
      this.setMessage();
    } catch(err) {
      this.message = err;
    }
  }

  setMessage() {
    this.message = this.resistanceService.calculationToString();
  }

  getMessage() {
    return this.message;
  }
}
