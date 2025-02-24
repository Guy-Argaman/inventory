# Use the official Node.js image
FROM node:20

# Set the working directory
WORKDIR /app

# # Copy package.json 
COPY package.json ./

# Install dependencies
RUN npm install
# Copy the rest of the backend code
COPY . .

# Expose the port for backend (3001)
EXPOSE 3001

# Define the command to run the application
CMD ["node", "server.js"]