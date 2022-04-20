require('dotenv').config();
const express = require('express');
const landingsApi = require('./controllers/landingsApi');
const neasApi = require('./controllers/neasApi');
const app = express();
const cors = require('cors');
const port = 5000;

require('./utils/dbmongo');

app.use(cors());

app.get('/', (req, res) => {
  res.status(200).send('Bienvenido a Nasapp')
})

app.get('/api/astronomy/landings', landingsApi.getLandingByQuery)
app.get('/api/astronomy/landings/mass/:mass?', landingsApi.getLandingByMass)
app.get('/api/astronomy/landings/class/:recclass?', landingsApi.getLandingByClass)
app.get('/api/astronomy/neas', neasApi)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });