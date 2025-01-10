import qr from 'qr-image';
import inquirer from 'inquirer';
import fs from 'fs';

inquirer
      .prompt([ { type: 'input', name: 'url', message: 'Enter a URL' } 
      ]) 
      .then(answers => {
            const qrImage = qr.imageSync(answers.url, { type: 'png' });
            fs.writeFileSync('qr.png', qrImage);
            fs.writeFileSync('url.txt', answers.url);
            console.log('QR code generated and saved to qr.png');
      });