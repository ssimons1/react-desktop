import { expect } from 'chai';
import React from 'react';
import { renderToString } from 'react-dom/server';
import CheckboxWindows from '../../src/checkbox/windows/checkbox';

describe('Checkbox', () => {
    it('create windows checkbox', () => {
      const string = renderToString(<CheckboxWindows label="my label"/>);
      expect(string).to.match(/my label/);
    });
  });