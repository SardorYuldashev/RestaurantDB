const express = require('express');
const config = require('./shared/config');
const usersRoute = require('./modules/users/_api');
const categoriesRoute = require('./modules/categories/_api');
const handleError = require('./shared/errors/handle');

const app = express();

app.use(express.json());

app.use(usersRoute);
app.use(categoriesRoute);

app.use(handleError);

const PORT = config.PORT || 3000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});