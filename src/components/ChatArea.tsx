
import React from "react";
import { Message } from "@/types/chat";

interface ChatAreaProps {
  messages: Message[];
  inputValue: string;
  setInputValue: (value: string) => void;
  handleSendMessage: (e: React.FormEvent) => void;
  messagesEndRef: React.RefObject<HTMLDivElement>;
}

const ChatArea = ({
  messages,
  inputValue,
  setInputValue,
  handleSendMessage,
  messagesEndRef,
}: ChatAreaProps) => {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Messages container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[90%] rounded-lg p-4 ${
                message.role === "user"
                  ? "bg-blue-600 text-white"
                  : message.role === "system"
                  ? "bg-gray-800 text-white"
                  : "bg-gray-800 text-white"
              }`}
            >
              {message.role === "assistant" && (
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center mr-2">
                    <span className="text-xs">AI</span>
                  </div>
                </div>
              )}
              
              {message.role === "user" && (
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mr-2">
                    <span className="text-xs">U</span>
                  </div>
                </div>
              )}
              
              <div>
                {message.content}
                {message.subContent && (
                  <div className="text-gray-400 mt-2 text-sm">
                    {message.subContent}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div className="border-t border-gray-800 p-4">
        <form onSubmit={handleSendMessage} className="relative">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type something to chat (use /prompt gallery)"
            className="w-full p-4 pl-4 pr-12 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-600"
          >
            →
          </button>
          
          <div className="flex justify-between text-xs text-gray-500 mt-2 px-2">
            <div>Use arrows to ↑↓ through prompt gallery</div>
            <div>Last drawn in 275ms</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatArea;
