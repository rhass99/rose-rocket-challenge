const express = require('express');

const bodyParser = require('body-parser');
const logger = require('morgan');

const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));


app.get('/api/legs', (req, res) => {
  const legs = [
    {
      startStop: 'A',
      endStop: 'B',
      speedLimit: 100,
      legID: 'AB',
    },
    {
      startStop: 'B',
      endStop: 'C',
      speedLimit: 60,
      legID: 'BC',
    },
    {
      startStop: 'C',
      endStop: 'D',
      speedLimit: 80,
      legID: 'CD',
    },
    {
      startStop: 'D',
      endStop: 'E',
      speedLimit: 120,
      legID: 'DE',
    },
    {
      startStop: 'E',
      endStop: 'F',
      speedLimit: 40,
      legID: 'EF',
    },
    {
      startStop: 'F',
      endStop: 'G',
      speedLimit: 40,
      legID: 'FG',
    },
    {
      startStop: 'G',
      endStop: 'H',
      speedLimit: 100,
      legID: 'GH',
    },
    {
      startStop: 'H',
      endStop: 'I',
      speedLimit: 100,
      legID: 'HI',
    },
    {
      startStop: 'I',
      endStop: 'J',
      speedLimit: 50,
      legID: 'IJ',
    },
    {
      startStop: 'J',
      endStop: 'K',
      speedLimit: 100,
      legID: 'JK',
    },
    {
      startStop: 'K',
      endStop: 'L',
      speedLimit: 60,
      legID: 'KL',
    },
  ];

  res.json(legs);
});

app.get('/api/stops', (req, res) => {
  const stops = [
    {
      name: 'A',
      x: 20,
      y: 10,
    },
    {
      name: 'B',
      x: 20,
      y: 20,
    },
    {
      name: 'C',
      x: 25,
      y: 30,
    },
    {
      name: 'D',
      x: 25,
      y: 80,
    },
    {
      name: 'E',
      x: 30,
      y: 100,
    },
    {
      name: 'F',
      x: 35,
      y: 80,
    },
    {
      name: 'G',
      x: 35,
      y: 30,
    },
    {
      name: 'H',
      x: 40,
      y: 20,
    },
    {
      name: 'I',
      x: 40,
      y: 10,
    },
    {
      name: 'J',
      x: 35,
      y: 15,
    },
    {
      name: 'K',
      x: 25,
      y: 15,
    },
    {
      name: 'L',
      x: 20,
      y: 10,
    },
  ];

  res.json(stops);
});

app.get('/api/driver', (req, res) => {
  const driver = {
    x: 20,
    y: 10,
  };

  res.json(driver);
});

app.put('/api/driver', (req, res) => {
  // const driver = {
  //   activeLegID: 'FG',
  //   legProgress: '33',
  // };
  // res.json(driver);
});

app.get('/api/bonusdriver', (req, res) => {
  const bonusdriver = {
    x: 50,
    y: 55,
  };

  res.json(bonusdriver);
});

app.put('/api/bonusdriver', (req, res) => {
  // const bonusdriver = {
  //   x: 50,
  //   y: 55,
  // };
  // res.json(bonusdriver);
});

const server = app.listen(PORT, () =>
  console.log(`Example app listening on port ${PORT}`)
);
