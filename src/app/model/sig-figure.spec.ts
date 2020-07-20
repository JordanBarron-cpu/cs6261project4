import { SigFigure } from './sig-figure';

describe('SigFigure', () => {
  it('should create an instance', () => {
    expect(new SigFigure()).toBeTruthy();
  });

    it('should initialize all values correctly', () => {
      let s = new SigFigure();
      expect(s.sigFigure).toEqual(0);
      expect(s.sigFiguresColorList).toEqual(['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue',
                  'violet', 'grey', 'white']);
      expect(s.sigFiguresDict).toEqual({
                              'black': 0, 'brown': 1,
                              'red': 2, 'orange': 3,
                              'yellow': 4, 'green': 5,
                              'blue': 6, 'violet': 7,
                              'grey': 8, 'white': 9
                            });
    });

    it('should set and get sigFigure correctly', () => {
      let s = new SigFigure();
      expect(s.getSigFigureDictValue()).toEqual(0);
      s.setSigFigure('violet');
      expect(s.getSigFigureDictValue()).toEqual(7);
    });

    it('should set and get sigFigure correctly 2', () => {
      let s = new SigFigure();
      expect(s.getSigFigureDictValue()).toEqual(0);
      s.setSigFigure('orange');
      expect(s.getSigFigureDictValue()).toEqual(3);
    });

    it('should throw errors SigFigure', () => {
      let s = new SigFigure();
      var result = function() {
        s.setSigFigure(null);
      }
      expect(result).toThrow("color cannot be null");

      var result2 = function() {
        s.setSigFigure('');
      }
      expect(result2).toThrow("color cannot be empty");

      var result3 = function() {
        s.setSigFigure('Indigo');
      }
      expect(result3).toThrow("color is not in list");
    });
});
