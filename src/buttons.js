import { truncate } from './utils';

const webURL = (title, url) => ({
  type: 'web_url',
  url,
  title: truncate(title, 20),
  'webview_height_ratio': 'full',
});

const postback = (title, payload) => ({
  type: 'postback',
  payload,
  title: truncate(title, 20),
});

const phone = (title, number) => ({
  type: 'phone_number',
  payload: number,
  title: truncate(title, 20),
});

const share = () => ({
  type: 'element_share',
});

const login = (url) => ({
  type: 'account_link',
  url,
});

const logout = () => ({
  type: 'account_unlink',
});

export {
  webURL,
  postback,
  phone,
  share,
  login,
  logout,
};
