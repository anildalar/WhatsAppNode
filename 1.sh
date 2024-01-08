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
    echo "Appium is running on port 2136. Checking /wd/hub/status..."
    # Check the status endpoint
    response=$(curl -s http://127.0.0.1:2136/wd/hub/status)

    if [[ $response == *"unknown command"* ]]; then
        echo "The /wd/hub/status endpoint is not available. Restarting Appium..."
        # Restart Appium
        restart_appium
        sleep 5  # Give Appium some time to start
        echo "Appium restarted. Checking port and /wd/hub/status again..."
        check_port 2136

        if [ $? -eq 0 ]; then
            # Check the status endpoint again
            response=$(curl -s http://127.0.0.1:2136/wd/hub/status)
            echo "Response from /wd/hub/status: $response"
        else
            echo "Appium did not start successfully. Please check Appium logs for details."
        fi
    else
        echo "The /wd/hub/status endpoint is available. No action needed."
    fi
else
    echo "Appium is not running on port 2136. Restarting Appium..."
    # Restart Appium
    restart_appium
    sleep 5  # Give Appium some time to start
    echo "Appium restarted. Checking port and /
