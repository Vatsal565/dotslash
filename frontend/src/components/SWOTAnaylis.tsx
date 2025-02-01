"use client"
import { useState } from "react"

interface SWOTData {
  strengths: string[]
  weaknesses: string[]
  opportunities: string[]
  threats: string[]
  centralText: string
}

export default function SWOTAnalysis() {
  const [data, setData] = useState<SWOTData>({
    strengths: ["Strong market position", "Skilled workforce", "Quality products"],
    weaknesses: ["Limited resources", "High production costs", "Small market reach"],
    opportunities: ["Emerging markets", "New technologies", "Strategic partnerships"],
    threats: ["Increasing competition", "Economic uncertainty", "Changing regulations"],
    centralText: "SWOT Analysis",
  })

  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden bg-white shadow-lg">
        {/* Grid Layout */}
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1">
          {/* Strengths */}
          <div className="bg-orange-50 p-6">
            <h3 className="text-xl font-bold mb-3 text-orange-700">Strengths</h3>
            <ul className="list-disc list-inside space-y-2 text-orange-900">
              {data.strengths.map((strength, index) => (
                <li key={index}>{strength}</li>
              ))}
            </ul>
          </div>

          {/* Weaknesses */}
          <div className="bg-purple-50 p-6">
            <h3 className="text-xl font-bold mb-3 text-purple-700">Weaknesses</h3>
            <ul className="list-disc list-inside space-y-2 text-purple-900">
              {data.weaknesses.map((weakness, index) => (
                <li key={index}>{weakness}</li>
              ))}
            </ul>
          </div>

          {/* Opportunities */}
          <div className="bg-green-50 p-6">
            <h3 className="text-xl font-bold mb-3 text-green-700">Opportunities</h3>
            <ul className="list-disc list-inside space-y-2 text-green-900">
              {data.opportunities.map((opportunity, index) => (
                <li key={index}>{opportunity}</li>
              ))}
            </ul>
          </div>

          {/* Threats */}
          <div className="bg-blue-50 p-6">
            <h3 className="text-xl font-bold mb-3 text-blue-700">Threats</h3>
            <ul className="list-disc list-inside space-y-2 text-blue-900">
              {data.threats.map((threat, index) => (
                <li key={index}>{threat}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Central Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 w-48 h-48 flex items-center justify-center">
          <h2 className="text-2xl font-bold text-gray-800 text-center">{data.centralText}</h2>
        </div>
      </div>
    </div>
  )
}

