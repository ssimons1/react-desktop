import { JSDOM } from 'jsdom';
const { shallow } =require('enzyme');

const dom = new JSDOM('<!doctype html><html><body></body></html>');
global.window = dom.window;
global.document = dom.window.document;
global.shallow = shallow;
global.navigator = {
  ...global.window.navigator,
  userAgent: 'node.js'
};