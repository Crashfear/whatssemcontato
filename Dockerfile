## Use Node Slim image
FROM node:14-slim

## Copy source code
COPY . .

## Start the application
CMD ["node", "dist/whats-sem-contato-app/server/main.js"]