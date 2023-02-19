#!/bin/bash

git clone https://github.com/innovatech-labs/congni-easy-dashboard.git
cd congni-easy-dashboard

# TO BE DELETED
git checkout deploy-to-gh-pages

echo "Installing dependencies ..."
yarn --silent

echo "Deploying ..."
yarn run deploy

echo "REMEBER TO MANUALLY DELETE THE DIRECTORY OF congni-easy-dashboard"