const fs = require('fs');
const yaml = require('js-yaml');

// Add this line to define the composeFile variable
const composeFile = '/WhatsAppNode/docker-compose.yml'; // Update with your actual path

// ... (the rest of your code)

// Add the modification code at the end
try {
  // Modify the service name
  const serviceName = 'nexus9715123213300';
  const originalServiceName = 'nexus9715123213300'; // Update with the correct original service name
  composeConfig.services[serviceName] = composeConfig.services[originalServiceName];
  delete composeConfig.services[originalServiceName];

  // Modify the container name
  composeConfig.services[serviceName].container_name = 'new-container-name'; // Update with the new container name
  composeConfig.services[serviceName].ports = [1234, 5678]; // Update with the new ports
  composeConfig.services[serviceName].environment = ['NEW_ENV_VAR=example']; // Update with new environment variables

  // Write the modified YAML back to the file
  const updatedYaml = yaml.dump(composeConfig, { indent: 2 });
  fs.writeFileSync(composeFile, updatedYaml);
  console.log(`Service and container names updated successfully.`);
} catch (err) {
  console.error(`Error modifying ${composeFile}: ${err}`);
}
