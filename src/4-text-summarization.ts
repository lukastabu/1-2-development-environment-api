// Exercise 4: Text Summarization
// ---
// Provide a long paragraph and use an LLM to summarize it in a few sentences.

// An example of a long paragraph:
// Large Language Models, or LLMs, are advanced AI systems that can understand and generate human-like text. They are trained on massive datasets, enabling them to perform tasks such as translation, summarization, and question answering. These models are at the forefront of AI research and have numerous real-world applications.
// Run this exercise with `npm run exercise-4`.

import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

const text = 'Large Language Models, or LLMs, are advanced AI systems that can understand and generate human-like text. They are trained on massive datasets, enabling them to perform tasks such as translation, summarization, and question answering. These models are at the forefront of AI research and have numerous real-world applications.'


const completion = await openai.chat.completions.create({
model: 'gpt-4o-mini',
messages: [
  { role: 'system', content: 'You are a helpful assistant.' },
  { role: 'user', content: 'summarize the following paragraph into one sentence of less than 15 words: ' + text + ' ' },
],
temperature: 0.7,
max_tokens: 50,
});

console.log(completion.choices[0].message.content);
