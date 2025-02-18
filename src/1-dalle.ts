// Exercise 1: Create an image using DALLE from OpenAI
// ---
// Even though we didn't talk about Image generation yet, try finding out the code!
// Visit OpenAI documentation and find out how to create an image using JavaScript openai package.
// Run this exercise with `npm run exercise-1`.

import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

// Generate an image using DALL-E. You can generate an image of your favorite animal.
