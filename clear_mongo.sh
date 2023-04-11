#!/bin/bash
cd ./mongo
mongo  -u root -p rootpassword --authenticationDatabase admin localhost:27017/events ../clear.js

