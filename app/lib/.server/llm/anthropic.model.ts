import { createAnthropic } from '@ai-sdk/anthropic';
import { getAPIKey } from './api-key';

export function getAnthropicModel(cloudflareEnv: Env) {
  const anthropic = createAnthropic({
    apiKey: getAPIKey(cloudflareEnv),
  });

  return anthropic('claude-3-5-sonnet-20240620');
}
