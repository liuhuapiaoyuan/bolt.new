import { deepseekModel } from './deepseek.model';

export const getModel = (cloudflareEnv: Env) => {
  return deepseekModel(cloudflareEnv);
};
