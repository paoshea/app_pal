import React, { useState } from 'react';
import { X } from 'lucide-react';

interface Step {
  title: string;
  description: string;
  target: string;
}

const TOUR_STEPS: Step[] = [
  {
    title: 'Welcome to App_Pal',
    description: 'Let\'s take a quick tour to help you get started with managing your projects.',
    target: 'dashboard'
  },
  {
    title: 'Create Your First Project',
    description: 'Click here to create a new project and start organizing your work.',
    target: 'new-project'
  },
  {
    title: 'Project Priority',
    description: 'Set project priorities to keep your team focused on what matters most.',
    target: 'priority'
  }
];

export default function OnboardingTour() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleNext = () => {
    if (currentStep < TOUR_STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsVisible(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-white rounded-lg shadow-lg border border-gray-200 p-4">
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
      >
        <X className="w-4 h-4" />
      </button>
      
      <div className="mb-4">
        <h3 className="text-lg font-semibold">{TOUR_STEPS[currentStep].title}</h3>
        <p className="text-sm text-gray-600 mt-1">{TOUR_STEPS[currentStep].description}</p>
      </div>
      
      <div className="flex justify-between items-center">
        <div className="flex space-x-1">
          {TOUR_STEPS.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentStep ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
        
        <button
          onClick={handleNext}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          {currentStep === TOUR_STEPS.length - 1 ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
}