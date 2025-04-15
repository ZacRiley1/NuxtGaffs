# Use Node as base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Expose port and run dev server
EXPOSE 3000
CMD ["npm", "run", "dev"]