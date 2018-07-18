FROM python:2
WORKDIR /usr/bin/app
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE 5000 5000
CMD [ "python", "./www/app.py" ]
