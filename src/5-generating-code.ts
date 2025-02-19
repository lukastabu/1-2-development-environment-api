// Exercise 5: Generating Code
// ---
// Call OpenAI API to generate code to create a simple Express.js web server.
// Run this exercise with `npm run exercise-5`.

import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: 'You are a helpful tech lead with one objective: to help your team write code.' },
      { role: 'user', content: 'generate code to create a simple Express.js web server. end the response with "see? all done!"' },
    ],
    temperature: 0.7,
    max_tokens: 500,
  });
  
  console.log(completion.choices[0].message.content);
  