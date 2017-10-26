"# cron-job-container" 

steps to run

Build - docker build -t myalpinecron .

Run - docker run -d myalpinecron

To verify its working, you need to check logs

docker exec -ti <id> cat /var/log/script.log

id you will get when you run an cantainer