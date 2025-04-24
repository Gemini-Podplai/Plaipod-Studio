
import React from "react";

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
  const settings = [
    { id: "stream-output", label: "Streaming output", checked: true },
    { id: "code-animation", label: "Code animation", checked: false },
    { id: "function-calling", label: "Function calling", checked: true },
    { id: "complete-search", label: "Complete with Google search", checked: false },
    { id: "advanced-settings", label: "Advanced settings", checked: false },
  ];

  return (
    <div className="w-72 bg-gray-950 border-l border-gray-800 overflow-y-auto">
      <div className="p-4 border-b border-gray-800">
        <h3 className="text-sm font-medium mb-4">Model</h3>
        <div className="mb-4">
          <select
            value={currentModel}
            onChange={(e) => setCurrentModel(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Cosmos Pro 1.5</option>
            <option>GPT-4</option>
            <option>Claude 3</option>
          </select>
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
          <span className="text-sm">OpenAI API</span>
          <span className="text-xs text-green-500">Connected</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm">Claude API</span>
          <span className="text-xs text-gray-500">Not set</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm">Together API key</span>
          <span className="text-xs text-gray-500">Not set</span>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
