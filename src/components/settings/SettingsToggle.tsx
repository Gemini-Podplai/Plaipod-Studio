
import React from "react";

interface Setting {
  id: string;
  label: string;
  checked: boolean;
}

interface SettingsToggleProps {
  settings: Setting[];
}

const SettingsToggle = ({ settings }: SettingsToggleProps) => {
  return (
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
  );
};

export default SettingsToggle;

