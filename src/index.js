const express = require('express');
const config = require('./shared/config');
const userRoute = require('./modules/users/api')

const app = express();

app.use(express.json());

app.use(userRoute);

const PORT = config.PORT || 3000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});