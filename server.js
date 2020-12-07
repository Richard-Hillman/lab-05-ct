require('dotenv').config();
// require('./lib/pool').connect();

const app = require('./lib/app');

const PORT = 3001;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Started on ${PORT}`);
});
