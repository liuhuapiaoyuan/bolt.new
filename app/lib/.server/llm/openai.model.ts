import { createOpenAI } from '@ai-sdk/openai';
import { env } from 'node:process';

export function getOpenaiModel(cloudflareEnv: Env) {
  const openai = createOpenAI({
    baseURL: env.OPENAI_BASE_URL ?? cloudflareEnv.OPENAI_BASE_URL,
    apiKey: env.OPENAI_API_KEY ?? cloudflareEnv.OPENAI_API_KEY,
  });

  return openai(env.OPENAI_MODEL as 'gpt-4o');
}
