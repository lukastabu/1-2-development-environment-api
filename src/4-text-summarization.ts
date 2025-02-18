// Exercise 4: Text Summarization
// ---
// Provide a long paragraph and use an LLM to summarize it in a few sentences.

// An example of a long paragraph:
// Large Language Models, or LLMs, are advanced AI systems that can understand and generate human-like text. They are trained on massive datasets, enabling them to perform tasks such as translation, summarization, and question answering. These models are at the forefront of AI research and have numerous real-world applications.
// Run this exercise with `npm run exercise-4`.

import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });
