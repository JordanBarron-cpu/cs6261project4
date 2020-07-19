export class SigFigure {
  public sigFiguresList: string[];
  private sigFiguresDict: any;
  public sigFigure: number;

  constructor() {
    this.sigFiguresList = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue',
                'violet', 'grey', 'white'];
    this.sigFiguresDict = {
                            'black': 0, 'brown': 1,
                            'red': 2, 'orange': 3,
                            'yellow': 4, 'green': 5,
                            'blue': 6, 'violet': 7,
                            'grey': 8, 'white': 9
                          };
  }

  setSigFigure(color: string) {
    this.sigFigure = this.sigFiguresDict[color];
  }

  getSigFigureDictValue(): number {
    return this.sigFigure;
  }
}
