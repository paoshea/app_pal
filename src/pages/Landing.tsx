
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Box, Users, Zap, Shield, CodeIcon } from 'lucide-react';

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
              <Link to="/guest" className="text-gray-600 hover:text-gray-900">Try Demo</Link>
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
            Project Management<br />Made Simple
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Start managing your development projects in minutes. No credit card required.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/guest" className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 flex items-center">
              Try Guest Demo <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link to="/register" className="px-6 py-3 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 flex items-center">
              Create Account
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Start Instantly</h3>
              <p className="text-gray-600">Begin managing projects immediately with our guest access.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">10 Free Projects</h3>
              <p className="text-gray-600">Manage up to 10 projects with our guest account.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No Sign Up</h3>
              <p className="text-gray-600">Try all basic features without creating an account.</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to get started?</h2>
            <Link to="/guest" className="inline-flex items-center px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
              Try Guest Demo <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
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
                <Link to="/guest" className="text-sm text-gray-600 hover:text-gray-900 block">Guest Demo</Link>
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

export default Landing;
