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
These are generator functions for create the JSON structure for buttons.
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
