FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /app
WORKDIR /app

FROM base AS dev
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN echo "OPENAI_BASE_URL=${OPENAI_BASE_URL}" > .env.local && \
    echo "OPENAI_API_KEY=${OPENAI_API_KEY}" >> .env.local && \
    echo "OPENAI_MODEL=${OPENAI_MODEL}" >> .env.local  && \
    echo "AI_PROVIDER=${AI_PROVIDER}" >> .env.local
EXPOSE 8788
EXPOSE 5173
CMD [ "pnpm", "dev","--host" ]