const testFolder = './public/assets';
const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.static('assets'));

app.get('/list', (req, res) => {
  files = []
  fs.readdirSync(testFolder).forEach(file => {
    files.push(file);
  });
  return res.json({ 
    files: files
  });
});

app.listen(3000, () => {
  console.log('app listening on port 3000')
});
