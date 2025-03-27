import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MODEL_URL = 'https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/macbook/model.gltf';
const TEXTURE_URL = 'https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/macbook/texture.jpg';
const MODEL_DIR = path.join(__dirname, '../../public/models');

// Create model directory if it doesn't exist
if (!fs.existsSync(MODEL_DIR)) {
  fs.mkdirSync(MODEL_DIR, { recursive: true });
}

const downloadFile = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);

    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        fs.unlink(dest, () => {
          reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        });
        return;
      }

      response.pipe(file);

      file.on('finish', () => {
        file.close(() => resolve());
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {
        reject(err);
      });
    });
  });
};

const setup = async () => {
  try {
    console.log('Downloading 3D model...');
    await downloadFile(MODEL_URL, path.join(MODEL_DIR, 'laptop.gltf'));
    console.log('Downloading texture...');
    await downloadFile(TEXTURE_URL, path.join(MODEL_DIR, 'texture.jpg'));
    console.log('Setup complete!');
  } catch (error) {
    console.error('Error during setup:', error);
    process.exit(1);
  }
};

setup(); 