import { expect } from 'chai';
import React from 'react';
import { renderToString } from 'react-dom/server';
import TextFieldOSX from '../../src/textInput/macOs/textInput';

describe('TextInput', () => {
  describe('macOS', () => {
    it('create text input component with a placeholder', () => {
      const string = renderToString(<TextFieldOSX placeholder="Placeholder Text" />);
      expect(string).to.match(/placeholder="Placeholder Text"/);
    });

    it('create text input component with a centered placeholder', () => {
      const string = renderToString(<TextFieldOSX centerPlaceholder placeholder="Placeholder Text" />);
      expect(string).to.match(/Placeholder Text<\/span>/);
      expect(string).not.to.match(/placeholder="Placeholder Text"/);
    });

    it('create text input component with default text value', () => {
      const string = renderToString(<TextFieldOSX defaultValue="Default Text" />);
      expect(string).to.match(/value="Default Text"/);
    });

    it('should create a password input field', () => {
      const string = renderToString(<TextFieldOSX password />);
      expect(string).to.match(/type="password"/);
    });
  });
});
