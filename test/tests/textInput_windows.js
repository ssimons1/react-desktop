import { expect } from 'chai';
import React from 'react';
import { renderToString } from 'react-dom/server';
import TextInput from '../../src/textInput/windows/textInput';

describe('TextInput', () => {
  describe('Windows', () => {
    it('create text input component with a placeholder', () => {
      const string = renderToString(<TextInput placeholder="Placeholder Text" />);
      expect(string).to.match(/placeholder="Placeholder Text"/);
    });

    it('create text input component with default text value', () => {
      const string = renderToString(<TextInput defaultValue="Default Text" />);
      expect(string).to.match(/value="Default Text"/);
    });

    it('should create a password input field', () => {
      const string = renderToString(<TextInput password />);
      expect(string).to.match(/type="password"/);
    });
  });
});
