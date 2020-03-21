#!/bin/bash

set -e
if [ "$1" = 'start' ]; then
  if [ $MODE = "production" ]; then
  yarn build
  yarn global add serve
  serve -s build -l 3000
    else
    yarn start
  fi
fi

exec "$@"