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
});
