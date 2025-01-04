# App_Pal

A modern project management and documentation platform designed for development teams.

## 🚀 Vision

App_Pal aims to streamline application documentation and project management by providing an integrated platform where development teams can organize, track, and document their projects effectively.

## 🛠 Tech Stack

### Frontend
- React 18 with TypeScript
- React Router v6 for navigation
- TailwindCSS for styling
- Lucide React for icons
- Zustand for state management
- Hello Pangea DnD for drag-and-drop functionality

## 🎯 Core Features

### Current Features
- ✅ Modern landing page with responsive design
- ✅ Interactive onboarding tour
- ✅ Guest project management
- ✅ Project card views with priority system
- ✅ Features showcase page
- ✅ Mobile-responsive layout
- ✅ Basic authentication flow

### Guest Features
- Create up to 10 projects
- Basic project management
- Project documentation
- Priority setting

### Power User Features
- Advanced priority management with drag-and-drop
- Tech stack tracking and analytics
- Comprehensive project dashboard
- Unlimited projects

## 🏗 Project Structure

```
app_pal/
├── src/
│   ├── components/
│   │   ├── features/     # Feature showcase components
│   │   ├── guest/        # Guest user components
│   │   ├── layout/       # Layout components
│   │   ├── navigation/   # Navigation components
│   │   └── power/        # Power user features
│   ├── pages/            # Page components
│   ├── hooks/            # Custom React hooks
│   ├── store/            # Zustand stores
│   ├── types/            # TypeScript types
│   └── utils/            # Helper functions
└── public/              # Static assets
```

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 📱 Mobile Support

The application is fully responsive and supports:
- Mobile-first design
- Touch-friendly interfaces
- Responsive navigation
- Adaptive layouts

## 🔒 Authentication

- Basic email/password authentication
- Guest user support
- Power user features gating
- Persistent authentication state

## 📄 License

MIT License