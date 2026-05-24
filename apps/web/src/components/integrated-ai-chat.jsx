import { useCallback, useEffect, useRef, useState } from 'react';
import { useIntegratedAi } from '../hooks/use-integrated-ai';
import { Send, Zap } from 'lucide-react';
import React from "react";

export default function IntegratedAiChat() {
  const [input, setInput] = useState('');
  const { messages, isStreaming, sendMessage } = useIntegratedAi();
  const messagesEndRef = useRef(null);

  // Auto scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    const trimmed = input.trim();
    if (!trimmed || isStreaming) return;

    setInput('');
    sendMessage(trimmed);
  }, [input, isStreaming, sendMessage]);

  return (
    <div className="flex flex-col h-full w-full bg-card border border-border rounded-[24px] overflow-hidden">

      {/* Header */}
      <div className="flex items-center gap-3 p-4 border-b border-border">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
          <Zap className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-lg font-bold">Akhada AI</h2>
          <p className="text-xs text-muted-foreground">Fitness Assistant</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">

        {messages.length === 0 && (
          <div className="text-center text-muted-foreground mt-10">
            Ask about fitness, diet, workouts...
          </div>
        )}

        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[75%] px-4 py-2 rounded-lg text-sm ${
                msg.role === 'user'
                  ? 'bg-primary text-white'
                  : 'bg-muted text-black'
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {/* Loading indicator */}
        {isStreaming && (
          <div className="text-sm text-muted-foreground">
            AI is typing...
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-border">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about fitness..."
            className="flex-1 px-4 py-2 border rounded-lg"
            disabled={isStreaming}
          />
          <button
            type="submit"
            disabled={!input.trim() || isStreaming}
            className="px-4 py-2 bg-primary text-white rounded-lg disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}