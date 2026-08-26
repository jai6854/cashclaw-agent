FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install production dependencies
RUN npm ci --only=production

# Copy application source
COPY . .

# Expose port
EXPOSE 3851

# Environment defaults
ENV PORT=3851
ENV NODE_ENV=production

# Start CashClaw dashboard & poller
CMD ["node", "bin/cashclaw.js", "dashboard", "--port", "3851"]
