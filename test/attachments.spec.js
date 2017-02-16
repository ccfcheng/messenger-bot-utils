import * as Utils from '../src/attachments';
import { expect } from 'chai';

describe('Attachments Generators:', () => {
  describe('makeText():', () => {
    it('Should generate a valid JSON object representing a text message', () => {
      const message = 'Some generic message';
      const textMessage = Utils.makeText(message);
      const expected = { text: message };
      expect(textMessage).to.deep.equal(expected);
    });
    it('Should truncate text to 640 characters if message is too long', () => {
      const message = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
      const textMessage = Utils.makeText(message);
      const truncated = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA...';
      const expected = { text: truncated };
      expect(textMessage).to.deep.equal(expected);
    });
  });

  describe('makeAudio():', () => {
    it('Should generate a valid JSON object for an audio attachment', () => {
      const audioURL = 'http://www.test.com/audio.mp3';
      const audioMessage = Utils.makeAudio(audioURL);
      const expected = {
        "attachment" : {
          "type" : "audio",
          "payload" : {
            "url": audioURL,
          }
        }
      };
      expect(audioMessage).to.deep.equal(expected);
    });
  });

  describe('makeFile():', () => {
    it('Should generate a valid JSON object for a file attachment', () => {
      const fileURL = 'http://www.test.com/file.pdf';
      const fileMessage = Utils.makeFile(fileURL);
      const expected = {
        "attachment" : {
          "type" : "file",
          "payload" : {
            "url": fileURL,
          }
        }
      };
      expect(fileMessage).to.deep.equal(expected);
    });
  });

  describe('makeImage():', () => {
    it('Should generate a valid JSON object for an image attachment', () => {
      const imageURL = 'http://www.test.com/image.png';
      const imageMessage = Utils.makeImage(imageURL);
      const expected = {
        "attachment" : {
          "type" : "image",
          "payload" : {
            "url": imageURL,
          }
        }
      };
      expect(imageMessage).to.deep.equal(expected);
    });
  });

  describe('makeVideo():', () => {
    it('Should generate a valid JSON object for a video attachment', () => {
      const videoURL = 'http://www.test.com/video.mp4';
      const videoMessage = Utils.makeVideo(videoURL);
      const expected = {
        "attachment" : {
          "type" : "video",
          "payload" : {
            "url": videoURL,
          }
        }
      };
      expect(videoMessage).to.deep.equal(expected);
    });
  });
});
