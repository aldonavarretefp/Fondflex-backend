// Description: Main entry point for the application.

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Dotenv configurations
dotenv.config();
// App Configurations
const app = express();
// Cors configurations
app.use(cors());
// Body parser configurations
app.use(express.json());

// TODO: Database connection.

app.listen(process.env.PORT || 8080, () => {
    console.log(`Server listening on port ${process.env.PORT || "NO PORT DEFINED"}.`);
});

// print in console the request method and the request url

//TODO: App routes.