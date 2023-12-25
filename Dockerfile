# Use a base image with Node.js
FROM cypress/included
# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code to the container
COPY . .

# Run Cypress tests (replace with your Cypress test command)
CMD ["npm", "run", "cy:run"]
