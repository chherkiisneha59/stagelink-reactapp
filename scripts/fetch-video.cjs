const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const targetPath = path.join(publicDir, 'hero-bg.mp4');

// Real Event & Concert Audience Video MP4
const candidateUrls = [
  'https://assets.mixkit.co/videos/preview/mixkit-people-dancing-at-a-party-41593-large.mp4',
  'https://assets.mixkit.co/videos/preview/mixkit-crowd-raising-their-hands-at-a-concert-41589-large.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
];

function downloadFile(urls, index = 0) {
  if (index >= urls.length) {
    console.error('All download attempts failed.');
    return;
  }

  const url = urls[index];
  console.log(`Attempting download from: ${url}`);
  const client = url.startsWith('https') ? https : http;

  const req = client.get(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Accept': '*/*'
    }
  }, (res) => {
    if (res.statusCode === 301 || res.statusCode === 302) {
      downloadFile([res.headers.location], 0);
      return;
    }

    if (res.statusCode === 200) {
      const fileStream = fs.createWriteStream(targetPath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        console.log('SUCCESS: Video saved to', targetPath, 'Size:', fs.statSync(targetPath).size, 'bytes');
      });
    } else {
      console.warn(`Status ${res.statusCode} for URL index ${index}. Trying next source...`);
      downloadFile(urls, index + 1);
    }
  });

  req.on('error', (err) => {
    console.warn(`Error on URL index ${index}: ${err.message}. Trying next source...`);
    downloadFile(urls, index + 1);
  });
}

downloadFile(candidateUrls, 0);
