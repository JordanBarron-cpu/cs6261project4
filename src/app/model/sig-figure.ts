export class SigFigure {
  public sigFiguresColorList: string[];
  public sigFiguresDict: any;
  public sigFigure: number;

  constructor() {
    this.sigFigure = 0;
    this.sigFiguresColorList = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue',
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
    if (color == null) {
      throw "color cannot be null";
    } else if (color.trim() == '') {
      throw "color cannot be empty";
    } else if (this.sigFiguresColorList.includes(color) == false) {
      throw "color is not in list";
    }
    this.sigFigure = this.sigFiguresDict[color];
  }

  getSigFigureDictValue(): number {
    return this.sigFigure;
  }
}
