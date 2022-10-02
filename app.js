const express = require("express");
require('dotenv').config()
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(cors({
    origin: '*'
}));

app.use('/images', express.static('images'));

const mainRouter = require('./routes/mainRouter');
const scanRouter = require('./routes/scanRouter');

app.use('/api', mainRouter);
app.use('/api/scan', scanRouter);

app.listen(port, () => {
  console.log(`Web server is running on port ${port}`);
})