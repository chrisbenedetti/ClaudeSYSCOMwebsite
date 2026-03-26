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
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    sendMessage(trimmed);
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
      {/* Chat panel */}
      <div
        className={`fixed bottom-20 right-4 sm:right-6 z-50 w-[340px] sm:w-[380px] transition-all duration-300 origin-bottom-right ${
          isOpen
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
        }`}
      >
        <div className="rounded-2xl overflow-hidden shadow-2xl shadow-navy-900/80 border border-white/10 bg-navy-800 flex flex-col" style={{ height: '500px' }}>
          {/* Header */}
          <div className="px-4 py-3 bg-gradient-to-r from-electric-500 to-teal-500 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">SYSCOM Assistant</p>
                <p className="text-xs text-white/70">Ask about our services</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg hover:bg-white/20 transition-colors"
              aria-label="Close chat"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-electric-500 text-white rounded-br-md'
                      : 'bg-navy-700 text-slate-200 rounded-bl-md border border-white/5'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-navy-700 border border-white/5 rounded-2xl rounded-bl-md px-4 py-3">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-electric-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-electric-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-electric-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="px-3 py-3 border-t border-white/5 shrink-0">
            <div className="flex items-center gap-2 bg-navy-900 rounded-xl px-3 py-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about SYSCOM..."
                className="flex-1 bg-transparent text-sm text-white placeholder-slate-500 outline-none"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="p-2 rounded-lg bg-electric-500 text-white hover:bg-electric-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`fixed bottom-4 right-4 sm:right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-electric-500 to-teal-500 text-white shadow-lg shadow-electric-500/30 hover:shadow-electric-500/50 transition-all duration-300 flex items-center justify-center group ${
          isOpen ? 'scale-90' : 'scale-100 hover:scale-105'
        }`}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        <MessageCircle
          className={`w-6 h-6 transition-all duration-300 ${
            isOpen ? 'opacity-0 scale-75 rotate-90' : 'opacity-100 scale-100 rotate-0'
          } absolute`}
        />
        <X
          className={`w-6 h-6 transition-all duration-300 ${
            isOpen ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 -rotate-90'
          } absolute`}
        />
      </button>
    </>
  );
}
