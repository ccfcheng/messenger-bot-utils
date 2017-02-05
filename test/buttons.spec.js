import * as Utils from '../src/buttons';
import { expect } from 'chai';

describe('Buttons Generators:', () => {
  describe('webURL():', () => {
    it('Should generate a valid JSON object for a URL button', () => {
      const title = 'Button title';
      const url = 'http://www.test.com';
      const button = Utils.webURL(title, url);
      const expected = {
        type: 'web_url',
        url,
        title,
        'webview_height_ratio': 'full',
      };
      expect(button).to.deep.equal(expected);
    });
    it('Should truncate title if it is over 20 characters', () => {
      const title = 'This title is too long';
      const url = 'http://www.test.com';
      const expected = {
        type: 'web_url',
        url,
        title: 'This title is too...',
        'webview_height_ratio': 'full',
      };
      expect(Utils.webURL(title, url)).to.deep.equal(expected);
    });
  });

  describe('postback():', () => {
    it('Should generate a valid JSON object for a postback button', () => {
      const title = 'Postback button';
      const payload = 'POSTBACK_PAYLOAD';
      const expected = {
        type: 'postback',
        title,
        payload,
      };
      expect(Utils.postback(title, payload)).to.deep.equal(expected);
    });
  });

  describe('phone():', () => {
    it('Should generate a valid JSON object for a phone number button', () => {
      const title = 'Call button';
      const payload = '+15555555555';
      const expected = {
        type: 'phone_number',
        payload,
        title,
      };
      expect(Utils.phone(title, payload)).to.deep.equal(expected);
    });
  });

  describe('share():', () => {
    it('Should generate a valid JSON object for a share button', () => {
      const expected = { type: 'element_share' };
      expect(Utils.share()).to.deep.equal(expected);
    });
  });

  describe('login():', () => {
    it('Should generate a valid JSON object for a login button', () => {
      const url = 'https://www.test.com';
      const expected = {
        type: 'account_link',
        url,
      };
      expect(Utils.login(url)).to.deep.equal(expected);
    });
  });

  describe('logout():', () => {
    it('Should generate a valid JSON object for a logout button', () => {
      const expected = { type: 'account_unlink' };
      expect(Utils.logout()).to.deep.equal(expected);
    });
  });
});
