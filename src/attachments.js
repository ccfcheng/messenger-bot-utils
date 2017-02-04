const makeText = (text) => {
  if (text.length > 640) {
    const truncated = `${text.slice(0, 637)}...`;
    return { text: truncated };
  }
  return { text };
};

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
