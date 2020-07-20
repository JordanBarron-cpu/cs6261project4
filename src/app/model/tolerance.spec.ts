import { Tolerance } from './tolerance';

describe('Tolerance', () => {
  it('should create an instance', () => {
    expect(new Tolerance()).toBeTruthy();
  });

  it('should initialize all values correctly', () => {
    let t = new Tolerance();
    expect(t.tolerance).toEqual(1);
    expect(t.toleranceColorList).toEqual(['brown', 'red', 'green', 'blue', 'violet', 'grey', 'gold', 'silver', 'none']);
    expect(t.toleranceDict).toEqual({
                            'brown': 1, 'red': 2,
                            'green': .5, 'blue': .25,
                            'violet': .1, 'grey': 0.05,
                            'gold': 5, 'silver': 10,
                            'none': 20
                          });
  });

  it('should set and get Tolerance correctly', () => {
    let t = new Tolerance();
    expect(t.getToleranceDictValue()).toEqual(1);
    t.setTolerance('green');
    expect(t.getToleranceDictValue()).toEqual(.5);
  });

  it('should set and get Tolerance correctly 2', () => {
    let t = new Tolerance();
    expect(t.getToleranceDictValue()).toEqual(1);
    t.setTolerance('none');
    expect(t.getToleranceDictValue()).toEqual(20);
  });

  it('should throw errors Tolerance', () => {
    let t = new Tolerance();
    var result = function() {
      t.setTolerance(null);
    }
    expect(result).toThrow("color cannot be null");

    var result2 = function() {
      t.setTolerance('');
    }
    expect(result2).toThrow("color cannot be empty");

    var result3 = function() {
      t.setTolerance('purple');
    }
    expect(result3).toThrow("color is not in list");
  });
});
