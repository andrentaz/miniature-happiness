FROM python:2

WORKDIR /usr/bin/app

COPY requirements.txt ./

RUN pip install --no-cache-dir -r requirements.txt

ARG moneeda_api_token
ARG moneeda_api_url=https://api.moneeda.com/api

COPY . .

EXPOSE 5000

ENV MONEEDA_API_URL=$moneeda_api_url
ENV MONEEDA_API_TOKEN=$moneeda_api_token
ENV AVAILABLE_EXCHANGES=BNB,BTX,BFX

CMD [ "python", "./app.py" ]
