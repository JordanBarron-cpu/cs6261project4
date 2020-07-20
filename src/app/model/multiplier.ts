export class Multiplier {
  public multiplierColorList: string[];
  public multiplierDict: any;
  public multiplier: number;
  public multiplierUnitDict: any;
  public multiplierUnit: string;

  constructor() {
    this.multiplier = 1;
    this.multiplierUnit = "";
    this.multiplierColorList = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white', 'gold', 'silver'];
    this.multiplierDict = {
                          'black': 1, 'brown': 10,
                          'red': 100, 'orange': 1,
                          'yellow': 10, 'green': 100,
                          'blue': 1, 'violet': 10,
                          'grey': 100, 'white': 1,
                          'gold': 0.1, 'silver': 0.01
                          };
    this.multiplierUnitDict = {
                          'black': '', 'brown': '',
                          'red': '', 'orange': 'K',
                          'yellow': 'K', 'green': 'K',
                          'blue': 'M', 'violet': 'M',
                          'grey': 'M', 'white': 'G',
                          'gold': '', 'silver': ''
                          };
  }

  setMultiplier(color: string) {
    this.multiplier = this.multiplierDict[color];
  }

  setMultiplierUnit(color: string) {
    this.multiplierUnit = this.multiplierUnitDict[color];
  }

  getMultiplierUnitDictValue(): string {
    return this.multiplierUnit;
  }

  getMultiplierDictValue(): number {
    return this.multiplier;
  }
}
