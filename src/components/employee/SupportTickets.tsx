import { useState, useEffect, useCallback, useRef } from "react";
import { MessageCircle, Send, Loader2, User, ChevronLeft, Mail, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

type Conversation = {
  visitor_id: string;
  visitor_name: string;
  visitor_email: string;
  last_message: string;
  last_time: string;
  unread: string;
};

type ChatMessage = {
  id: number;
  message: string;
  sender: "visitor" | "agent";
  agent_name?: string;
  visitor_name?: string;
};

interface SupportTicketsProps {
  onUnreadChange?: (count: number) => void;
}

export default function SupportTickets({ onUnreadChange }: SupportTicketsProps) {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [lastId, setLastId] = useState(0);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [loading, setLoading] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const agentName = localStorage.getItem("empName") || "Agent";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const fetchConversations = async () => {
    try {
      const res = await fetch("/api/chat/conversations.php");
      const data = await res.json();
      if (data.success) {
        setConversations(data.conversations);
        const total = data.conversations.reduce((sum: number, c: Conversation) => sum + parseInt(c.unread || '0'), 0);
        onUnreadChange?.(total);
      }
    } catch {}
    setLoading(false);
  };

  useEffect(() => {
    fetchConversations();
    const interval = setInterval(fetchConversations, 3000);
    return () => clearInterval(interval);
  }, []);

  const pollMessages = useCallback(async () => {
    if (!selectedId) return;
    try {
      const res = await fetch(`/api/chat/messages.php?visitor_id=${selectedId}&since=${lastId}`);
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
  }, [selectedId, lastId]);

  useEffect(() => {
    if (!selectedId) return;
    const interval = setInterval(pollMessages, 2000);
    return () => clearInterval(interval);
  }, [pollMessages, selectedId]);

  const selectConversation = async (visitorId: string) => {
    setSelectedId(visitorId);
    setMessages([]);
    setLastId(0);

    try {
      await fetch("/api/chat/read.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ visitor_id: visitorId }),
      });
    } catch {}

    try {
      const res = await fetch(`/api/chat/messages.php?visitor_id=${visitorId}&since=0`);
      const data = await res.json();
      if (data.success) {
        setMessages(data.messages.map((m: any) => ({
          id: m.id,
          message: m.message,
          sender: m.sender,
          agent_name: m.agent_name,
          visitor_name: m.visitor_name,
        })));
        if (data.messages.length > 0) {
          setLastId(data.messages[data.messages.length - 1].id);
        }
      }
    } catch {}

    fetchConversations();
  };

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || !selectedId || sending) return;
    setInput("");
    setSending(true);

    try {
      const res = await fetch("/api/chat/send.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          visitor_id: selectedId,
          message: text,
          sender: "agent",
          agent_name: agentName,
        }),
      });
      const data = await res.json();
      if (data.success && data.id) {
        setLastId(data.id);
        setMessages((prev) => [...prev, {
          id: data.id,
          message: text,
          sender: "agent",
          agent_name: agentName,
        }]);
      }
    } catch {
      toast({ title: "Error", description: "Failed to send message", variant: "destructive" });
    }
    setSending(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  if (loading) {
    return <div className="text-center py-12 text-slate-400">Loading conversations...</div>;
  }

  return (
    <div className="flex h-[600px] bg-white border border-slate-200 rounded-xl overflow-hidden">
      {/* Sidebar */}
      <div className={`w-72 border-r border-slate-200 flex flex-col ${selectedId ? "hidden md:flex" : "flex"}`}>
        <div className="p-4 border-b border-slate-200">
          <h3 className="font-semibold text-slate-900">Conversations</h3>
          <p className="text-xs text-slate-500 mt-1">{conversations.length} active</p>
        </div>
        <div className="flex-1 overflow-y-auto">
          {conversations.length === 0 && (
            <div className="p-4 text-sm text-slate-400 text-center py-12">No conversations yet</div>
          )}
          {conversations.map((conv) => (
            <button
              key={conv.visitor_id}
              onClick={() => selectConversation(conv.visitor_id)}
              className={`w-full text-left px-4 py-3 border-b border-slate-100 hover:bg-slate-50 transition-all ${selectedId === conv.visitor_id ? "bg-blue-50 border-l-2 border-l-blue-500" : ""}`}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-blue-700">
                    {conv.visitor_name ? conv.visitor_name.charAt(0).toUpperCase() : "?"}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-slate-900 truncate">{conv.visitor_name || "Anonymous"}</p>
                  <p className="text-xs text-slate-500 truncate">{conv.last_message}</p>
                </div>
                <div className="flex flex-col items-end gap-1 shrink-0">
                  <span className="text-[10px] text-slate-400">{formatTime(conv.last_time)}</span>
                  {parseInt(conv.unread) > 0 && (
                    <span className="bg-blue-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                      {conv.unread}
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className={`flex-1 flex flex-col ${!selectedId ? "hidden md:flex" : "flex"}`}>
        {!selectedId ? (
          <div className="flex-1 flex items-center justify-center text-slate-400">
            <div className="text-center">
              <MessageCircle className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p className="text-sm">Select a conversation to start replying</p>
            </div>
          </div>
        ) : (
          <>
            {/* Chat Header */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-200 bg-slate-50">
              <button onClick={() => setSelectedId(null)} className="md:hidden p-1 hover:bg-slate-200 rounded">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-xs font-bold text-blue-700">
                  {messages.find((m) => m.sender === "visitor")?.visitor_name?.charAt(0).toUpperCase() || "?"}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900">
                  {messages.find((m) => m.sender === "visitor")?.visitor_name || "Visitor"}
                </p>
                <p className="text-xs text-slate-500">
                  {messages.find((m) => m.sender === "visitor")?.visitor_email || ""}
                </p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === "agent" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${msg.sender === "agent" ? "bg-blue-500 text-white rounded-br-md" : "bg-slate-100 text-slate-800 rounded-bl-md"}`}>
                    {msg.sender === "visitor" && msg.visitor_name && (
                      <p className="text-xs font-semibold text-slate-500 mb-1">{msg.visitor_name}</p>
                    )}
                    {msg.sender === "agent" && msg.agent_name && (
                      <p className="text-xs font-semibold text-blue-100 mb-1">{msg.agent_name}</p>
                    )}
                    <p className="whitespace-pre-wrap">{msg.message}</p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-slate-200 px-4 py-3">
              <div className="flex items-center gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your reply..."
                  className="flex-1 h-10 bg-white border border-slate-300 rounded-xl px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
  );
}
