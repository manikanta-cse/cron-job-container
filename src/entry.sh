#!/bin/sh

# start cron,postfix,node server
node /src/api-server/server.js & postfix start & /usr/sbin/crond -f -l 8
