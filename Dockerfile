# Use Node.js 14 LTS image as base
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose port 3000
EXPOSE 3000

# Command to run your application
CMD ["node", "App.js"]














# This command will build the Docker image with the tag plan_d-action_backend.
# docker build -t plan_d-action_backend .


#This command will run a container based on your image, mapping port 3000 on your host machine to port 3000 in the container.
#docker run -p 3000:3000 plan_d-action_backend

# pour afficher les images
# docker images -a