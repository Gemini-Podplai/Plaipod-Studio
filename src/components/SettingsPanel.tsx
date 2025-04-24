
import React, { useState } from "react";
import ModelSelector from "@/components/settings/ModelSelector";
import APIConfiguration from "@/components/settings/APIConfiguration";
import SettingsToggle from "@/components/settings/SettingsToggle";
import APIStatus from "@/components/settings/APIStatus";

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

  const apiConnections = [
    { provider: "Google AI (Gemini)", status: "not_set" },
    { provider: "Google Vertex AI", status: "not_set" },
    { provider: "Azure OpenAI", status: "not_set" },
    { provider: "AWS Bedrock", status: "not_set" },
    { provider: "OpenAI API", status: "connected" },
  ] as const;

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

      <APIStatus connections={apiConnections} />
    </div>
  );
};

export default SettingsPanel;
