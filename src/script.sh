#!/bin/sh

# env - variable passed from docker args

if [ -z $env ]
then
        echo "Enviroment variable - env wasn'st found, so exiting!"
        exit 0
fi

if [ $env == prod ]
then
        SUBJECT='Prod'
       
else
        SUBJECT='Pre-Prod'
       
fi

MAILBODY="Hello from container! \n\n $(date)"
echo -e $MAILBODY | mail -s "$SUBJECT" youremail@domain.com