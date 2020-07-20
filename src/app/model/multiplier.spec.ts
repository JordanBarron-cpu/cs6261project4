import { Multiplier } from './multiplier';

describe('Multiplier', () => {
  it('should create an instance', () => {
    expect(new Multiplier()).toBeTruthy();
  });

  it('should initialize all values correctly', () => {
    let m = new Multiplier();
    expect(m.multiplier).toEqual(1);
    expect(m.multiplierUnit).toEqual("");
    expect(m.multiplierColorList).toEqual(['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white', 'gold', 'silver']);
    expect(m.multiplierDict).toEqual({
                          'black': 1, 'brown': 10,
                          'red': 100, 'orange': 1,
                          'yellow': 10, 'green': 100,
                          'blue': 1, 'violet': 10,
                          'grey': 100, 'white': 1,
                          'gold': 0.1, 'silver': 0.01
                          });
    expect(m.multiplierUnitDict).toEqual({
                          'black': '', 'brown': '',
                          'red': '', 'orange': 'K',
                          'yellow': 'K', 'green': 'K',
                          'blue': 'M', 'violet': 'M',
                          'grey': 'M', 'white': 'G',
                          'gold': '', 'silver': ''
                          });
  });

  it('should set and get multiplier correctly', () => {
    let m = new Multiplier();
    expect(m.getMultiplierDictValue()).toEqual(1);
    m.setMultiplier('red');
    expect(m.getMultiplierDictValue()).toEqual(100);
  });

  it('should set and get multiplier correctly 2', () => {
    let m = new Multiplier();
    expect(m.getMultiplierDictValue()).toEqual(1);
    m.setMultiplier('silver');
    expect(m.getMultiplierDictValue()).toEqual(0.01);
  });

  it('should set and get multiplier unit correctly', () => {
    let m = new Multiplier();
    expect(m.getMultiplierUnitDictValue()).toEqual('');
    m.setMultiplierUnit('red');
    expect(m.getMultiplierUnitDictValue()).toEqual('');
  });

  it('should set and get multiplier unit correctly 2', () => {
    let m = new Multiplier();
    expect(m.getMultiplierUnitDictValue()).toEqual('');
    m.setMultiplierUnit('white');
    expect(m.getMultiplierUnitDictValue()).toEqual('G');
  });

});
