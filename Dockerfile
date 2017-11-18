FROM alpine:3.6

# postgress cli , MTA package installation
RUN apk --update add --no-cache mailx postfix postgresql-client && rm -rf /var/cache/apk/*

RUN postconf "smtputf8_enable = no" 

#Adding cron conf
ADD crontab /crontab

ADD script.sh /script.sh

COPY entry.sh /entry.sh

# making scripts executable 
RUN chmod 755 /script.sh /entry.sh
RUN /usr/bin/crontab /crontab

ENTRYPOINT  postfix start  &&   /entry.sh
