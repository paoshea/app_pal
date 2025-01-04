export interface Project {
  id: string;
  name: string;
  description: string;
  priority: number;
  readme: string;
  organizationId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Organization {
  id: string;
  name: string;
  slug: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  organizationId: string;
  role: 'admin' | 'member' | 'viewer';
}