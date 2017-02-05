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
} from 'messenger-bot-utils';
```

## Usage
### Attachment Generators
These are generator functions for creating the JSON structure for text, audio, file, image, and video attachments.
```js
import { Attachments } from 'messenger-bot-utils';
// Returns a JSON object formatted for Messenger text message
Attachments.makeText('some message here');
// Returns a JSON object formatted for Messenger audio attachment
Attachments.makeAudio('AUDIO_URL');
// Returns a JSON object formatted for Messenger file attachment
Attachments.makeFile('FILE_URL');
// Returns a JSON object formatted for Messenger image attachment
Attachments.makeImage('IMAGE_URL');
// Returns a JSON object formatted for Messenger video attachment
Attachments.makeVideo('VIDEO_URL');
```
