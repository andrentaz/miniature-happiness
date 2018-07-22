# miniature-happiness

Stack:
- Python web Framework: **Flask**
- Container: **Docker**
- Frontend: **React + Redux** 

## About this project
This project is intended to build a simple app that connects to [Moneeda API](https://moneeda.github.io/docs/?shell#moneeda-api) in order to check some product exchanges. For the purpose of the project, the exchanges where limmited to **BTX**, **BNB**, **BFX**.

To do so, the project implement two separated microservices. A backend server that implements an REST API with [flask](http://flask.pocoo.org/), that serves a list with shared products, and a given product price in all the three exchanges. The frontend node uses [React](https://reactjs.org/) and [Redux](https://redux.js.org/) to implement a simple **Single Page Application** (SPA) to communicate with the backend and give the user the products available and their prices.

## Dependencies
Since the project uses docker containers, you will only need to use [Docker](https://www.docker.com/).

If you prefer to run the nodes in your local machine instead of the containers, then you will need [pip](https://pypi.org/project/pip/) and [node](https://nodejs.org/en/) to run each process manually.

## Environment
In order to access **Moneeda API** you will need a private token. You need to set the token in a environment variable **API_TOKEN** since the script and docker expect the environment to have this.

## Setup/Install project
If you want to run the project using docker, you can simply do:
```
$ sh run.sh
```
Be sure you have docker installed before running, and the API token in the environment variable **API_TOKEN**. It will setup both containers so you can use the browser or curl to check both the front and back.

The script will put the backend listening to port **41960** and frontend lintening to port **419161**. You have to change in the script manually if want other ports (to-do: make script use arguments).

If you want to run then manually, then do
```
$ docker build --build-arg moneeda_api_token=<YOUR_TOKEN> [--build-arg moneeda_api_url=<MONEEDA_API_URL>] -t $USER/<your_server_container_name> .
$ docker run -p 41960:5000 -d $USER/<your_server_container_name>
```
for the backend, and:
```
$ docker build -t $USER/<your_client_container_name> .
$ docker run -p $PORT2:5000 -p $PORT2:3000 -d $USER/<your_client_container_name>
```
for the frontend. After the build in the frontend, everything should be fine!

(Observation: until now, the backend port is hardcoded in the front (one of the points of TODO list), if you change the port that the docker is binding, you will have to change it in the [ExchangeApi](ExchangeApi.js) in the frontend) 

You can check if the containers are running using:
```
$ docker ps
```

If you prefer to run then without docker, then, assuming you have **pip** and **node** you can simply do from the root folder:
```
$ cd backend-node/
$ pip install -r requirements.txt
$ python app.js
```
for the backend, and:
```
$ cd frontend-node/
$ npm install
$ npm start
```
for the front.

You can also use the webpack dev server with
```
$ npm install
$ npm dev
```
## License
This project is licensed under the MIT License - see the (LICENSE.md)[LICENSE.md] file for details

## Future TO-DOs
- Change the script to use arguments;
- Implement unit tests in both platforms;
- Implement automated usage tests for frontend;
