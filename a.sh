#!/bin/bash

# Function to check if a port is listening
check_port() {
    local port=$1
    nc -zv 127.0.0.1 $port
}

# Function to restart Appium in the background
restart_appium() {
    nohup appium &> /dev/null &
}

# Check if Appium is running on port 2136
check_port 2136

if [ $? -eq 0 ]; then
    echo "Appium is running on port 2136. Restarting Appium..."
    # Restart Appium
    restart_appium
    sleep 5  # Give Appium some time to start
    echo "Appium restarted. Checking port again..."
    check_port 2136

    if [ $? -eq 0 ]; then
        echo "Appium started successfully on port 2136."
    else
        echo "Appium did not start successfully. Please check Appium logs for details."
    fi
else
    echo "Appium is not running on port 2136. Restarting Appium..."
    # Restart Appium
    restart_appium
    sleep 5  # Give Appium some time to start
    echo "Appium restarted. Checking port..."
    check_port 2136

    if [ $? -eq 0 ]; then
        echo "Appium started successfully on port 2136."
    else
        echo "Appium did not start successfully. Please check Appium logs for details."
    fi
fi
