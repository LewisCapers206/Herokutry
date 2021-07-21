const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

app.get('/', (req, res) => {
  res.send(
    `<h1>Hello and welcome to my blank page!`
  );
});

app.get('/api', (req, res) => {
  res.json({
    term: 'api',
    description:
      'An application programming interface, is a computing interface that defines interactions between multiple software intermediaries',
  });
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
