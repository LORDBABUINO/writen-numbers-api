# writen-numbers-api

## Requiriments

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

## Accessing API

Just access [localhost:3000](http://localhost:3000) on your browser.
