#!/bin/bash

# Replace with the path to your Docker Compose file
COMPOSE_FILE="/WhatsAppNode/docker-compose.yml"

# Step 1: Check if Docker Compose file exists
if [ ! -f "$COMPOSE_FILE" ]; then
  echo "Error: Docker Compose file not found at $COMPOSE_FILE"
  exit 1
fi

# Step 2: Validate Docker Compose file
docker-compose -f "$COMPOSE_FILE" config
if [ $? -ne 0 ]; then
  echo "Error: Docker Compose file validation failed."
  exit 1
fi

# Step 3: Load Docker Compose configuration in JavaScript
node <<EOF
const fs = require('fs');
const yaml = require('js-yaml');

const composeFile = '${COMPOSE_FILE}';

try {
  const data = fs.readFileSync(composeFile, 'utf8');
  const composeConfig = yaml.load(data);
  console.log('Compose Config:', composeConfig);
} catch (err) {
  console.error('Error loading composeConfig:', err);
}
EOF

# Add more steps or customize as needed to further debug the issue
