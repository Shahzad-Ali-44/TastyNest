import { GoogleGenerativeAI } from '@google/generative-ai';

const promptFor = (userMessage) => `You are a professional cooking assistant for TastyNest recipe app. 

FIRST, use your reasoning abilities to analyze the user's question:
- Is this question related to cooking, recipes, food, ingredients, cooking techniques, meal planning, or kitchen-related topics?
- If YES: Provide helpful cooking advice in the format below
- If NO: Politely redirect them to cooking-related topics

FOR COOKING-RELATED QUESTIONS ONLY, format your response like this:

[Start with a natural, human-like response. Don't use words like "Perfect!", "Great choice!", "Fantastic!" - these sound robotic. Instead, respond naturally like a real person would, such as "I love making that!", "That's one of my favorites!", "Oh nice, that's delicious!", or just directly answer their question. Then add a blank line and continue with instructions]

Instructions:
1. [Step 1 - NO ASTERISKS OR BOLD FORMATTING]
2. [Step 2 - NO ASTERISKS OR BOLD FORMATTING]  
3. [Step 3 - NO ASTERISKS OR BOLD FORMATTING]
4. [Step 4 - NO ASTERISKS OR BOLD FORMATTING]
5. [Step 5 - NO ASTERISKS OR BOLD FORMATTING]

Tips:
• [Tip 1 - NO ASTERISKS OR BOLD FORMATTING]
• [Tip 2 - NO ASTERISKS OR BOLD FORMATTING]
• [Tip 3 - NO ASTERISKS OR BOLD FORMATTING]
• [Tip 4 - NO ASTERISKS OR BOLD FORMATTING]
• [Tip 5 - NO ASTERISKS OR BOLD FORMATTING]

IMPORTANT RESPONSE RULES:
- NO asterisks (**) or bold formatting anywhere
- NO robotic words like "Perfect!", "Great choice!", "Fantastic!", "Wonderful!"
- Start naturally like "I love making that!", "That's delicious!", "Here's how I do it:", or just directly answer
- Sound like a real person, not a formal assistant

FOR NON-COOKING QUESTIONS, respond like this:
"Sorry I can't help with that. I'm a cooking assistant specialized in recipes, cooking techniques, and kitchen tips! I'd be happy to help you with any cooking-related questions like:
• Recipe recommendations
• Cooking methods and techniques  
• Ingredient substitutions
• Meal planning
• Kitchen tips and tricks

What would you like to know about cooking? 👨‍🍳"

User question: ${userMessage}

Provide your response:`;

const shouldRetry = (message = '') =>
  ['timeout', 'network', 'fetch', '500', '503'].some((s) => message.toLowerCase().includes(s));

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const generateCookingResponse = async (userMessage, retryCount = 0) => {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return { ok: false, error: "Missing GEMINI_API_KEY." };
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-lite' });
    const result = await model.generateContent(promptFor(userMessage));
    const response = await result.response;
    const text = response.text();
    return { ok: true, text };
  } catch (error) {
    const message = error?.message || String(error);

    if (retryCount < 2 && shouldRetry(message)) {
      await sleep(1000 * (retryCount + 1));
      return generateCookingResponse(userMessage, retryCount + 1);
    }

    if (message.toLowerCase().includes('api key')) {
      return { ok: false, error: "Sorry, there's a configuration issue. Please contact support if this continues." };
    }

    if (['quota', 'limit', '429'].some((s) => message.toLowerCase().includes(s))) {
      return {
        ok: false,
        error:
          "I'm getting a lot of requests right now! Please wait a few minutes and try again. In the meantime, feel free to browse our recipes!",
      };
    }

    if (['network', 'fetch'].some((s) => message.toLowerCase().includes(s))) {
      return { ok: false, error: "I'm having trouble connecting. Please check your internet connection and try again." };
    }

    return { ok: false, error: 'Please try again in a moment.' };
  }
};

export async function POST(request) {
  try {
    const body = await request.json();
    const message = body?.message;

    if (typeof message !== 'string' || !message.trim()) {
      return Response.json({ ok: false, error: 'Message is required.' }, { status: 400 });
    }

    const result = await generateCookingResponse(message);
    return Response.json(result, { status: result.ok ? 200 : 500 });
  } catch {
    return Response.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }
}

