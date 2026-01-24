
import { GoogleGenAI } from "@google/genai";

// Always initialize with an object containing the apiKey from process.env.API_KEY.
const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY || "";
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const getPortfolioAssistantResponse = async (userMessage: string) => {
  const model = "gemini-3-flash-preview";
  const systemInstruction = `
    You are an AI assistant for Earbaj Md Saria's professional portfolio.
    Earbaj is a Software Engineer specializing in Flutter, Node.js, React, and Native Mobile development.
    Key points about Earbaj:
    - Current Role: Software Engineer at Evidentbd (Uttara, Dhaka).
    - 2+ years professional experience.
    - Performance metrics: Achieves 99.9% crash-free sessions in Flutter.
    - Optimization expertise: Reduced data latency by 15% through caching strategies.
    - Code Quality: Enforced clean code principles leading to 20% tech debt reduction.
    - Full-Stack: Expert in Dart/Flutter, Node.js/Express, and React.
    - Major Projects: WebRTC Video Calling, Inventory Management, Ticketing Systems.
    - Education: B.Sc Engg in CSE from BUBT.
    - Location: Dhaka, Bangladesh.
    Be confident, professional, and slightly tech-focused in your tone.
    Suggest users contact him at earbajsaria3@gmail.com for collaborations.
  `;

  try {
    if (!ai) {
      return "The AI assistant is currently offline. You can reach Earbaj directly at earbajsaria3@gmail.com!";
    }

    // @ts-ignore - The types for @google/genai might be slightly off in the current environment
    const response = await ai.models.generateContent({
      model,
      contents: userMessage,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });
    return response.text || "I'm having a small glitch. You can reach Earbaj directly at earbajsaria3@gmail.com!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Technical error. Please contact Earbaj via the form below.";
  }
};
