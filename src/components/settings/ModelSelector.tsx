
import React from "react";
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

interface ModelSelectorProps {
  currentModel: string;
  setCurrentModel: (model: string) => void;
  temperature: number;
  setTemperature: (temp: number) => void;
}

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

const ModelSelector = ({ currentModel, setCurrentModel, temperature, setTemperature }: ModelSelectorProps) => {
  return (
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
    </div>
  );
};

export default ModelSelector;

