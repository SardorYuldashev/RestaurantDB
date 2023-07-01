const express = require('express');
const config = require('./config/shared');

const app = express();

app.use(express.json());

const PORT = config.PORT || 3000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});