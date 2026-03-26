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
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;
    sendMessage(input.trim());
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Panel */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] transition-all duration-500 ${
          isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <div className="bg-dark-800 border border-dark-700/60 shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-dark-700/40">
            <div>
              <h3 className="font-heading text-lg text-cream-100">
                SYSCOM Assistant
              </h3>
              <p className="text-[10px] uppercase tracking-[0.15em] text-cream-400 mt-0.5">
                How may we help
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-cream-400 hover:text-cream-100 transition-colors p-1"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto px-5 py-4 space-y-4 scrollbar-thin">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2.5 text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-copper-500/15 border border-copper-500/20 text-cream-100'
                      : 'bg-dark-700/50 border border-dark-600/30 text-cream-200'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-dark-700/50 border border-dark-600/30 px-4 py-3 flex gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-copper-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-copper-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-copper-500 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-dark-700/40 px-4 py-3">
            <div className="flex items-center gap-3">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message..."
                className="flex-1 bg-dark-700/40 border border-dark-600/30 text-cream-100 placeholder-cream-400/40 text-sm px-4 py-2.5 focus:outline-none focus:border-copper-500/40 transition-colors"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="text-copper-500 hover:text-copper-400 disabled:text-dark-600 transition-colors p-2"
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center bg-dark-700 border border-copper-500/30 shadow-lg hover:border-copper-500/60 transition-all duration-300 group ${
          isOpen ? 'rotate-0' : ''
        }`}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? (
          <X size={20} className="text-copper-500" />
        ) : (
          <MessageCircle
            size={20}
            className="text-copper-500 group-hover:text-copper-400 transition-colors"
          />
        )}
      </button>
    </>
  );
}
