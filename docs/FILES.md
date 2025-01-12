
# Project File Structure & User Flows

## Core Directories

### `/src/components`
- **auth/** - Authentication components (LoginForm)
- **brand/** - Branding elements (Logo, IconButton)
- **common/** - Reusable UI components (Badge, LoadingSpinner)
- **dashboard/** - Dashboard-specific components
- **guest/** - Guest user specific components
- **power/** - Power (registered) user components
- **mobile/** - Mobile-specific components
- **navigation/** - Navigation components

### `/src/routes`
- **index.tsx** - Main router configuration
- **ProtectedRoute.tsx** - Auth route protection wrapper

### `/src/pages`
Core pages for both guest and registered users

### `/src/store`
- **authStore.ts** - Authentication state management
- **guestStore.ts** - Guest user data management

## User Flow Routes

### Guest User Routes
- `/` - Landing page
- `/guest-dashboard` - Guest project management
- `/guest-dashboard/:projectId` - Individual guest project view
- `/features` - Feature comparison
- `/about` - About page
- `/contact` - Contact page
- `/register` - Registration page
- `/signin` - Sign in page

### Registered User Routes (Protected)
- `/app/dashboard` - Main dashboard
- `/app/projects` - Project management
- `/app/ideas` - Project ideas
- `/app/settings` - User settings
- `/app/project-details/:id` - Project details
- `/app/projects/:id` - Project view

## Known Issues & Potential Confusion Points

1. **Navigation Path Inconsistency**
   - `/app/project-details/:id` and `/app/projects/:id` both exist for project viewing
   - Could cause confusion in deep linking and navigation

2. **Guest vs Power User Project Views**
   - Separate components (`GuestProjectView` vs `ProjectDetails`)
   - Different URL structures might confuse users during conversion

3. **Route Protection Edge Cases**
   - Guest users might hit protected routes directly
   - Need better redirection handling in ProtectedRoute

4. **Project Ideas Navigation**
   - Both `/app/ideas` and `/app/project-ideas` exist
   - Could cause navigation state issues

5. **Dashboard Transitions**
   - No clear transition path from guest to power user dashboard
   - Projects don't automatically transfer on registration

## Critical User Flows

### Guest User Flow
```
Landing → Guest Dashboard → Create Project (max 10) → View Project
                        ↓
                    Register
```

### Power User Flow
```
Landing → Sign In → Dashboard → Projects/Ideas → Project Details
              ↑
           Register
```

## Recommended Fixes

1. Standardize project view routes:
   - Use `/app/projects/:id` consistently
   - Remove duplicate `/app/project-details/:id`

2. Consolidate ideas routes:
   - Keep `/app/ideas`
   - Remove `/app/project-ideas`

3. Add clear conversion path:
   - Implement project migration during registration
   - Add clear upgrade CTAs in guest views

4. Improve route protection:
   - Add proper loading states
   - Implement consistent redirect logic

## File Purpose Summary

### Key Files for Guest Experience
- `GuestDashboard.tsx` - Limited project management
- `GuestProjectView.tsx` - Basic project viewing
- `GuestProjectList.tsx` - Project listing with limits

### Key Files for Power Users
- `Dashboard.tsx` - Full featured dashboard
- `ProjectDetails.tsx` - Advanced project management
- `ProjectIdeas.tsx` - Idea management system

### Shared Infrastructure
- `ProtectedRoute.tsx` - Route protection logic
- `navigationConfig.ts` - Navigation structure
- `authStore.ts` - Authentication state
