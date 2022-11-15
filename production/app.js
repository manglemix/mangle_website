import { handler } from './build/handler.js';
import { env } from './build/env.js';
import express from 'express';
import https from 'https'
import fs from 'fs'

const port = env('PORT', '443');
const app = express();

// let SvelteKit handle everything else, including serving prerendered pages and static assets
app.use(handler);

app.listen(port, () => {
  console.log('listening on port ' + port);
});

// const https = require("https"), fs = require("fs");

const options = {
    key: fs.readFileSync("/run/secrets/server-key"),
    cert: fs.readFileSync("/run/secrets/server-cert")
};

https.createServer(options, app).listen(port);