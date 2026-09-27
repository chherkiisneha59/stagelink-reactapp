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
  'https://raw.githubusercontent.com/intel-iot-devkit/sample-videos/master/head-pose-face-detection-female.mp4',
  'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b5/Crowd_jumping_at_a_concert.webm/Crowd_jumping_at_a_concert.webm.480p.vp9.webm',
  'https://upload.wikimedia.org/wikipedia/commons/transcoded/1/1a/Live_music_performance.ogv/Live_music_performance.ogv.480p.vp9.webm'
];

function tryDownload(urls, index) {
  if (index >= urls.length) {
    console.error('All download attempts completed.');
    return;
  }

  const url = urls[index];
  console.log(`Downloading event video from [${index}]: ${url}`);

  const options = {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Accept': '*/*'
    }
  };

  const client = url.startsWith('https') ? https : http;

  const req = client.get(url, options, (res) => {
    if (res.statusCode === 301 || res.statusCode === 302) {
      console.log('Following redirect to:', res.headers.location);
      tryDownload([res.headers.location], 0);
      return;
    }

    if (res.statusCode === 200) {
      const fileStream = fs.createWriteStream(targetPath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        const bytes = fs.statSync(targetPath).size;
        console.log(`SUCCESSFULLY SAVED EVENT VIDEO! Path: ${targetPath}, Size: ${bytes} bytes`);
      });
    } else {
      console.log(`HTTP ${res.statusCode} for source ${index}. Trying next source...`);
      tryDownload(urls, index + 1);
    }
  });

  req.on('error', (err) => {
    console.log(`Network error for source ${index}: ${err.message}. Trying next source...`);
    tryDownload(urls, index + 1);
  });
}

tryDownload(candidateUrls, 0);
