# Firebase token factory

Node.js application to sign a user in to Firebase and generate an id token

## How to use

### With Docker

In your terminal program clone this repository and run:

```console
docker build -t firebase-token-factory .
docker run --rm -p 2000:2000 -d firebase-token-factory
```

### Without Docker

In your terminal program run clone this repository and run:

```console
npm i
```

Then to start run:

```console
npm start
```

Once running do a POST to localhost:2000/ with the following object:

{
"customToken": "your custom token goes here"
}

In the response you will get your id token.
