import { getOpenaiModel } from './openai.model';
import { getAnthropicModel } from './anthropic.model';
import { env } from 'node:process';

const PROVIDERS = {
  openai: getOpenaiModel,
  anthropic: getAnthropicModel,
};

export const getModel = (cloudflareEnv: Env) => {
  const provider = (env.AI_PROVIDER as 'openai') ?? 'openai';
  return PROVIDERS[provider](cloudflareEnv);
};
