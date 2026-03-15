//////////////////////////
// Imports
//////////////////////////

const path = require('path');
const express = require('express');

const dotenv = require('dotenv');
dotenv.config();
console.log(process.env.API_KEY);

//////////////////////////
// Constants
//////////////////////////

const port = 8080;
const app = express();
let pathToFrontend = path.join(__dirname, '../frontend');
if (process.env.NODE_ENV === 'production') {
  pathToFrontend = path.join(__dirname, '../frontend/dist');
}

//////////////////////////
// Middleware/Controllers
//////////////////////////

const logRoutes = (req, res, next) => {
  const time = (new Date()).toLocaleString();
  console.log(`${req.method}: ${req.originalUrl} - ${time}`);
  next();
};

const serveStatic = express.static(pathToFrontend);
app.use(logRoutes); 
app.use(serveStatic);

const serveGifs = async (req, res, next) => {
  try {
    const url = `https://api.giphy.com/v1/gifs/trending?limit=3&rating=g&api_key=${process.env.GIPHY_API_KEY}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw Error(`Fetch failed. ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    res.send(data);
  } catch (error) {
    res.status(503).send(error);
  }
};

const serve404 = (req, res, next) => {
  res.status(404).send({ error: `Not found: ${req.originalUrl}` });
};

app.get('/api/gifs', serveGifs);
app.use(serve404)

//////////////////////////
// Listener
//////////////////////////

app.listen(port, () => console.log(`listening at http://localhost:${port}`)); 