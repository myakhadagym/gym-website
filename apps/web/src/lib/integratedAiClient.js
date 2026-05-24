// src/lib/integratedAiClient.js

export const integratedAiClient = {
  async sendMessage(message) {
    // later you connect OpenAI or backend
    return {
      reply: "This is AI response for: " + message
    };
  }
};