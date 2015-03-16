#!/usr/bin/env bash
add-apt-repository ppa:chris-lea/node.js
apt-get update
apt-get install -y python-software-properties python g++ make
apt-get install -y nodejs
npm -g install sails
sails new testProject
