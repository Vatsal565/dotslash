"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  User,
  Bot,
  Star,
  Moon,
  Heart,
  Infinity,
  RefreshCw,
  WifiOff,
  Copy,
  Check,
} from "lucide-react";
import ReactMarkdown from "react-markdown";

// Interfaces and Types
interface Message {
  id: string;
  text: string;
  type: 'user' | 'response';
  timestamp: Date;
}

interface QuickAction {
  id: string;
  icon: React.ElementType;
  text: string;
}

interface MarkdownComponentProps {
  children: React.ReactNode;
  [key: string]: any;
}

interface MessageBubbleProps {
  message: Message;
}

interface QuickActionsProps {
  onSelect: (actionText: string) => void;
}

interface WebSocketMessage {
  type: 'requestId' | 'response' | 'error';
  requestId?: string;
  message?: string;
}

// Custom Markdown Components
const MarkdownComponents: Record<string, React.FC<MarkdownComponentProps>> = {
  p: ({ children, ...props }) => (
    <p className="text-gray-800 leading-relaxed" {...props}>{children}</p>
  ),
  h1: ({ children, ...props }) => (
    <h1 className="text-2xl font-semibold text-gray-800 my-3" {...props}>{children}</h1>
  ),
  h2: ({ children, ...props }) => (
    <h2 className="text-xl font-semibold text-gray-800 my-2" {...props}>{children}</h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="text-lg font-semibold text-gray-800 my-2" {...props}>{children}</h3>
  ),
  ul: ({ children, ...props }) => (
    <ul className="list-disc list-inside my-2 space-y-1" {...props}>{children}</ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="list-decimal list-inside my-2 space-y-1" {...props}>{children}</ol>
  ),
  li: ({ children, ...props }) => (
    <li className="text-gray-800" {...props}>{children}</li>
  ),
  code: ({ children, ...props }) => (
    <code className="bg-gray-100 rounded px-1 py-0.5 font-mono text-sm" {...props}>
      {children}
    </code>
  ),
  pre: ({ children, ...props }) => (
    <pre className="bg-gray-100 rounded-lg p-3 my-2 overflow-x-auto" {...props}>
      {children}
    </pre>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote className="border-l-4 border-gray-200 pl-4 my-2 italic" {...props}>
      {children}
    </blockquote>
  ),
};

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const isUser = message.type === 'user';

  const handleCopy = () => {
    navigator.clipboard.writeText(message.text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}
    >
      <div className={`flex gap-2 max-w-[80%] ${isUser ? "flex-row-reverse" : ""}`}>
        <div
          className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center
            ${isUser ? "bg-orange-500" : "bg-gray-900"}`}
        >
          {isUser ? (
            <User className="w-4 h-4 text-white" />
          ) : (
            <Bot className="w-4 h-4 text-white" />
          )}
        </div>

        <div
          className={`group relative p-3 rounded-2xl
          ${isUser ? "bg-orange-500 text-white" : "bg-gray-100"}`}
        >
          <div className="prose prose-sm max-w-none">
            <ReactMarkdown components={MarkdownComponents}>{message.text}</ReactMarkdown>
          </div>
          <div className="flex items-center justify-between gap-4 mt-2">
            <span className="text-xs opacity-60">
              {message.timestamp.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
            {!isUser && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCopy}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {isCopied ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4 opacity-60" />
                )}
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TypingIndicator: React.FC = () => (
  <div className="flex items-center gap-2 mb-4">
    <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center">
      <Bot className="w-4 h-4 text-white" />
    </div>
    <div className="px-4 py-2 rounded-2xl bg-gray-100">
      <div className="flex gap-1">
        {[0, 1, 2].map((dot) => (
          <motion.div
            key={dot}
            className="w-1.5 h-1.5 bg-gray-400 rounded-full"
            animate={{ y: [0, -3, 0] }}
            transition={{
              duration: 0.8,
              repeat: Infinity as unknown as number,
              delay: dot * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  </div>
);

const QuickActions: React.FC<QuickActionsProps> = ({ onSelect }) => {
  const actions: QuickAction[] = [
    { id: '1', icon: Star, text:  "Schedule Appointment" },
    { id: '2', icon: Moon, text:"Medication Reminder" },
    { id: '3', icon: Heart, text: "Symptom Checker" },
    { id: '4', icon: Infinity, text: "Find Doctor" },

  ];

  return (
    <div className="flex gap-2 overflow-x-auto py-2">
      {actions.map((action) => (
        <motion.button
          key={action.id}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect(action.text)}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full
            whitespace-nowrap hover:bg-gray-200 transition-colors"
        >
          <action.icon className="w-4 h-4" />
          <span className="text-sm">{action.text}</span>
        </motion.button>
      ))}
    </div>
  );
};

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [requestId, setRequestId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const welcomeMessageShownRef = useRef<boolean>(false);
  const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const reconnectAttemptsRef = useRef<number>(0);
  
  const MAX_RECONNECT_ATTEMPTS = 5;
  const RECONNECT_DELAY = 2000;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (!welcomeMessageShownRef.current) {
      setMessages([{
        id: '0',
        text: "Hi! I'm your AI assistant. How can I help you today?",
        type: 'response',
        timestamp: new Date()
      }]);
      welcomeMessageShownRef.current = true;
    }
  }, []);

  const connectWebSocket = useCallback(() => {
    if (reconnectAttemptsRef.current >= MAX_RECONNECT_ATTEMPTS) {
      setError("Maximum reconnection attempts reached. Please refresh the page.");
      return;
    }

    try {
      const wsConnection = new WebSocket(process.env.NEXT_PUBLIC_WEBSOCKET_URL || '');

      wsConnection.onopen = () => {
        setIsConnected(true);
        setError(null);
        reconnectAttemptsRef.current = 0;
      };

      wsConnection.onmessage = (event: MessageEvent) => {
        const data: WebSocketMessage = JSON.parse(event.data);
        
        if (data.type === 'requestId' && data.requestId) {
          setRequestId(data.requestId);
        } else if (data.type === 'response' && data.message) {
          setMessages(prev => [...prev, {
            id: Date.now().toString(),
            text: data.message || '',
            type: 'response',
            timestamp: new Date()
          }]);
          setIsLoading(false);
        } else if (data.type === 'error' && data.message) {
          setError(data.message);
          setIsLoading(false);
        }
      };

      wsConnection.onclose = () => {
        setIsConnected(false);
        const delay = RECONNECT_DELAY * Math.pow(2, reconnectAttemptsRef.current);
        reconnectTimeoutRef.current = setTimeout(() => {
          reconnectAttemptsRef.current++;
          connectWebSocket();
        }, delay);
      };

      wsConnection.onerror = () => {
        setError("Connection error. Attempting to reconnect...");
        setIsLoading(false);
        wsConnection.close();
      };

      setWs(wsConnection);
    } catch (err) {
      setError("Failed to establish WebSocket connection. Retrying...");
      const delay = RECONNECT_DELAY * Math.pow(2, reconnectAttemptsRef.current);
      reconnectTimeoutRef.current = setTimeout(() => {
        reconnectAttemptsRef.current++;
        connectWebSocket();
      }, delay);
    }
  }, []);

  useEffect(() => {
    connectWebSocket();
    return () => {
      if (ws) ws.close();
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current);
      }
    };
  }, [connectWebSocket]);

  const handleQuickAction = (action: string) => {
    setInputMessage(action);
    sendMessage();
  };

  const sendMessage = useCallback(async () => {
    if (!inputMessage.trim() || !requestId || isLoading || !isConnected) return;

    try {
      setIsLoading(true);
      setError(null);
      
      const newMessage: Message = {
        id: Date.now().toString(),
        text: inputMessage,
        type: 'user',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, newMessage]);
      
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL || '', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          input_value: inputMessage,
          requestId,
          userId: localStorage.getItem("user")
        }),
      });

      if (!response.ok) throw new Error("Failed to send message");
      setInputMessage("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred.");
      setIsLoading(false);
    }
  }, [inputMessage, requestId, isLoading, isConnected]);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="space-y-4">
        Connection Status
        {!isConnected && (
          <div className="bg-red-50 p-4 rounded-2xl">
            <div className="flex items-start gap-3">
              <WifiOff className="w-5 h-5 text-red-500 mt-0.5" />
              <div>
                <p className="text-sm text-red-700">
                  Connection lost. {reconnectAttemptsRef.current < MAX_RECONNECT_ATTEMPTS
                    ? "Attempting to reconnect..."
                    : "Please refresh the page to try again."}
                </p>
                {reconnectAttemptsRef.current < MAX_RECONNECT_ATTEMPTS && (
                  <p className="text-xs text-red-500 mt-1">
                    Attempt {reconnectAttemptsRef.current + 1} of {MAX_RECONNECT_ATTEMPTS}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Main Chat Container */}
        <div className="bg-white rounded-2xl shadow-lg">
          {/* Chat Header */}
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="font-semibold">AI Assistant</h2>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Online
                    </span>
                  </div>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05, rotate: 180 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setMessages([messages[0]])}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <RefreshCw className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="h-[500px] flex flex-col">
            <div className="flex-1 overflow-y-auto p-4">
              <AnimatePresence>
                {messages.map((message) => (
                  <MessageBubble key={message.id} message={message} />
                ))}
              </AnimatePresence>
              {isLoading && <TypingIndicator />}
              {error && (
                <div className="mb-4 p-4 text-sm text-red-600 bg-red-50 rounded-xl">
                  {error}
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <div className="p-4 border-t">
              <QuickActions onSelect={handleQuickAction} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t bg-white">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                    setInputMessage(e.target.value)
                  }
                  onKeyPress={(e: React.KeyboardEvent) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      sendMessage();
                    }
                  }}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 ring-orange-500
                    disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isLoading || !isConnected}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => sendMessage()}
                  disabled={isLoading || !inputMessage.trim() || !isConnected}
                  className="px-6 py-2 bg-orange-500 text-white rounded-full
                    flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed
                    hover:bg-orange-600 transition-colors"
                >
                  <span className="hidden md:inline">Send</span>
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Environment variables type declarations
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_WEBSOCKET_URL: string;
      NEXT_PUBLIC_API_URL: string;
    }
  }
}

export default ChatPage;