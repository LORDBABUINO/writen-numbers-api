# writen-numbers-api

This is an API that can write out in full the number you pass by param in url. It can only write numbers in portuguese.

## Requirements

First of all you have to have `git` installed. Then if you want to run this application inside a container, you have to have docker and docker-compose installed in your machine, if not you have to have node version 15.8.0 and yarn.

## Download Application

Just run:

``` shell
git clone https://github.com/LORDBABUINO/writen-numbers-api.git

```

## Running on docker container

Inside the *writen-numbers-api* directory, run:

```shell
cp .env.example .env
docker-compose up -d
```

## Running natively

Inside the *writen-numbers-api* directory, run:

```shell
cp .env.example .env
yarn && yarn dev
```

## Using API

Use path `localhost:3000/<number>` in your browser to tell API the number you want it to write. For example, you can access `localhost:3000/33` to write out 33 in full:

```json
//localhost:3000/33
//response:

{
  "extenso": "trinta e três"
}
```

## Running tests

There are unit and integration tests on this code. To run `yarn test` for unit tests and `yarn integration` for integration tests.
