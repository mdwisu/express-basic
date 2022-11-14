const express = require('express');
require('dotenv').config()


const app = express()

const allRoutes = require('./routes');

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(allRoutes)

app.listen(PORT, () => {
  console.log("server running on port " + PORT);
})