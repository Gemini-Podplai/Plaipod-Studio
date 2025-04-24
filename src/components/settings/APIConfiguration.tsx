
import React from "react";
import { Input } from "@/components/ui/input";

interface APIConfigurationProps {
  showApiConfig: boolean;
  setShowApiConfig: (show: boolean) => void;
}

const APIConfiguration = ({ showApiConfig, setShowApiConfig }: APIConfigurationProps) => {
  return (
    <div className="p-4 border-b border-gray-800">
      <button 
        className="text-sm text-blue-500 hover:text-blue-400 transition-colors"
        onClick={() => setShowApiConfig(!showApiConfig)}
      >
        {showApiConfig ? "Hide API Configuration" : "Configure API Keys"}
      </button>

      {showApiConfig && (
        <div className="mt-4 space-y-3">
          <div className="space-y-1">
            <label className="text-xs text-gray-400">Google AI API Key</label>
            <Input 
              type="password"
              placeholder="Enter Gemini API key" 
              className="w-full bg-gray-800 border border-gray-700 rounded"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs text-gray-400">Google Vertex AI Key</label>
            <Input 
              type="password" 
              placeholder="For Claude/Anthropic models"
              className="w-full bg-gray-800 border border-gray-700 rounded"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs text-gray-400">Azure OpenAI Endpoint</label>
            <Input 
              type="text"
              placeholder="Azure endpoint URL" 
              className="w-full bg-gray-800 border border-gray-700 rounded"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs text-gray-400">Azure API Key</label>
            <Input 
              type="password"
              placeholder="Azure OpenAI API key" 
              className="w-full bg-gray-800 border border-gray-700 rounded"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs text-gray-400">AWS Access Key ID</label>
            <Input 
              type="text"
              placeholder="AWS Access Key" 
              className="w-full bg-gray-800 border border-gray-700 rounded"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs text-gray-400">AWS Secret Access Key</label>
            <Input 
              type="password"
              placeholder="AWS Secret Key" 
              className="w-full bg-gray-800 border border-gray-700 rounded"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs text-gray-400">AWS Region</label>
            <Input 
              type="text"
              placeholder="e.g. us-east-1" 
              className="w-full bg-gray-800 border border-gray-700 rounded"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default APIConfiguration;

