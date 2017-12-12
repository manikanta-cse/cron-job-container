FROM alpine:3.7

# postgress cli , MTA package installation
RUN apk --update add --no-cache mailx postfix postgresql-client nodejs && rm -rf /var/cache/apk/* 

COPY ./ /src

RUN chmod 755 src/script.sh src/entry.sh && /usr/bin/crontab src/crontab && cd /src/api-server; npm install

ENTRYPOINT ["/bin/sh","/src/entry.sh"]