import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { Project } from '../../types';
import { Star, GripVertical } from 'lucide-react';

interface ProjectPriorityManagerProps {
  projects: Project[];
  onPriorityChange: (projectId: string, newPriority: number) => void;
}

export default function ProjectPriorityManager({ projects, onPriorityChange }: ProjectPriorityManagerProps) {
  const [items, setItems] = useState(projects.sort((a, b) => b.priority - a.priority));

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const newItems = Array.from(items);
    const [reorderedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, reorderedItem);

    // Update priorities based on new positions
    const updatedItems = newItems.map((item, index) => {
      const newPriority = newItems.length - index;
      onPriorityChange(item.id, newPriority);
      return { ...item, priority: newPriority };
    });

    setItems(updatedItems);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="projects">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="space-y-2"
          >
            {items.map((project, index) => (
              <Draggable key={project.id} draggableId={project.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    className="flex items-center bg-white p-4 rounded-lg border border-gray-200"
                  >
                    <div {...provided.dragHandleProps} className="mr-3">
                      <GripVertical className="w-5 h-5 text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{project.name}</h3>
                      <p className="text-sm text-gray-500">{project.description}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className={`w-5 h-5 ${project.priority > 2 ? 'text-yellow-400' : 'text-gray-300'}`} />
                      <span className="text-sm font-medium">Priority {project.priority}</span>
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}