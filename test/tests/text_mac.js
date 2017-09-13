import { expect } from 'chai';
import React from 'react';
import { renderToString } from 'react-dom/server';
import TextOSX from '../../src/text/macOs/text';

describe('Text', () => {
  it('create osx text', () => {
    const string = renderToString(<TextOSX>My Text</TextOSX>);
    expect(string).to.match(/My Text/);
  });
});
