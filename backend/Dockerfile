FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package*.json yarn.lock* ./
RUN if [ -f yarn.lock ]; then yarn install --frozen-lockfile; else npm ci; fi

# Copy source
COPY . .

# Build TypeScript
RUN npm run build || yarn build

# Create logs dir
RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nodeapp \
  && mkdir -p logs \
  && chown -R nodeapp:nodejs /app

USER nodeapp

EXPOSE 3000
ENV PORT=3000
ENV NODE_ENV=production

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD node -e "const http = require('http'); \
    const options = {hostname: 'localhost', port: process.env.PORT || 3000, path: '/health', method: 'GET', timeout: 5000}; \
    const req = http.request(options, (res) => {process.exit(res.statusCode === 200 ? 0 : 1);}); \
    req.on('error', () => process.exit(1)); \
    req.on('timeout', () => process.exit(1)); \
    req.end();"

CMD ["node", "dist/server.js"]
