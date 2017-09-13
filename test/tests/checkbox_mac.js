import { expect } from 'chai';
import React from 'react';
import { renderToString } from 'react-dom/server';
import CheckboxOSX from '../../src/checkbox/macOs/checkbox';

describe('Checkbox', () => {
  it('create osx checkbox', () => {
    const string = renderToString(<CheckboxOSX label="my label"/>);
    expect(string).to.match(/my label/);
  });
});
