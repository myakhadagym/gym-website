import { useCallback, useState } from 'react';

function useIntegratedAi() {
  const [messages, setMessages] = useState([]);
  const [isStreaming, setIsStreaming] = useState(false);
  const [isLoadingHistory] = useState(false);

  const sendMessage = useCallback(async (userMessage) => {
    if (!userMessage?.trim()) return;

    setIsStreaming(true);

    // Add user + placeholder
    setMessages((prev) => [
      ...prev,
      { role: 'user', content: userMessage },
      { role: 'assistant', content: 'Thinking...' },
    ]);

    try {
      // 🔥 CALL SUPABASE EDGE FUNCTION
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/ai-chat`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({
            message: userMessage,
          }),
        }
      );

      // Handle HTTP errors
      if (!response.ok) {
        const errorText = await response.text();
        console.error("API Error:", errorText);
        throw new Error("API request failed");
      }

      const data = await response.json();
      console.log("AI response:", data);

      const reply = data?.reply;

      if (!reply) {
        throw new Error("Invalid AI response");
      }

      // Replace last assistant message
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: 'assistant',
          content: reply,
        };
        return updated;
      });

    } catch (err) {
      console.error("AI error:", err);

      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: 'assistant',
          content: "❌ Error fetching AI response.",
        };
        return updated;
      });

    } finally {
      setIsStreaming(false);
    }
  }, []);

  const clearMessages = useCallback(() => {
    setMessages([]);
  }, []);

  return {
    messages,
    isStreaming,
    isLoadingHistory,
    sendMessage,
    clearMessages,
  };
}

export default useIntegratedAi;
export { useIntegratedAi };