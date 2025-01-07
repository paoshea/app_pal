
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';

export function ProjectDetails() {
  const { id } = useParams();
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Setup project', priority: 'high', status: 'completed' },
    { id: 2, name: 'Design database', priority: 'medium', status: 'in-progress' }
  ]);

  const addTask = () => {
    const newTask = {
      id: tasks.length + 1,
      name: 'New Task',
      priority: 'medium',
      status: 'pending'
    };
    setTasks([...tasks, newTask]);
    toast.success('Task added successfully!');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Project Name</h1>
        <p className="text-gray-600">Project description goes here</p>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Tasks</h2>
          <button
            onClick={addTask}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Add Task
          </button>
        </div>

        <div className="space-y-4">
          {tasks.map(task => (
            <div key={task.id} className="flex items-center justify-between p-4 border rounded-lg">
              <span>{task.name}</span>
              <div className="flex space-x-2">
                <span className={`px-2 py-1 rounded-full text-sm ${
                  task.priority === 'high' ? 'bg-red-100 text-red-800' :
                  task.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {task.priority}
                </span>
                <span className="px-2 py-1 bg-gray-100 rounded-full text-sm">
                  {task.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
