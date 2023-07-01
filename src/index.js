const express = require('express');
const config = require('./shared/config');
const userRoute = require('./modules/users/_api');
const handleError = require('./shared/errors/handle');

const app = express();

app.use(express.json());

app.use(userRoute);

app.use(handleError);

const PORT = config.PORT || 3000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});