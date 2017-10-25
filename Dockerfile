FROM centos:7

# install crontabs
RUN yum -y update
RUN yum install vixie-cron

#permission
RUN chmod 0644 /etc/crontab

RUN service crond start

RUN chkconfig crond on

#copying cron job
COPY hello-cron /etc/cron.d/hello-cron

RUN crond /etc/cron.d/hello-cron
CMD crond && tail -f /dev/null
