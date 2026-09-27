const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const targetPath = path.join(publicDir, 'hero-bg.mp4');

const candidateUrls = [
  'https://raw.githubusercontent.com/bower-media-samples/big-buck-bunny/master/big_buck_bunny.mp4',
  'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
  'https://raw.githubusercontent.com/mediaelement/mediaelement-files/master/echo-hereweare.mp4'
];

function download(urls, index) {
  if (index >= urls.length) {
    console.log('Finished testing candidates.');
    return;
  }
  const url = urls[index];
  console.log('Testing URL:', url);
  
  const client = url.startsWith('https') ? https : http;
  client.get(url, (res) => {
    if (res.statusCode === 301 || res.statusCode === 302) {
      download([res.headers.location], 0);
      return;
    }
    if (res.statusCode === 200) {
      const file = fs.createWriteStream(targetPath);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log('SUCCESS saved to hero-bg.mp4:', fs.statSync(targetPath).size, 'bytes');
      });
    } else {
      console.log('Failed status:', res.statusCode);
      download(urls, index + 1);
    }
  }).on('error', (err) => {
    console.log('Error:', err.message);
    download(urls, index + 1);
  });
}

download(candidateUrls, 0);
