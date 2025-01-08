
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Box, Users, Zap, Shield, GitBranch, BarChart } from 'lucide-react';

function Landing() {
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
              <Link to="/features" className="text-gray-600 hover:text-gray-900">Features</Link>
              <Link to="/app/guest-dashboard" className="text-gray-600 hover:text-gray-900">Try Demo</Link>
              <Link to="/signin" className="text-gray-600 hover:text-gray-900">Sign in</Link>
              <Link to="/register" className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <div className="pt-24 pb-16 text-center px-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Project Management<br />for Development Teams
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Streamline your development workflow with project tracking, tech stack management, and team collaboration tools.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/app/guest-dashboard" className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 flex items-center">
              Launch Guest Demo <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link to="/features" className="px-6 py-3 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 flex items-center">
              View Features
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <GitBranch className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Tech Stack Tracking</h3>
              <p className="text-gray-600">Track and manage technologies used across all your projects.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Priority Management</h3>
              <p className="text-gray-600">Advanced priority system to keep your projects organized.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
              <p className="text-gray-600">Built-in tools for seamless team coordination.</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Start Managing Projects Today</h2>
              <p className="text-xl text-gray-600">No credit card required. Try our guest demo instantly.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Zap className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Instant Access</h3>
                    <p className="text-gray-600">Get started immediately with our guest demo</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">No Sign Up Required</h3>
                    <p className="text-gray-600">Try core features without creating an account</p>
                  </div>
                </div>
              </div>
              <div className="text-center md:text-right">
                <Link to="/app/guest-dashboard" className="inline-flex items-center px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                  Launch Guest Demo <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Product</h3>
              <div className="mt-4 space-y-4">
                <Link to="/features" className="text-sm text-gray-600 hover:text-gray-900 block">Features</Link>
                <Link to="/app/guest-dashboard" className="text-sm text-gray-600 hover:text-gray-900 block">Guest Demo</Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Company</h3>
              <div className="mt-4 space-y-4">
                <Link to="/about" className="text-sm text-gray-600 hover:text-gray-900 block">About</Link>
                <Link to="/app/contact" className="text-sm text-gray-600 hover:text-gray-900 block">Contact</Link>
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

export default Landing;
