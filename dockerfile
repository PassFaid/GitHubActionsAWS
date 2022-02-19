FROM node:latest
EXPOSE 9000/tcp
WORKDIR /home/node/app
COPY ./payment.js .
CMD ["node", "payment.js"]
