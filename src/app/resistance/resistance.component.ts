import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resistance',
  templateUrl: './resistance.component.html',
  styleUrls: ['./resistance.component.css']
})
export class ResistanceComponent implements OnInit {
  public colors: string[];
  public sigFiguresList: string[];
  public multiplierList: string[];
  public tolerance: number[];
  public sigFiguresDict: any;

  constructor() { }

  ngOnInit(): void {
    this.colors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue',
                'violet', 'grey', 'white', 'gold', 'silver', 'none'];
    this.sigFiguresList = [this.colors[0], this.colors[1], this.colors[2],
                          this.colors[3], this.colors[4], this.colors[5],
                          this.colors[6], this.colors[7], this.colors[8],
                          this.colors[9]
                          ];
    this.multiplierList = [];
    this.tolerance = [];

    this.sigFiguresDict = {
                    'black': 0, 'brown': 1,
                    'red': 2, 'orange': 3,
                    'yellow': 4, 'green': 5,
                    'blue': 6, 'violet': 7,
                    'grey': 8, 'white': 9};
  }

  getColors(): string[] {
    return this.colors;
  }

  getSigFiguresList(): string[] {
    return this.sigFiguresList;
  }

  getMultiplierList(): string[] {
    return this.multiplierList;
  }

  getTolerance(): number[] {
    return this.tolerance;
  }

  getSigFiguresDict(color: string) : any {
    return this.sigFiguresDict[color];
  }
  //
  // getSigFiguresKeys(): string[] {
  //   return this.sigFiguresDict.keys();
  // }
  //
  // getSigFiguresValues(): number[] {
  //   return this.sigFiguresDict.values();
  // }

  trackSigFigBySlot(index, sigFiguresList) {
    return sigFiguresList.index;
  }

}
