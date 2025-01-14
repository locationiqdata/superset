#!/bin/bash
# Stop running containers and remove volumes except superset_db
DIR="/home/ec2-user/liq_superset"
if [ -d "$DIR" ]; then
    echo "Stopping app..."
    cd /home/ec2-user/liq_superset
    sudo docker-compose down --timeout 60
    echo "Done"
fi
