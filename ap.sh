#!/bin/bash

# Stop existing Appium processes
pkill -f "appium"

# Start Appium in the background with the desired port
appium -a 127.0.0.1 -p 2136 &

# Wait for Appium to start (adjust sleep duration if needed)
sleep 10

# Check if Appium is running on the specified port
nc -zv 127.0.0.1 2136

# Check Appium logs for any errors
pm2 logs test2
