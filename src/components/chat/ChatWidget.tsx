import { useState, useRef, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { MessageCircle, X, Send, Loader2, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type ChatMessage = {
  id: number;
  message: string;
  sender: "visitor" | "agent";
  agent_name?: string;
  visitor_name?: string;
};

function getOrCreateVisitorId(): string {
  const key = "anucleo_visitor_id";
  let id = localStorage.getItem(key);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(key, id);
  }
  return id;
}

export default function ChatWidget() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  if (pathname.startsWith("/employee")) return null;
  const [step, setStep] = useState<"form" | "chat">("form");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [lastId, setLastId] = useState(0);
  const [sending, setSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const visitorId = getOrCreateVisitorId();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (open && step === "chat") {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open, step]);

  const poll = useCallback(async () => {
    try {
      const res = await fetch(`/api/chat/messages.php?visitor_id=${visitorId}&since=${lastId}`);
      const data = await res.json();
      if (data.success && data.messages.length > 0) {
        setMessages((prev) => [...prev, ...data.messages.map((m: any) => ({
          id: m.id,
          message: m.message,
          sender: m.sender,
          agent_name: m.agent_name,
          visitor_name: m.visitor_name,
        }))]);
        setLastId(data.messages[data.messages.length - 1].id);
      }
    } catch {}
  }, [visitorId, lastId]);

  useEffect(() => {
    if (step !== "chat") return;
    const interval = setInterval(poll, 2000);
    return () => clearInterval(interval);
  }, [poll, step]);

  const handleStartChat = () => {
    if (!name.trim()) return;
    setStep("chat");
    setMessages([{
      id: 0,
      message: `Welcome ${name.trim()}! An agent will be with you shortly. Please describe how we can help you.`,
      sender: "agent",
      agent_name: "System",
    }]);
  };

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || sending) return;
    setInput("");
    setSending(true);

    const optimistic: ChatMessage = {
      id: Date.now(),
      message: text,
      sender: "visitor",
    };
    setMessages((prev) => [...prev, optimistic]);

    try {
      const res = await fetch("/api/chat/send.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          visitor_id: visitorId,
          visitor_name: name.trim(),
          visitor_email: email.trim(),
          message: text,
          sender: "visitor",
        }),
      });
      const data = await res.json();
      if (data.success && data.id) {
        setLastId(data.id);
      }
    } catch {}

    setSending(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] animate-in fade-in zoom-in duration-200 origin-bottom-right">
          <div className="flex flex-col bg-card border border-border rounded-2xl shadow-2xl overflow-hidden" style={{ maxHeight: "min(600px, 80vh)" }}>
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
              <div className="flex items-center gap-2.5">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold leading-tight">Live Support</p>
                  <p className="text-[11px] opacity-80 leading-tight">We typically reply in minutes</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="flex items-center justify-center w-7 h-7 rounded-full hover:bg-white/20 transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            {step === "form" && (
              <div className="p-5 space-y-4">
                <p className="text-sm text-slate-600">Enter your details to start chatting with our support team.</p>
                <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name *" onKeyDown={(e) => { if (e.key === "Enter") handleStartChat(); }} />
                <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email (optional)" type="email" onKeyDown={(e) => { if (e.key === "Enter") handleStartChat(); }} />
                <Button onClick={handleStartChat} disabled={!name.trim()} className="w-full bg-gradient-to-r from-blue-500 to-blue-600">
                  Start Chat
                </Button>
              </div>
            )}

            {step === "chat" && (
              <>
                <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3" style={{ minHeight: 300 }}>
                  {messages.map((msg) => (
                    <div key={msg.id} className={cn("flex", msg.sender === "visitor" ? "justify-end" : "justify-start")}>
                      <div className={cn("max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed", msg.sender === "visitor" ? "bg-blue-500 text-white rounded-br-md" : "bg-slate-100 text-slate-800 rounded-bl-md")}>
                        {msg.sender === "agent" && msg.agent_name && msg.agent_name !== "System" && (
                          <p className="text-xs font-semibold text-blue-600 mb-1">{msg.agent_name}</p>
                        )}
                        <p className="whitespace-pre-wrap">{msg.message}</p>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>

                <div className="border-t border-border px-4 py-3">
                  <div className="flex items-center gap-2">
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Type your message..."
                      className="flex-1 h-10 bg-background border border-input rounded-xl px-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      disabled={sending}
                    />
                    <button
                      onClick={sendMessage}
                      disabled={sending || !input.trim()}
                      className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shrink-0"
                    >
                      {sending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-xl transition-all duration-200",
          open
            ? "bg-slate-400 rotate-90 scale-0 opacity-0 pointer-events-none"
            : "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:scale-105 active:scale-95"
        )}
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {open && (
        <div className="fixed inset-0 z-40 bg-black/20 md:bg-transparent" onClick={() => setOpen(false)} />
      )}
    </>
  );
}
