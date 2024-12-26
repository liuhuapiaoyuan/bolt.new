import { createOpenAI } from '@ai-sdk/openai';
import { env } from 'node:process';

export function deepseekModel(cloudflareEnv: Env) {
  const deepseekModel = createOpenAI({
    baseURL: env.DEEPSEEK_BASE_URL ?? cloudflareEnv.DEEPSEEK_BASE_URL ?? 'https://api.deepseek.com/v1',
    apiKey: env.DEEPSEEK_API_KEY ?? cloudflareEnv.DEEPSEEK_API_KEY,
  });

  return deepseekModel(env.DEEPSEEK_MODEL as 'deepseek-chat');
}
