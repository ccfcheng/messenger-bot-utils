# messenger-bot-utils
Generic utilities to streamline the creation of Facebook Messenger bots.

## Installation
Install from npm:
```
npm install messenger-bot-utils
```
The utilities in this package are broken up into several modules:
```js
import {
  Attachments,
  Buttons,
  Templates,
} from 'messenger-bot-utils';
```

## Usage
### Attachment Generators
These are generator functions for creating the JSON structure for text, audio, file, image, and video attachments.
```js
import { Attachments } from 'messenger-bot-utils';
// Returns a JSON object formatted for a text message
Attachments.makeText('some message here');
// Returns a JSON object formatted for an audio attachment
Attachments.makeAudio('AUDIO_URL');
// Returns a JSON object formatted for a file attachment
Attachments.makeFile('FILE_URL');
// Returns a JSON object formatted for an image attachment
Attachments.makeImage('IMAGE_URL');
// Returns a JSON object formatted for a video attachment
Attachments.makeVideo('VIDEO_URL');
```
### Buttons Generators
These are generator functions for creating the JSON structure for buttons.
```js
import { Buttons } from 'messenger-bot-utils';
// Returns a JSON object formatted for a web url button
Buttons.webURL('BUTTON_TITLE', 'WEB_URL');
// Returns a JSON object formatted for a postback button
Buttons.postback('BUTTON_TITLE', 'POSTBACK_PAYLOAD');
// Returns a JSON object formatted for a phone number button, number needs to be formatted as '+15105555555'
Buttons.phone('BUTTON_TITLE', 'FORMATTED_PHONE_NUMBER');
// Returns a JSON object formatted for a share button
Buttons.share();
// Returns a JSON object formatted for a login button
Buttons.login('LOGIN_URL');
// Returns a JSON object formatted for a logout button
Buttons.logout();
```
### Templates Generators
These are generator functions for creating the JSON structure for templates.
```js
import { Templates } from 'messenger-bot-utils';
// Returns a JSON object formatted for a button template, takes a string and an array of button objects
Templates.button('PROMPT_TEXT', [BUTTONS_ARRAY]);
// Returns a JSON object formatted for a generic template, takes an array of element objects, up to 10
Templates.generic([ELEMENTS_ARRAY]);
// Returns a JSON object formatted for a large list template, takes an array of between 2 and 4 element objects, and an optional array of a single button object
Templates.list([ELEMENTS_ARRAY], [BUTTON_OBJECT]);
// Returns a JSON object formatted for a compact list template, takes an array of between 2 and 4 element objects, and an optional array of a single button object
Templates.compactList([ELEMENTS_ARRAY], [BUTTON_OBJECT]);
// Returns a JSON object formatted for a generic element, takes a config object with a `title` key, and optional keys for `subtitle`, `image_url`, `default_action` object, and `buttons` array of buttons.
Templates.makeGenericElement({CONFIG_OBJ});
// Returns a JSON object formatted for a list element, takes a config object with a `title` key, and optional keys for `subtitle`, `image_url`, `default_action` object, and `buttons` array of buttons.
Templates.makeListElement({CONFIG_OBJ});
```
