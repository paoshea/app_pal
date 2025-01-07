import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Workflow,
  Users, 
  BarChart, 
  GitBranch,
  ArrowRight,
  Shield
} from 'lucide-react';
import FeatureCard from '../components/features/FeatureCard';
import FeatureComparison from '../components/features/FeatureComparison';
import DemoProjectCard from '../components/features/DemoProjectCard';

function Features() {
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
      <div className="flex justify-between items-center mb-16">
        <Link to="/" className="text-blue-600 hover:text-blue-700">← Back to Home</Link>
        <div className="text-center flex-1">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Unlock the Full Potential of App_Pal
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience powerful project management features and take your development workflow to the next level
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {powerFeatures.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Experience the Difference</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <DemoProjectCard type="guest" />
          <DemoProjectCard type="power" />
        </div>
      </div>

      <FeatureComparison />

      <div className="text-center mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to Upgrade?
        </h2>
        <p className="text-gray-600 mb-8">
          Join thousands of developers who have already enhanced their workflow
        </p>
        <div className="flex space-x-4 justify-center">
          <Link to="/register" className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 flex items-center font-medium">
            Start Free Trial <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>

      <footer className="bg-gray-50 border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Product</h3>
              <div className="mt-4 space-y-4">
                <Link to="/features" className="text-sm text-gray-600 hover:text-gray-900 block">Features</Link>
                <Link to="/dashboard" className="text-sm text-gray-600 hover:text-gray-900 block">Dashboard</Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Company</h3>
              <div className="mt-4 space-y-4">
                <Link to="/about" className="text-sm text-gray-600 hover:text-gray-900 block">About</Link>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-gray-900 block">Contact</Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8">
            <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} App_Pal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Features;