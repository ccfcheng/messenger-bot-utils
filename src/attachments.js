import { truncate } from './utils';

const makeText = (text) => ({
  text: truncate(text, 640),
});

const makePayload = (type, url) => ({
  attachment: {
    type,
    payload: {
      url,
    },
  },
});

const makeAudio = (url) => makePayload('audio', url);

const makeFile = (url) => makePayload('file', url);

const makeImage = (url) => makePayload('image', url);

const makeVideo = (url) => makePayload('video', url);

export {
  makeText,
  makeAudio,
  makeFile,
  makeImage,
  makeVideo,
};
