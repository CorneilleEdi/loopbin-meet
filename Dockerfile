FROM node:18-slim AS build

## Install Node.js, npm and dependencies
RUN apt-get update \
    && apt-get install -y make

## Set the working directory
WORKDIR /app

## Install Node.js dependencies
COPY package.json .
RUN npm install

## Copy the rest of the files
COPY . /app

## Run build with make
RUN make build

## Remove unnecessary files
FROM python:3.10-alpine

## Copy the build from the previous stage

WORKDIR /app

## Copy the build from the previous stage
## Don't copy all from previous stage, but I did it anyway
COPY --from=build /app/static/ /app/static/
COPY --from=build /app/templates/ /app/templates/
COPY --from=build /app/app.py /app
COPY --from=build /app/requirements.txt /app

RUN pip install --no-cache-dir -r requirements.txt

ENV PYTHONUNBUFFERED True
ENV PORT 8080
EXPOSE 8080

## Run the app
CMD exec gunicorn --bind :$PORT --workers 1 --threads 8 --timeout 0 app:app