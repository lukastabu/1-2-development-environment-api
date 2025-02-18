// Exercise 3: OpenAI - Sentiment Analysis with LLMs
// ---
// Call OpenAI API and ask ChatGPT to perform sentiment analysis on the following reviews:
// "I am absolutely thrilled with this new product!"
// "I hate this product!"
// "I wonder what will happen with this product!"
// Run this exercise with `npm run exercise-3`.

import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });
