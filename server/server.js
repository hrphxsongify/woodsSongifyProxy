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

app.get('/script', async (req, res) => {
  res.sendFile(await path.join(__dirname, '../client/dist/bundle.js'));
})

app.get('/static', async (req, res) => {
  res.sendFile(await path.join(__dirname, '../client/dist/static.js'));
});

app.get('/style', async (req, res) => {
  res.sendFile(await path.join(__dirname, '../client/dist/style.css'));
})

app.get('/api/album/:albumArtId', async (req, res) => {
  console.log('here')
  console.log(req.params.albumArtId)
  res.send(parseInt(req.params.albumArtId, 10));
});

app.get('/album/:albumArtId', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'))
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});