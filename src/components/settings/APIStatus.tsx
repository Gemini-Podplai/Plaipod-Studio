
import React from "react";
import { WifiOff, Check, AlertTriangle } from "lucide-react";

interface APIConnectionStatus {
  provider: string;
  status: "connected" | "not_set" | "error";
}

interface APIStatusProps {
  connections: APIConnectionStatus[];
}

const APIStatus = ({ connections }: APIStatusProps) => {
  const getStatusColor = (status: APIConnectionStatus["status"]) => {
    switch (status) {
      case "connected":
        return "text-green-500";
      case "error":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  const getStatusIcon = (status: APIConnectionStatus["status"]) => {
    switch (status) {
      case "connected":
        return <Check className="h-4 w-4" />;
      case "error":
        return <AlertTriangle className="h-4 w-4" />;
      default:
        return <WifiOff className="h-4 w-4" />;
    }
  };

  const getStatusText = (status: APIConnectionStatus["status"]) => {
    switch (status) {
      case "connected":
        return "Connected";
      case "error":
        return "Error";
      default:
        return "Not set";
    }
  };

  return (
    <div className="p-4 border-t border-gray-800">
      <h3 className="text-sm font-medium mb-4">API Status</h3>
      {connections.map((connection) => (
        <div key={connection.provider} className="flex justify-between items-center mb-2">
          <span className="text-sm">{connection.provider}</span>
          <div className="flex items-center gap-2">
            <span className={`text-xs ${getStatusColor(connection.status)}`}>
              {getStatusText(connection.status)}
            </span>
            <span className={getStatusColor(connection.status)}>
              {getStatusIcon(connection.status)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default APIStatus;
