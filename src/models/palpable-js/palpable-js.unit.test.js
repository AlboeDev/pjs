import PalpableJS from './palpable-js';

describe('PalpableJS#integration', () => {
  let palpableJS;

  beforeEach(() => {
    palpableJS = new PalpableJS();
  });

  describe('example test', () => {
    it('should work', () => {
      expect.assertions(1);

      expect(palpableJS).toBeDefined();
    });
  });
});
