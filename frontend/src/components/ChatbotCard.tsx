'use client'
import React, { useState } from 'react';
import { Scale, BrainCircuit, Building2, LineChart } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface Agent {
  title: string;
  subtitle: string;
  icon: React.ElementType;
  iconColor: string;
}

interface AgentCardProps extends Agent {
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const agents: Agent[] = [
  { title: 'Legal', subtitle: 'Agent', icon: Scale, iconColor: 'text-red-500' },
  { title: 'AI', subtitle: 'Agent', icon: BrainCircuit, iconColor: 'text-blue-500' },
  { title: 'Business', subtitle: 'Agent', icon: Building2, iconColor: 'text-green-500' },
  { title: 'Analytics', subtitle: 'Agent', icon: LineChart, iconColor: 'text-purple-500' }
];

const AgentCard: React.FC<AgentCardProps> = ({ 
  title, 
  subtitle, 
  icon: Icon, 
  iconColor,
  isHovered,
  onMouseEnter,
  onMouseLeave
}) => {
  return (
    <div
      className="transform transition-all duration-300 ease-out"
      style={{ 
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Card className="w-72 h-[400px] bg-level-1 rounded-xl p-6 text-white hover:shadow-2xl transition-shadow">
        <div className="bg-neutral-900 rounded-xl p-4 mb-4 inline-block">
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>

        <div className="space-y-1">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-xl font-bold">{subtitle}</p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-2">
            <span className="text-amber-500 font-bold">M</span>
            <span className="text-gray-400">MISTRAL</span>
          </div>
          
          <div className="flex space-x-2">
            <button className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                <line x1="12" y1="19" x2="12" y2="23"/>
                <line x1="8" y1="23" x2="16" y2="23"/>
              </svg>
            </button>
            <button className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
                <polyline points="16 6 12 2 8 6"/>
                <line x1="12" y1="2" x2="12" y2="15"/>
              </svg>
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

const AgentRow: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full px-8">
      <div className="flex justify-between items-center max-w-7xl mx-auto gap-6">
        {agents.map((agent, index) => (
          <AgentCard
            key={index}
            {...agent}
            isHovered={hoveredIndex === index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          />
        ))}
      </div>
    </div>
  );
};

export default AgentRow;