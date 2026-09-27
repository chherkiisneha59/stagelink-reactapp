const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const targetPath = path.join(publicDir, 'hero-bg.mp4');

// High-speed CDN event video URL
const videoUrl = 'https://raw.githubusercontent.com/mediaelement/mediaelement-files/master/echo-hereweare.mp4';

function downloadFile(url, destPath) {
  const client = url.startsWith('https') ? https : http;
  
  client.get(url, (res) => {
    if (res.statusCode === 301 || res.statusCode === 302) {
      downloadFile(res.headers.location, destPath);
      return;
    }
    
    if (res.statusCode === 200) {
      const fileStream = fs.createWriteStream(destPath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        console.log('Video saved to', destPath, 'Size:', fs.statSync(destPath).size);
      });
    } else {
      console.error('Failed to download video, status code:', res.statusCode);
    }
  }).on('error', (err) => {
    console.error('Error downloading video:', err.message);
  });
}

downloadFile(videoUrl, targetPath);
