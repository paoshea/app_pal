import React from 'react';
import { Check, X } from 'lucide-react';

const features = [
  { name: 'Create Projects', guest: true, power: true },
  { name: 'Basic Project Management', guest: true, power: true },
  { name: 'Project Documentation', guest: true, power: true },
  { name: 'Advanced Priority Management', guest: false, power: true },
  { name: 'Team Collaboration', guest: false, power: true },
  { name: 'Tech Stack Analytics', guest: false, power: true },
  { name: 'Custom Fields', guest: false, power: true },
  { name: 'Unlimited Projects', guest: false, power: true },
];

export default function FeatureComparison() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900">Feature Comparison</h2>
      </div>
      
      <div className="divide-y divide-gray-200">
        {features.map((feature) => (
          <div key={feature.name} className="grid grid-cols-3 px-6 py-4">
            <div className="text-sm font-medium text-gray-900">{feature.name}</div>
            <div className="text-center">
              {feature.guest ? (
                <Check className="w-5 h-5 text-green-500 mx-auto" />
              ) : (
                <X className="w-5 h-5 text-gray-300 mx-auto" />
              )}
            </div>
            <div className="text-center">
              <Check className="w-5 h-5 text-green-500 mx-auto" />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 px-6 py-4 bg-gray-50 border-t border-gray-200">
        <div className="text-sm font-medium text-gray-900">Plan Type</div>
        <div className="text-center text-sm font-medium text-gray-900">Guest</div>
        <div className="text-center text-sm font-medium text-blue-600">Power User</div>
      </div>
    </div>
  );
}