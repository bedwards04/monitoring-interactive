const express = require('express');
const path = require('path');
const app = express();
const Rollbar = require('rollbar')
const rollbar = new Rollbar({
  accessToken: '1177a835523c4107a65e186be3797670',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

app.use(express.json());

app.get('/', function(req, res) {
    rollbar.log('Hello world')
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

const port = process.env.PORT || 4545;
app.listen(port, function() {console.log(`Server running on ${port}`)});