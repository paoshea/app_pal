
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Link to="/" className="text-blue-600 hover:text-blue-700">← Back to Home</Link>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Story</h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              Software pioneer and visionary Phil O'Shea founded App_Pal to raise the level of innovation for Developers. With over two decades of experience in software development, Phil recognized the need for a more intuitive and powerful project management tool.
            </p>
            <div className="mt-8">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Phil O'Shea" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Phil O'Shea</h4>
                  <p className="text-gray-600">Founder & CEO</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-500 mb-6">
              We're on a mission to empower developers with tools that enhance productivity and foster innovation. Our platform is built by developers, for developers.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Founded</h4>
                <p className="text-gray-600">2021</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Team</h4>
                <p className="text-gray-600">50+ members</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Users</h4>
                <p className="text-gray-600">10,000+</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Countries</h4>
                <p className="text-gray-600">25+</p>
              </div>
            </div>
            <div className="mt-6">
              {useAuthStore.getState().isAuthenticated ? (
                <Link to="/dashboard" className="text-blue-600 hover:text-blue-700">
                  Go to Dashboard →
                </Link>
              ) : (
                <Link to="/guest/dashboard" className="text-blue-600 hover:text-blue-700">
                  Go to Guest Dashboard →
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
