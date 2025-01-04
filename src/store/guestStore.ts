import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Project } from '../types';

interface GuestStore {
  projects: Project[];
  projectCount: number;
  maxProjects: number;
  addProject: (project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateProject: (id: string, project: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  canAddMoreProjects: () => boolean;
}

export const useGuestStore = create<GuestStore>()(
  persist(
    (set, get) => ({
      projects: [],
      projectCount: 0,
      maxProjects: 10,

      addProject: (projectData) => {
        if (!get().canAddMoreProjects()) return;

        const project: Project = {
          id: crypto.randomUUID(),
          ...projectData,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };

        set((state) => ({
          projects: [...state.projects, project],
          projectCount: state.projectCount + 1,
        }));
      },

      updateProject: (id, projectData) => {
        set((state) => ({
          projects: state.projects.map((project) =>
            project.id === id
              ? { ...project, ...projectData, updatedAt: new Date().toISOString() }
              : project
          ),
        }));
      },

      deleteProject: (id) => {
        set((state) => ({
          projects: state.projects.filter((project) => project.id !== id),
          projectCount: state.projectCount - 1,
        }));
      },

      canAddMoreProjects: () => {
        const { projectCount, maxProjects } = get();
        return projectCount < maxProjects;
      },
    }),
    {
      name: 'guest-projects',
    }
  )
);