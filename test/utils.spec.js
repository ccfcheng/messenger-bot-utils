import * as Utils from '../src/utils';
import { expect } from 'chai';

describe('Utils:', () => {
  describe('truncate():', () => {
    it('Should return an empty string when input is undefined', () => {
      expect(Utils.truncate()).to.equal('');
    });
    it('Should return an empty string when length is undefined or 0', () => {
      expect(Utils.truncate('hello world')).to.equal('');
      expect(Utils.truncate('hello world', 0)).to.equal('');
    });
    it('Should return correctly truncated string given a string and a length', () => {
      const str = 'helloworld';
      expect(Utils.truncate(str, 5)).to.equal('he...');
      expect(Utils.truncate(str, 6)).to.equal('hel...');
      expect(Utils.truncate(str, 9)).to.equal('hellow...');
    });
  });
});
