import { truncate } from './utils';
// makeTemplate generates a basic structure for a template object
const makeTemplate = (template_type) => ({
  attachment: {
    type: 'template',
    payload: {
      template_type,
    },
  },
});
// button takes a text string, and an array of buttons
const button = (text, buttons) => {
  const message = makeTemplate('button');
  message.attachment.payload.text = truncate(text, 640);
  if (Array.isArray(buttons) && buttons.length <= 3) {
    message.attachment.payload.buttons = buttons;
  }
  return message;
};
// generic
const generic = (elements) => {
  const message = makeTemplate('generic');
  if (Array.isArray(elements) && elements.length <= 10 && elements.length > 0) {
    message.attachment.payload.elements = elements;
  }
  return message;
};
// list generates an object for a list template with large header
// takes an array of elements and an array of a single button
// 3rd param to configure between large and compact list style
const list = (elements, buttons, style = 'large') => {
  const message = makeTemplate('list');
  if (style === 'compact') {
    message.attachment.payload.top_element_style = 'compact';
  }
  if (Array.isArray(elements) && elements.length <= 4 && elements.length >= 2) {
    message.attachment.payload.elements = elements;
  }
  if (Array.isArray(buttons) && buttons.length <= 1) {
    message.attachment.payload.buttons = buttons;
  }
  return message;
};
// compactList generates an object for a list template with identical elements
// takes an array of elements and an array of a single button
const compactList = (els, btns) => list(els, btns, 'compact');
// makeElement generates an element for generic templates or list Templates
const makeElement = (config, type) => {
  const {
    title,
    subtitle,
    image_url,
    default_action,
    buttons,
  } = config;
  const element = {};
  if (title) {
    element.title = truncate(title, 80);
  } else {
    throw('Config object must contain a title');
  }
  if (subtitle) element.subtitle = truncate(subtitle, 80);
  if (image_url) element.image_url = image_url;
  if (default_action) element.default_action = default_action;
  if (type === 'generic') {
    if (buttons) element.buttons = buttons.slice(0, 3);
  } else if (type === 'list') {
    if (buttons) element.buttons = buttons.slice(0, 1);
  }
  return element;
};
// makeGenericElement generates an element for a generic template
const makeGenericElement = (config) => makeElement(config, 'generic');
// makeListElement generates an element for a list template
const makeListElement = (config) => makeElement(config, 'list');

export {
  button,
  generic,
  list,
  compactList,
  makeGenericElement,
  makeListElement,
};
