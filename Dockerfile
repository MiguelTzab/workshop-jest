FROM node:18.20.4-slim

WORKDIR /application

RUN apt-get update && apt-get install -y