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
  public message: string;
  // public multiplierSelectBox: string[];
  // public multiplerDict: any;


  constructor(private resistanceService: ResistanceService) { }

  ngOnInit(): void {
    this.theSigFigures = [new SigFigure(), new SigFigure(), new SigFigure];
    this.theTolerance = new Tolerance();
    this.message = "";
    // this.multiplierList = [this.colors[0], this.colors[1], this.colors[2],
    //                       this.colors[3], this.colors[4], this.colors[5],
    //                       this.colors[6], this.colors[7], this.colors[8],
    //                       this.colors[9], this.colors[10], this.colors[11]
    //                       ];
    // this.multiplierSelectBox = ['x1', 'x10', 'x100', 'x1k', 'x10k', 'x100K',
    //                           'x1M', 'x10M', 'x100M', 'x1G', 'x0.1', 'x0.01'];
    // this.multiplerDict = {
    //                 'black': 'x1', 'brown': 'x10',
    //                 'red': 'x100', 'orange': 'x1K',
    //                 'yellow': 'x10K', 'green': 'x100K',
    //                 'blue': 'x1M', 'violet': 'x10M',
    //                 'grey': 'x100M', 'white': 'x1G',
    //                 'gold': 'x0.1', 'silver': 'x0.01'
    //               };
  }

  setMessage() {
    this.resistanceService.addSigFigure1ResistanceBuild(this.theSigFigures[0].getSigFigureDictValue());
    this.resistanceService.addSigFigure2ResistanceBuild(this.theSigFigures[1].getSigFigureDictValue());
    this.resistanceService.addSigFigure3ResistanceBuild(this.theSigFigures[2].getSigFigureDictValue());
    this.resistanceService.addToleranceResistanceBuild(this.theTolerance.getToleranceDictValue());
    // this.resistanceService.addSigFigure3ResistanceBuild(this.theSigFigures[2].getSigFigureDictValue());
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
