import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

export const generateCookingResponse = async (userMessage, retryCount = 0) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const prompt = `You are a professional cooking assistant for TastyNest recipe app. 
    Provide helpful, accurate, and detailed cooking advice. Keep responses concise but informative.
    Focus on practical cooking tips, techniques, and recipe guidance.
    
     FORMAT YOUR RESPONSE EXACTLY LIKE THIS:
     
     [Start with a natural, conversational response like a friendly cooking expert would reply. Be enthusiastic and helpful. Then add a blank line and continue with instructions]
     
     Instructions:
     1. [Step 1]
     2. [Step 2]
     3. [Step 3]
     4. [Step 4]
     5. [Step 5]
     
     Tips:
     • [Tip 1]
     • [Tip 2]
     • [Tip 3]
     • [Tip 4]
     • [Tip 5]
     
     IMPORTANT: 
     - Start with a natural, conversational response (like "Oh, that's a great question!", "I love cooking that!", "Perfect choice!", etc.)
     - Put a blank line between the conversational response and "Instructions:"
     - Put a blank line between "Instructions:" and "Tips:"
     - Each step should be on a new line
     - Each tip should be on a new line
     
     User question: ${userMessage}
     
     Provide your response:`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();
    return text;
  } catch (error) {
    console.error('Gemini API Error:', error);
    
    if (retryCount < 2 && (
      error.message?.includes('timeout') || 
      error.message?.includes('network') || 
      error.message?.includes('fetch') ||
      error.message?.includes('500') ||
      error.message?.includes('503')
    )) {
      console.log(`Retrying... attempt ${retryCount + 1}`);
      await new Promise(resolve => setTimeout(resolve, 1000 * (retryCount + 1)));
      return generateCookingResponse(userMessage, retryCount + 1);
    }
    if (error.message?.includes('API key')) {
      return "Sorry, there's a configuration issue. Please contact support if this continues.";
    } else if (error.message?.includes('quota') || error.message?.includes('limit') || error.message?.includes('429')) {
      return "I'm getting a lot of requests right now! Please wait a few minutes and try again. In the meantime, feel free to browse our recipes!";
    } else if (error.message?.includes('network') || error.message?.includes('fetch')) {
      return "I'm having trouble connecting. Please check your internet connection and try again.";
    } else {
      return "Please try again in a moment.";
    }
  }
};

