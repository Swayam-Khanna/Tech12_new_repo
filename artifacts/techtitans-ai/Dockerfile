FROM node:20-alpine AS build
WORKDIR /repo
RUN npm install -g pnpm@9
COPY . .
RUN pnpm install --no-frozen-lockfile
RUN pnpm --filter @workspace/techtitans-ai run build

FROM nginx:alpine
COPY --from=build /repo/artifacts/techtitans-ai/dist /usr/share/nginx/html
EXPOSE 80
