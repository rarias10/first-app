# server/Dockerfile
FROM node:20-alpine
WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .
ENV NODE_ENV=production
ENV PORT=5000
EXPOSE 5000

# Use your package.json start script (e.g. "start": "node index.js")
CMD ["npm", "start"]

