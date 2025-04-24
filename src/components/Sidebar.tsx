
import React from "react";

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Sidebar = ({ activeSection, setActiveSection }: SidebarProps) => {
  const sections = [
    { id: "Chat", icon: "💬" },
    { id: "System", icon: "🖥️" },
    { id: "Starter Apps", icon: "🚀" },
    { id: "History", icon: "📜" }
  ];
  
  const recentSessions = [
    "Chat Prompt",
    "Image Generation",
    "Code Assistant",
    "Data Analysis Helper"
  ];
  
  return (
    <div className="w-64 bg-gray-950 flex flex-col overflow-y-auto">
      {/* Main navigation */}
      <div className="p-4">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`w-full text-left mb-2 p-2 rounded-md flex items-center ${
              activeSection === section.id
                ? "bg-gray-800"
                : "hover:bg-gray-900"
            }`}
            onClick={() => setActiveSection(section.id)}
          >
            <span className="mr-2">{section.icon}</span>
            <span>{section.id}</span>
          </button>
        ))}
      </div>
      
      {/* Recent sessions */}
      <div className="mt-4 p-4">
        <h3 className="text-xs uppercase text-gray-500 mb-2">Recent Sessions</h3>
        {recentSessions.map((session) => (
          <div
            key={session}
            className="flex items-center mb-2 p-2 rounded-md hover:bg-gray-900 cursor-pointer"
          >
            <span className="mr-2 text-xs">▶</span>
            <span className="text-sm">{session}</span>
          </div>
        ))}
      </div>
      
      {/* Account section at bottom */}
      <div className="mt-auto p-4 border-t border-gray-800">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
            U
          </div>
          <div className="ml-2">
            <div className="text-sm font-medium">User</div>
            <div className="text-xs text-gray-400">Free Plan</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
