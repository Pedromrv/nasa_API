require('dotenv').config();
const express = require('express');
const landingsApi = require('./controllers/landingsApi');
const neasApi = require('./controllers/neasApi');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

require('./utils/dbmongo');

app.use(cors());

app.get('/', (req, res) => {
  res.status(200).send('Bienvenido a Nasa_PI')
})

app.get('/api/astronomy/landings', landingsApi.getLandingByQuery)
app.get('/api/astronomy/landings/mass/:mass?', landingsApi.getLandingByMass)
app.get('/api/astronomy/landings/class/:recclass?', landingsApi.getLandingByClass)
app.get('/api/astronomy/neas', neasApi)

app.post('/api/astronomy/landings/create', landingsApi.createLanding);
// app.patch('/api/astronomy/landings/edit/', landingsApi.updateLanding);
// app.delete('/api/astronomy/landings/delete/',landingsApi. deleteLanding);

app.listen(port, () => {
    console.log(`Example app listening at http://${port}`)
  });