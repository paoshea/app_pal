
import React, { useState } from 'react';
import { toast } from 'sonner';

interface ProjectIdea {
  id: string;
  title: string;
  description: string;
  createdAt: string;
}

export default function ProjectIdeas() {
  const [ideas, setIdeas] = useState<ProjectIdea[]>(() => {
    const saved = localStorage.getItem('projectIdeas');
    return saved ? JSON.parse(saved) : [];
  });
  const [newIdea, setNewIdea] = useState({ title: '', description: '' });

  const saveIdea = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newIdea.title || !newIdea.description) {
      toast.error('Please fill in all fields');
      return;
    }
    
    const idea: ProjectIdea = {
      id: Date.now().toString(),
      title: newIdea.title,
      description: newIdea.description,
      createdAt: new Date().toISOString()
    };
    
    const updatedIdeas = [...ideas, idea];
    setIdeas(updatedIdeas);
    localStorage.setItem('projectIdeas', JSON.stringify(updatedIdeas));
    setNewIdea({ title: '', description: '' });
    toast.success('Idea saved successfully!');
  };

  const deleteIdea = (id: string) => {
    const updatedIdeas = ideas.filter(idea => idea.id !== id);
    setIdeas(updatedIdeas);
    localStorage.setItem('projectIdeas', JSON.stringify(updatedIdeas));
    toast.success('Idea deleted');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Project Ideas</h1>
      
      <form onSubmit={saveIdea} className="mb-8 bg-white p-6 rounded-lg shadow-sm">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              value={newIdea.title}
              onChange={(e) => setNewIdea({...newIdea, title: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              rows={3}
              value={newIdea.description}
              onChange={(e) => setNewIdea({...newIdea, description: e.target.value})}
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Save Idea
          </button>
        </div>
      </form>

      <div className="space-y-4">
        {ideas.map((idea) => (
          <div key={idea.id} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">{idea.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{idea.description}</p>
                <p className="text-xs text-gray-400 mt-2">
                  {new Date(idea.createdAt).toLocaleDateString()}
                </p>
              </div>
              <button
                onClick={() => deleteIdea(idea.id)}
                className="text-red-600 hover:text-red-800"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
