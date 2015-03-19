#!/usr/bin/env bash
add-apt-repository ppa:chris-lea/node.js
apt-get update
apt-get install -y python-software-properties python g++ make
apt-get install -y nodejs
export DEBIAN_FRONTEND=noninteractive
apt-get install -y -q mysql-server
npm -g install sails
git clone https://github.com:frias0/leet_chat.git
cd leet_chat
mysql -u root < db.sql
cd backend
sails lift
