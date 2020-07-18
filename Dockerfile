FROM node:12

WORKDIR /app

RUN npm install -g @angular/cli
RUN npm install --global http-server

EXPORT 4200

COPY ./myScript.sh ./myScript.sh

CMD ./myScript.sh
