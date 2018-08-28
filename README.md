# cron-job-container

## steps to run

Build -> docker build -t myalpinecron .

Run -> docker run -d  -e ENVIRONMENT=preprod  -p 8090:8090 myalpinecron

you can check logs by

docker logs containerid

