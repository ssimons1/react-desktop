import { expect } from 'chai';
import React from 'react';
import { renderToString } from 'react-dom/server';
import ProgressCirecleWindows from '../../src/progressCircle/windows/progressCircle';

describe('Progress Circle', () => {
  it('create windows progress circle', () => {
    const string = renderToString(<ProgressCirecleWindows size={50}/>);
    expect(string).to.match(/width: ?50px/);
  });
});