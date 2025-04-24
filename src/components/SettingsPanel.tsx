
import React, { useState } from "react";
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

interface SettingsPanelProps {
  currentModel: string;
  setCurrentModel: (model: string) => void;
  temperature: number;
  setTemperature: (temp: number) => void;
}

const SettingsPanel = ({
  currentModel,
  setCurrentModel,
  temperature,
  setTemperature,
}: SettingsPanelProps) => {
  const [showApiConfig, setShowApiConfig] = useState<boolean>(false);
  
  const settings = [
    { id: "stream-output", label: "Streaming output", checked: true },
    { id: "code-animation", label: "Code animation", checked: false },
    { id: "function-calling", label: "Function calling", checked: true },
    { id: "complete-search", label: "Complete with Google search", checked: false },
    { id: "advanced-settings", label: "Advanced settings", checked: false },
  ];

  const modelOptions = [
    {
      provider: "Google Vertex AI & Gemini",
      models: [
        "Gemini 2.5 Pro Preview",
        "Gemini 2.5 Flash Preview",
        "Gemini 2.0 Flash Live",
        "Gemini 2.0 Pro",
        "Gemini 2.0 Flash",
        "Gemini 2.0 Flash-Lite",
        "Veo 2.0",
        "Gemma 3 27B",
        "Gemini Embedding"
      ]
    },
    {
      provider: "Microsoft Azure OpenAI",
      models: [
        "GPT-4.1",
        "GPT-4.1 Nano",
        "GPT-4o",
        "GPT-4o Mini",
        "O4-Mini",
        "O3",
        "O3-Mini",
        "O1"
      ]
    },
    {
      provider: "Amazon Bedrock - Nova",
      models: [
        "Nova Premier",
        "Nova Pro",
        "Nova Lite",
        "Nova Micro",
        "Nova Canvas",
        "Nova Reel"
      ]
    },
    {
      provider: "Amazon Bedrock - Partners",
      models: [  
        "Claude 3",
        "Llama 4 Scout 17B",
        "Llama 4 Maverick 17B",
        "Mistral Large",
        "Jurassic-2 Ultra",
        "Jurassic-2 Mid",
        "Cohere Command",
        "Cohere Command Light",
        "Stability SDXL 1.0"
      ]
    }
  ];

  return (
    <div className="w-72 bg-gray-950 border-l border-gray-800 overflow-y-auto">
      <div className="p-4 border-b border-gray-800">
        <h3 className="text-sm font-medium mb-4">Model</h3>
        <div className="mb-4">
          <Select 
            value={currentModel} 
            onValueChange={setCurrentModel}
          >
            <SelectTrigger className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <SelectValue placeholder="Select a model" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border border-gray-700">
              {modelOptions.map((provider) => (
                <SelectGroup key={provider.provider}>
                  <SelectLabel className="text-gray-400">{provider.provider}</SelectLabel>
                  {provider.models.map((model) => (
                    <SelectItem key={model} value={model}>
                      {model}
                    </SelectItem>
                  ))}
                </SelectGroup>
              ))}
            </SelectContent>
          </Select>
        </div>

        <h3 className="text-sm font-medium mb-2">Temperature</h3>
        <div className="mb-4">
          <input
            type="range"
            min="0"
            max="2"
            step="0.1"
            value={temperature}
            onChange={(e) => setTemperature(parseFloat(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-400">
            <span>Precise</span>
            <span>Balanced</span>
            <span>Creative</span>
          </div>
        </div>

        <button 
          className="text-sm text-blue-500 hover:text-blue-400 transition-colors mt-2"
          onClick={() => setShowApiConfig(!showApiConfig)}
        >
          {showApiConfig ? "Hide API Configuration" : "Configure API Keys"}
        </button>

        {showApiConfig && (
          <div className="mt-4 space-y-3">
            <div className="space-y-1">
              <label className="text-xs text-gray-400">Google AI API Key</label>
              <input 
                type="password"
                placeholder="Enter Gemini API key" 
                className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-1.5 text-sm"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs text-gray-400">Google Vertex AI Key</label>
              <input 
                type="password" 
                placeholder="For Claude/Anthropic models"
                className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-1.5 text-sm"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs text-gray-400">Azure OpenAI Endpoint</label>
              <input 
                type="text"
                placeholder="Azure endpoint URL" 
                className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-1.5 text-sm"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs text-gray-400">Azure API Key</label>
              <input 
                type="password"
                placeholder="Azure OpenAI API key" 
                className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-1.5 text-sm"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs text-gray-400">AWS Access Key ID</label>
              <input 
                type="text"
                placeholder="AWS Access Key" 
                className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-1.5 text-sm"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs text-gray-400">AWS Secret Access Key</label>
              <input 
                type="password"
                placeholder="AWS Secret Key" 
                className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-1.5 text-sm"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs text-gray-400">AWS Region</label>
              <input 
                type="text"
                placeholder="e.g. us-east-1" 
                className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-1.5 text-sm"
              />
            </div>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-sm font-medium mb-4">Tools</h3>
        {settings.map((setting) => (
          <div key={setting.id} className="flex justify-between items-center mb-4">
            <label htmlFor={setting.id} className="text-sm">
              {setting.label}
            </label>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                id={setting.id}
                className="sr-only peer"
                defaultChecked={setting.checked}
              />
              <div className="w-9 h-5 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-gray-800">
        <h3 className="text-sm font-medium mb-4">API Keys</h3>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm">Google AI (Gemini)</span>
          <span className="text-xs text-gray-500">Not set</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm">Google Vertex AI</span>
          <span className="text-xs text-gray-500">Not set</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm">Azure OpenAI</span>
          <span className="text-xs text-gray-500">Not set</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm">AWS Bedrock</span>
          <span className="text-xs text-gray-500">Not set</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm">OpenAI API</span>
          <span className="text-xs text-green-500">Connected</span>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
