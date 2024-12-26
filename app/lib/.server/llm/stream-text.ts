import { streamText as _streamText, convertToCoreMessages } from 'ai';
import { MAX_TOKENS } from './constants';
import { getSystemPrompt } from './prompts';
import { getModel } from './model';

interface ToolResult<Name extends string, Args, Result> {
  toolCallId: string;
  toolName: Name;
  args: Args;
  result: Result;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
  toolInvocations?: ToolResult<string, unknown, unknown>[];
}

export type Messages = Message[];

export type StreamingOptions = Omit<Parameters<typeof _streamText>[0], 'model'>;

export function streamText(messages: Messages, env: Env, options?: StreamingOptions) {
  return _streamText({
    model: getModel(env),
    system: getSystemPrompt(),
    maxTokens: Number(MAX_TOKENS),
    headers: { },
    messages: convertToCoreMessages(messages),
    ...options,
  });
}
