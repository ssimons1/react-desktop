import { expect } from 'chai';
import React from 'react';
import { renderToString } from 'react-dom/server';
import TextWindows from '../../src/text/windows/text';

describe('Text', () => {
  it('create windows text', () => {
    const string = renderToString(<TextWindows>My Text</TextWindows>);
    expect(string).to.match(/My Text/);
  });
});
