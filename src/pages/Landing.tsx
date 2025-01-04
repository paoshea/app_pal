import React from 'react';
import { ArrowRight, Box, Users, Zap, Shield } from 'lucide-react';

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <nav className="border-b bg-white/50 backdrop-blur-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Box className="w-8 h-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold">App_Pal</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900">Sign in</button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <div className="pt-24 pb-16 text-center px-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Organize Your Projects,<br />Empower Your Team
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            App_Pal helps development teams document, track, and manage their applications
            with powerful collaboration tools and integrated documentation.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 flex items-center">
              Start Free Trial <ArrowRight className="ml-2 w-4 h-4" />
            </button>
            <button className="px-6 py-3 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Setup</h3>
              <p className="text-gray-600">Get started in minutes with our interactive project templates and guided setup.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
              <p className="text-gray-600">Work together seamlessly with role-based access and real-time updates.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Enterprise Ready</h3>
              <p className="text-gray-600">Built for scale with multi-tenant architecture and advanced security features.</p>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Trusted by Development Teams</h2>
              <div className="flex justify-center space-x-12 opacity-50">
                <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=48&h=48&fit=crop&auto=format" alt="Company 1" className="h-8" />
                <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=48&h=48&fit=crop&auto=format" alt="Company 2" className="h-8" />
                <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=48&h=48&fit=crop&auto=format" alt="Company 3" className="h-8" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}