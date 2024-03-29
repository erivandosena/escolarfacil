# Estágio de construção
FROM node:18-alpine AS builder
LABEL maintainer="Erivando Sena <erivandosena@gmail.com>"
WORKDIR /app
COPY .env package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY src ./src
COPY docs ./docs

# Estágio de produção
FROM node:18-alpine AS production
LABEL maintainer="Erivando Sena <erivandosena@gmail.com>"
WORKDIR /app
COPY --from=builder /app .

EXPOSE 3000
CMD ["node", "src/app.js"]