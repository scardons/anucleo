import { useState, useRef, useEffect, type ReactNode } from "react";
import { MessageCircle, X, Send, Loader2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type Message = {
  role: "user" | "bot";
  text: string;
};

const quickActions = [
  "What services do you offer?",
  "How do I get a quote?",
  "What are your office hours?",
  "How do I file a claim?",
];

function renderBotMessage(text: string): ReactNode[] {
  const escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  const parts: ReactNode[] = [];
  let remaining = escaped;
  let key = 0;

  while (remaining.length > 0) {
    const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
    const linkMatch = remaining.match(/\[([^\]]+)\]\(([^)]+)\)/);
    const newlineMatch = remaining.match(/\n/);

    let earliest: { index: number; length: number; tag: string; content: string[] } | null = null;

    if (boldMatch && (!earliest || boldMatch.index! < earliest.index)) {
      earliest = { index: boldMatch.index!, length: boldMatch[0].length, tag: "bold", content: [boldMatch[1]] };
    }
    if (linkMatch && (!earliest || linkMatch.index! < earliest.index)) {
      earliest = { index: linkMatch.index!, length: linkMatch[0].length, tag: "link", content: [linkMatch[1], linkMatch[2]] };
    }
    if (newlineMatch && (!earliest || newlineMatch.index! < earliest.index)) {
      earliest = { index: newlineMatch.index!, length: newlineMatch[0].length, tag: "br", content: [] };
    }

    if (!earliest) {
      parts.push(<span key={key++}>{remaining}</span>);
      break;
    }

    if (earliest.index > 0) {
      parts.push(<span key={key++}>{remaining.slice(0, earliest.index)}</span>);
    }

    if (earliest.tag === "bold") {
      parts.push(<strong key={key++}>{earliest.content[0]}</strong>);
    } else if (earliest.tag === "link") {
      const [linkText, href] = earliest.content;
      const isInternal = href.startsWith("/");
      parts.push(
        <a
          key={key++}
          href={href}
          onClick={(e) => {
            if (isInternal) {
              e.preventDefault();
              window.location.href = href;
            }
          }}
          className="text-primary underline hover:text-primary/80 font-medium"
          target={isInternal ? undefined : "_blank"}
          rel={isInternal ? undefined : "noopener noreferrer"}
        >
          {linkText}
        </a>
      );
    } else if (earliest.tag === "br") {
      parts.push(<br key={key++} />);
    }

    remaining = remaining.slice(earliest.index + earliest.length);
  }

  return parts;
}

const INITIAL_MESSAGE: Message = {
  role: "bot",
  text: "Hi there! 👋 Welcome to Anucleo Insurance. I'm your virtual assistant. Ask me anything about our insurance services, quotes, or how we can help protect what matters most to you.",
};

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  const sendMessage = async (text: string) => {
    const userText = text.trim();
    if (!userText || loading) return;

    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userText }]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText }),
      });

      const data = await res.json();

      if (data.success) {
        setMessages((prev) => [...prev, { role: "bot", text: data.response }]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "bot", text: "Sorry, I couldn't process that. Please try again or call us at (973) 636-1104." },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "I'm having trouble connecting. Please try again or call us at (973) 636-1104." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] animate-in fade-in zoom-in duration-200 origin-bottom-right">
          <div className="flex flex-col bg-card border border-border rounded-2xl shadow-2xl overflow-hidden" style={{ maxHeight: "min(600px, 80vh)" }}>
            <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground">
              <div className="flex items-center gap-2.5">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold leading-tight">Anucleo Assistant</p>
                  <p className="text-[11px] opacity-80 leading-tight">Online</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="flex items-center justify-center w-7 h-7 rounded-full hover:bg-white/20 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3" style={{ minHeight: 0 }}>
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={cn("flex", msg.role === "user" ? "justify-end" : "justify-start")}
                >
                  <div
                    className={cn(
                      "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-md whitespace-pre-wrap"
                        : "bg-secondary text-secondary-foreground rounded-bl-md"
                    )}
                  >
                    {msg.role === "bot" ? renderBotMessage(msg.text) : msg.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-secondary text-secondary-foreground rounded-2xl rounded-bl-md px-4 py-3">
                    <Loader2 className="w-4 h-4 animate-spin" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {messages.length <= 2 && (
              <div className="px-4 pb-3 flex flex-wrap gap-2">
                {quickActions.map((action) => (
                  <button
                    key={action}
                    onClick={() => sendMessage(action)}
                    className="text-xs bg-secondary hover:bg-secondary/80 text-secondary-foreground px-3 py-1.5 rounded-full transition-colors border border-border"
                  >
                    {action}
                  </button>
                ))}
              </div>
            )}

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
                  disabled={loading}
                />
                <button
                  onClick={() => sendMessage(input)}
                  disabled={loading || !input.trim()}
                  className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shrink-0"
                >
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-xl transition-all duration-200",
          open
            ? "bg-muted-foreground/60 rotate-90 scale-0 opacity-0 pointer-events-none"
            : "bg-gradient-to-r from-primary to-primary-glow text-primary-foreground hover:scale-105 active:scale-95"
        )}
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/20 md:bg-transparent"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
