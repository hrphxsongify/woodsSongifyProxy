const express = require('express');

const path = require('path');

const bodyParser = require('body-parser');

const cors = require('cors');


const app = express();
// app.use(express.static(__dirname + '/../client'));

const port = 3000;

app.use(cors());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
app.use(express.static('../client/dist'));

app.get('/art', async (req, res) => {
  res.sendFile(await path.join(__dirname, '../client/dist/bundle.js'));
});

app.get('/', (req, res) => {
  res.redirect(`/album/${String(Math.floor(Math.random() * 100))}`);
})

app.get('/script', async (req, res) => {
  res.sendFile(await path.join(__dirname, '../client/dist/bundle.js'));
});

app.get('/static', async (req, res) => {
  res.sendFile(await path.join(__dirname, '../client/dist/static.js'));
});

app.get('/style', async (req, res) => {
  res.sendFile(await path.join(__dirname, '../client/dist/style.css'));
})

// app.get('/api/album/:albumArtId', async (req, res) => {
//   res.send(await Album.findOne({}).exec());
// });

app.get('/album/:albumArtId', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'))
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});