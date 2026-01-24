
import React, { useState, useRef, useEffect } from 'react';
import { getPortfolioAssistantResponse } from '../services/geminiService';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([
    { role: 'ai', text: 'Hi! I am the portfolio assistant. Ask me anything about the developer!' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    const aiResponse = await getPortfolioAssistantResponse(userMsg);
    setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="glass w-80 sm:w-96 h-[500px] rounded-3xl flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
          <div className="p-4 bg-sky-500/20 border-b border-white/10 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center">🤖</div>
              <span className="font-bold text-sm">Portfolio Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">✕</button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${m.role === 'user' ? 'bg-sky-600' : 'bg-slate-800'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 p-3 rounded-2xl text-sm animate-pulse">Thinking...</div>
              </div>
            )}
          </div>

          <div className="p-4 bg-slate-900/50 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about my skills..."
              className="flex-1 bg-slate-800 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-sky-500"
            />
            <button 
              onClick={handleSend}
              className="bg-sky-500 w-10 h-10 rounded-xl flex items-center justify-center hover:bg-sky-400 transition-colors"
            >
              ➔
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform active:scale-95 group"
        >
          <span className="text-2xl group-hover:rotate-12 transition-transform">💬</span>
        </button>
      )}
    </div>
  );
};

export default ChatBot;
