import React from 'react';
import GuestProjectList from '../components/guest/GuestProjectList';
import CreateGuestProject from '../components/guest/CreateGuestProject';
import OnboardingTour from '../components/OnboardingTour';

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Your Projects</h2>
          <p className="mt-1 text-sm text-gray-500">
            Manage and organize your projects efficiently
          </p>
        </div>
        <CreateGuestProject />
      </div>
      
      <GuestProjectList />
      <OnboardingTour />
    </div>
  );
}