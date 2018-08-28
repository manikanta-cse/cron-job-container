FROM alpine:3.7

RUN apk --update add --no-cache curl mailx postfix postgresql-client nodejs && rm -rf /var/cache/apk/* 

COPY ./ /src

WORKDIR /src

RUN chmod 755 script.sh entry.sh && /usr/bin/crontab crontab && cd api-server; npm install

ENTRYPOINT ["/bin/sh","entry.sh"]
