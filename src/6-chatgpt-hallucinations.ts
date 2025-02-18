// Exercise 6: Check for ChatGPT hallucinations
// ---
// Does Eliza Thornton exist? What about her Nobel prize?

// Inspect the results of the following prompt:
// Tell me about the scientific contributions of Dr. Eliza Thornton, the discoverer of quantum gravity, including her published works and Nobel Prize details.
// Run this exercise with `npm run exercise-6`.

import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });
