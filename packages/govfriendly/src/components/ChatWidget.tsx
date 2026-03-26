import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { useChat } from '@shared/hooks/useChat';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const { messages, isTyping, sendMessage } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    sendMessage(trimmed);
    setInput('');
  };

  return (
    <div className="chat-widget fixed bottom-4 right-4 z-40">
      {/* Chat panel */}
      {isOpen && (
        <div
          className="mb-3 w-80 sm:w-96 bg-white rounded-lg shadow-xl border border-gray-200 flex flex-col"
          style={{ maxHeight: '480px' }}
          role="dialog"
          aria-label="Chat with SYSCOM assistant"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-gov-navy text-white rounded-t-lg">
            <h2 className="font-heading font-semibold text-base">SYSCOM Assistant</h2>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded hover:bg-white/20 transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          {/* Messages */}
          <div
            className="flex-1 overflow-y-auto px-4 py-3 space-y-3"
            style={{ minHeight: '240px', maxHeight: '340px' }}
            aria-live="polite"
            aria-label="Chat messages"
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-lg text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-gov-navy text-white'
                      : 'bg-gov-gray text-gov-gray-dark'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gov-gray text-gov-gray-dark px-3 py-2 rounded-lg text-sm">
                  <span aria-label="Assistant is typing" className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-gov-gray-dark/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-gov-gray-dark/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-gov-gray-dark/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 px-4 py-3 border-t border-gray-200"
          >
            <label htmlFor="chat-input" className="sr-only">
              Type your message
            </label>
            <input
              ref={inputRef}
              id="chat-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about our services..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm text-gov-gray-dark placeholder-gray-400 focus-visible:outline-2 focus-visible:outline-gov-blue"
            />
            <button
              type="submit"
              className="p-2 bg-gov-navy text-white rounded hover:bg-gov-navy-dark transition-colors disabled:opacity-50"
              disabled={!input.trim()}
              aria-label="Send message"
            >
              <Send className="w-4 h-4" aria-hidden="true" />
            </button>
          </form>
        </div>
      )}

      {/* Floating button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="ml-auto flex items-center justify-center w-14 h-14 bg-gov-blue text-white rounded-full shadow-lg hover:bg-gov-blue-light transition-colors"
        aria-label={isOpen ? 'Close chat assistant' : 'Open chat assistant'}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X className="w-6 h-6" aria-hidden="true" />
        ) : (
          <MessageCircle className="w-6 h-6" aria-hidden="true" />
        )}
      </button>
    </div>
  );
}
