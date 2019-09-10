const express = require("express");
const bodyParser = require("body-parser");

import tokenGenerator from "./tokenGenerator.js";

const app = express();
app.use(bodyParser.json());

const port = 2000;

app.post("/", (req, res) => {
  if (req.body.customToken) {
    const customToken = req.body.customToken;
    tokenGenerator(customToken)
      .then(idToken => {
        console.log(
          "You are now signed in to Firebase, see the response for your id token!"
        );
        res.send({ idToken });
      })
      .catch(error => {
        res.send(`Error: ${error}`);
      });
  } else {
    res.send("Custom token not supplied, please try again!");
  }
});

app.listen(port, () =>
  console.log(`Firebase token factory listening on port ${port}!`)
);
