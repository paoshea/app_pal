import React from 'react';
import { 
  Zap, 
  Users, 
  GitBranch, 
  BarChart, 
  Calendar,
  Lock,
  Sparkles,
  Workflow
} from 'lucide-react';
import FeatureCard from '../components/features/FeatureCard';
import FeatureComparison from '../components/features/FeatureComparison';
import DemoProjectCard from '../components/features/DemoProjectCard';

export default function Features() {
  const powerFeatures = [
    {
      title: "Advanced Project Management",
      description: "Organize projects with custom fields, advanced sorting, and priority management",
      icon: Workflow,
      color: "blue"
    },
    {
      title: "Team Collaboration",
      description: "Work together seamlessly with role-based access and real-time updates",
      icon: Users,
      color: "green"
    },
    {
      title: "Priority Management",
      description: "Advanced priority ranking system with drag-and-drop reordering",
      icon: BarChart,
      color: "yellow"
    },
    {
      title: "Tech Stack Analytics",
      description: "Visualize and track technology usage across your projects",
      icon: GitBranch,
      color: "purple"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Unlock the Full Potential of App_Pal
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Experience powerful project management features and take your development workflow to the next level
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {powerFeatures.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>

      {/* Interactive Demo */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Experience the Difference</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <DemoProjectCard type="guest" />
          <DemoProjectCard type="power" />
        </div>
      </div>

      {/* Feature Comparison */}
      <FeatureComparison />

      {/* CTA Section */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to Upgrade?
        </h2>
        <p className="text-gray-600 mb-8">
          Join thousands of developers who have already enhanced their workflow
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
          Upgrade Now
        </button>
      </div>
    </div>
  );
}