import * as Templates from '../src/templates';
import * as Buttons from '../src/buttons';
import { expect } from 'chai';

describe('Templates Generators:', () => {
  describe('button():', () => {
    it('Should generate a valid JSON object for a button template', () => {
      const btn1 = Buttons.share();
      const btn2 = Buttons.login('http://www.test.com');
      const btn3 = Buttons.logout();
      const buttons = [btn1, btn2, btn3];
      const text = 'Text of button template';
      const expected = {
        attachment: {
          type: 'template',
          payload: {
            'template_type': 'button',
            text,
            buttons,
          },
        },
      };
      expect(Templates.button(text, buttons)).to.deep.equal(expected);
    });
  });

  describe('generic():', () => {
    it('Should generate a valid JSON object for a generic template', () => {
      const btn1 = Buttons.share();
      const btn2 = Buttons.login('http://www.test.com');
      const btn3 = Buttons.logout();
      const buttons = [btn1, btn2, btn3];
      const action = Buttons.webURL('', 'http://www.test.com');
      const config = {
        title: 'TITLE',
        subtitle: 'SUBTITLE',
        image_url: 'http://www.example.com/image.png',
        default_action: action,
        buttons,
      };
      const elements = [
        Templates.makeGenericElement(config),
        Templates.makeGenericElement(config),
        Templates.makeGenericElement(config),
        Templates.makeGenericElement(config),
        Templates.makeGenericElement(config),
      ];
      const expected = {
        attachment: {
          type: 'template',
          payload: {
            'template_type': 'generic',
            elements,
          },
        },
      };
      expect(Templates.generic(elements)).to.deep.equal(expected);
    });
  });

  describe('list():', () => {
    it('Should generate a valid JSON object for a list template', () => {
      const btn1 = Buttons.share();
      const buttons = [btn1];
      const action = Buttons.webURL('', 'http://www.test.com');
      const config = {
        title: 'TITLE',
        subtitle: 'SUBTITLE',
        image_url: 'http://www.example.com/image.png',
        default_action: action,
        buttons,
      };
      const elements = [
        Templates.makeListElement(config),
        Templates.makeListElement(config),
        Templates.makeListElement(config),
      ];
      const expected = {
        attachment: {
          type: 'template',
          payload: {
            'template_type': 'list',
            elements,
            buttons,
          },
        },
      };
      expect(Templates.list(elements, buttons)).to.deep.equal(expected);
    });
  });

  describe('compactList():', () => {
    it('Should generate a valid JSON object for a compact list template', () => {
      const btn1 = Buttons.share();
      const buttons = [btn1];
      const action = Buttons.webURL('', 'http://www.test.com');
      const config = {
        title: 'TITLE',
        subtitle: 'SUBTITLE',
        image_url: 'http://www.example.com/image.png',
        default_action: action,
        buttons,
      };
      const elements = [
        Templates.makeListElement(config),
        Templates.makeListElement(config),
        Templates.makeListElement(config),
      ];
      const expected = {
        attachment: {
          type: 'template',
          payload: {
            'template_type': 'list',
            'top_element_style': 'compact',
            elements,
            buttons,
          },
        },
      };
      expect(Templates.compactList(elements, buttons)).to.deep.equal(expected);
    });
  });

  describe('makeGenericElement():', () => {
    it('Should generate a valid JSON object for an element in a generic template', () => {
      const btn1 = Buttons.share();
      const btn2 = Buttons.login('http://www.test.com');
      const btn3 = Buttons.logout();
      const buttons = [btn1, btn2, btn3, btn1, btn2, btn3];
      const action = Buttons.webURL('', 'http://www.test.com');
      const config = {
        title: 'TITLE',
        subtitle: 'SUBTITLE',
        image_url: 'http://www.example.com/image.png',
        default_action: action,
        buttons,
      };
      const expected = {
        title: 'TITLE',
        subtitle: 'SUBTITLE',
        image_url: 'http://www.example.com/image.png',
        default_action: action,
        buttons: [btn1, btn2, btn3],
      };
      expect(Templates.makeGenericElement(config)).to.deep.equal(expected);
    });
  });

  describe('makeListElement():', () => {
    it('Should generate a valid JSON object for an element in a generic template', () => {
      const btn1 = Buttons.share();
      const btn2 = Buttons.login('http://www.test.com');
      const btn3 = Buttons.logout();
      const buttons = [btn1, btn2, btn3];
      const action = Buttons.webURL('', 'http://www.test.com');
      const config = {
        title: 'TITLE',
        subtitle: 'SUBTITLE',
        image_url: 'http://www.example.com/image.png',
        default_action: action,
        buttons,
      };
      const expected = {
        title: 'TITLE',
        subtitle: 'SUBTITLE',
        image_url: 'http://www.example.com/image.png',
        default_action: action,
        buttons: [btn1],
      };
      expect(Templates.makeListElement(config)).to.deep.equal(expected);
    });
  });
});
