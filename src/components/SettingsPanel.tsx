
import React, { useState } from "react";
import ModelSelector from "@/components/settings/ModelSelector";
import APIConfiguration from "@/components/settings/APIConfiguration";
import SettingsToggle from "@/components/settings/SettingsToggle";

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

  return (
    <div className="w-72 bg-gray-950 border-l border-gray-800 overflow-y-auto">
      <ModelSelector
        currentModel={currentModel}
        setCurrentModel={setCurrentModel}
        temperature={temperature}
        setTemperature={setTemperature}
      />

      <APIConfiguration 
        showApiConfig={showApiConfig}
        setShowApiConfig={setShowApiConfig}
      />

      <SettingsToggle settings={settings} />

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

