FROM node:19-alpine3.16
# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package.json ./
COPY yarn.lock ./

# Install the dependencies
RUN yarn install --production

# Copy the rest of the application code to the working directory
COPY . .

# Set the environment variable for the Node app
ENV NODE_ENV=production

# Start the Node app
CMD ["yarn", "start"]

