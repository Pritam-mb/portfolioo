import React from "react";
import NeuralBackground from "@/components/ui/flow-field-background";
import { ArrowRight, Sparkles } from "lucide-react";

export default function NeuralHeroDemo() {
  return (
    // Container must have a defined height, or use h-screen
    <div className="relative w-full h-screen">
      <NeuralBackground 
        color="#818cf8" // Indigo-400
        trailOpacity={0.1} // Lower = longer trails
        speed={0.8}
      />
      
      {/* Example content overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white z-10">
          <h1 className="text-4xl font-bold mb-4 flex items-center gap-2">
            <Sparkles className="w-8 h-8" />
            Neural Background Demo
          </h1>
          <p className="text-lg mb-6">Interactive particle flow field background</p>
          <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg flex items-center gap-2 mx-auto transition-colors">
            Get Started
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}