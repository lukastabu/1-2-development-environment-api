// Exercise 3: OpenAI - Sentiment Analysis with LLMs
// ---
// Call OpenAI API and ask ChatGPT to perform sentiment analysis on the following reviews:
// "I am absolutely thrilled with this new product!"
// "I hate this product!"
// "I wonder what will happen with this product!"
// Run this exercise with `npm run exercise-3`.

import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

const text = ["I am absolutely thrilled with this new product!", 
        "I hate this product!",
        "I wonder what will happen with this product!"];

const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: 'You are a helpful assistant.' },
      { role: 'user', content: 'perform sentiment analysis on the following reviews: ' + text + '. Response with a positive or negative sentiment.' },
    ],
    temperature: 0.7,
    max_tokens: 100,
  });
  
  console.log(completion.choices[0].message.content);
  