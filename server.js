require('dotenv').config();
require('./lib/pool').connect();

const { app } = require('./index');
const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Started on ${PORT}`);
});

// eslint-disable-next-line no-console