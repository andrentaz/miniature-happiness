#!/bin/bash

# Constants
RED='\033[0;31m' # Red
NC='\033[0m' # No Color

# check if there is docker in the machine
echo "Building backend docker container"
hash docker &> /dev/null
if [ $? -eq 1 ]; then
    echo >&2 "Ooops! Seems like you don't have docker installed :("
    echo >&2 "Check the README for instructions on running the nodes without it :)"
else
    echo "Proceeding with docker :)"
fi

echo ""
echo ""

# start by building backend container
pushd .
cd backend-node

docker build --build-arg moneeda_api_token=$API_TOKEN -t $USER/miniature-happiness-server .
docker run -d -p 49160:5000 $USER/miniature-happiness-server

echo "Backend server should run in port 41960"
echo ""
echo ""

popd

# now build fronend container
echo "Building frontend docker container"
pushd .
cd frontend-node

docker build -t $USER/miniature-happiness-client .
docker run -d -p 49161:5000 -p 49162:3000 $USER/miniature-happiness-client

popd

echo ""
echo ""
echo "${RED}REMEMBER THAT THE FRONTEND RUN TAKES SOMETIME :)${NC}"
echo "Check if which door is open in the frontend container server: 5000 -> 49161 | 3000 -> 49162"

echo "You can use docker ps to check the port of which container"
echo ""
echo ""
echo ""

echo "Check the following addresses"
echo "backend   -> http://localhost:49160"
echo "frontend  -> http://localhost:49161"
echo "frontend  -> http://localhost:49162"
