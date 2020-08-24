FROM  node:10.16.3
EXPOSE 3000

WORKDIR /app
ADD package.json /app/
RUN npm install

ADD . /app

CMD ["node","bin/www"]
