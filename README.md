# miniature-happiness

Stack:
- Python web Framework: **Flask**
- Container: **Docker**

## Setup/Install project
In order to get the information about the exchange and products, the backend have to access Moneeda API. Therefore, you need to pass at least the api token as a build parameter.

```
$ docker build -t --build-arg moneeda_api_token=<YOUR_TOKEN> [--build-arg moneeda_api_url=<MONEEDA_API_URL>] my-python-server .
```

## Running the server
```
$ docker run -p 5000:5000/tcp my-python-server
```
