FROM node:10-jessie

RUN npm install -g node-gyp

COPY package.json /tmp
RUN cd /tmp && npm install
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/

# Copy application files
WORKDIR /opt/app
COPY . /opt/app

# RUN npm run build -- --release && node ./build/server.js
ENV NODE_ENV production
ENTRYPOINT [ "/opt/app/entrypoint.sh" ]
CMD [ "start" ]
