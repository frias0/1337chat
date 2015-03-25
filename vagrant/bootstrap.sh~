#!/usr/bin/env bash

echo "UPDATING UBUNTU"
sudo apt-get update
sudo apt-get install -y python-software-properties python g++ make


echo "INSTALLING GIT"
sudo apt-get install -y git

echo "SETTING UP NODEJS"
#apt-get install -y nodejs
curl https://raw.githubusercontent.com/creationix/nvm/v0.24.0/install.sh | bash
source ~/.bashrc
source ~/.profile
export NVM_DIR="/home/vagrant/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm
nvm install 0.12
nvm use 0.12
ls -al
sudo chown -R vagrant ~/.npm

sudo ln -s /usr/local/bin/node /usr/bin/node
sudo ln -s /usr/local/lib/node /usr/lib/node
sudo ln -s /usr/local/bin/npm /usr/bin/npm
sudo ln -s /usr/local/bin/node-waf /usr/bin/node-waf



echo "INSTALLING MYSQL"
export DEBIAN_FRONTEND=noninteractive
sudo apt-get install -y -q mysql-server #pw blank

echo "INSTALLING STUFF"
curl https://github.com/atom/atom/releases/download/v0.187.0/atom-amd64.deb
sudo dpkg --install atom-amd64.deb

echo "SETTING UP PROJECT"
git clone https://github.com/frias0/leet_chat.git
sudo chown -R vagrant leet_chat
cd leet_chat

echo "LOADING DB CONFIG"
sudo mysql -u root < db.sql
cd backend

echo "INSTALLING DEPENDENCIES"
npm install sails -g
npm install
echo "SETUP DONE"
sails lift
