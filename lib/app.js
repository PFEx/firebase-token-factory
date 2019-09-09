const express = require("express");
const bodyParser = require("body-parser");

import tokenGenerator from "./tokenGenerator.js";

const app = express();
app.use(bodyParser.json());

const port = 2000;

app.post("/", (req, res) => {
  tokenGenerator(req.body.customToken)
    .then(idToken => {
      res.send({ idToken });
    })
    .catch(error => {
      console.log(`Error: ${error}`);
    });
});

app.listen(port, () =>
  console.log(`Firebase token factory listening on port ${port}!`)
);
