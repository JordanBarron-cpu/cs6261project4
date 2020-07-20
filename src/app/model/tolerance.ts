export class Tolerance {
  public toleranceColorList: string[];
  public toleranceDict: any;
  public tolerance: number;

  constructor() {
    this.tolerance = 1;
    this.toleranceColorList = ['brown', 'red', 'green', 'blue', 'violet', 'grey', 'gold', 'silver', 'none'];
    this.toleranceDict = {
                            'brown': 1, 'red': 2,
                            'green': 0.5, 'blue': 0.25,
                            'violet': 0.1, 'grey': 0.05,
                            'gold': 5, 'silver': 10,
                            'none': 20
                          };
  }

  setTolerance(color: string) {
    this.tolerance = this.toleranceDict[color];
  }

  getToleranceDictValue(): number {
    return this.tolerance;
  }
}
