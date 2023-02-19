#!/bin/bash

git clone https://github.com/innovatech-labs/congni-easy-dashboard.git
cd congni-easy-dashboard

# Configure remote origin
git remote rm origin
git remote add origin https://github.com/innovatech-labs/congni-easy-deployment-test.git

echo "Installing dependencies ..."
yarn --silent

echo "Deploying ..."
yarn run deploy

RED='\033[0;31m'
NC='\033[0m' # No Color
printf "\n\n${RED}REMEBER TO MANUALLY DELETE THE DIRECTORY OF congni-easy-dashboard${NC}\n\n"
