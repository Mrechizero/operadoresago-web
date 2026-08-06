# ---------- BASE ----------
FROM node:20-alpine AS base

RUN npm install --global pnpm@10.33.4

# ---------- DEPENDENCIAS ----------
FROM base AS dependencies

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./

RUN pnpm install --frozen-lockfile

# ---------- COMPILACIÓN ----------
FROM base AS builder

WORKDIR /app

COPY --from=dependencies /app/node_modules ./node_modules
COPY . .

RUN pnpm run build

# ---------- PRODUCCIÓN ----------
FROM base AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=builder /app ./

EXPOSE 3000

CMD ["pnpm", "start"]
