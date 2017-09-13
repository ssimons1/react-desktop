import { expect } from 'chai';
import { MACOS, WINDOWS } from '../../src/os';

describe('index', () => {
    it('detect os', () => {
      expect(components.os()).to.be.oneOf([MACOS, WINDOWS]);
    });
  });