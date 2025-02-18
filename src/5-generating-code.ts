// Exercise 5: Generating Code
// ---
// Call OpenAI API to generate code to create a simple Express.js web server.
// Run this exercise with `npm run exercise-5`.

import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });
