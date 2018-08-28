#!/bin/sh

# ENVIRONMENT - variable passed from docker args

if [ -z $ENVIRONMENT ]
then
        echo "Enviroment variable - ENVIRONMENT wasn'st found, so exiting!"
        exit 0
fi

if [ $ENVIRONMENT == prod ]
then
        SUBJECT='Prod'
       
else
        SUBJECT='Pre-Prod'
       
fi

# making an api call

response=$(curl -X DELETE -H  "Content-type: application/json" -d $QUOTES "http://localhost:8090/api/quotes")

echo "Response from api : $response"

MAILBODY="Hello from container! \n\n $(date)"
echo -e $MAILBODY | mail -s "$SUBJECT" youremail@domain.com