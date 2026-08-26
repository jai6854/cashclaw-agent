FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install production dependencies
RUN npm ci --only=production

# Copy application source
COPY . .

# Expose default port
EXPOSE 10000

ENV NODE_ENV=production

# Start CashClaw dashboard
CMD ["node", "bin/cashclaw.js", "dashboard", "--no-open"]
