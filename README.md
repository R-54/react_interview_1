🧪 Challenge: “Team Dashboard”
🕒 Time Limit: 60 minutes
🧠 Level: Senior
💻 Stack: React (v18+), TypeScript, Hooks, Context, or any modern state library (Zustand, Jotai, etc.)
🎯 Objective
Build a small Team Dashboard that displays a list of employees, allows filtering by role, and shows detailed employee info in a modal or side panel.

✅ Functional Requirements
1. Employee List
Fetch from:

GET https://jsonplaceholder.typicode.com/users

Display each user’s:

name

email

company.name

2. Role Filter
Simulate user roles by randomly assigning a role ("Developer", "Designer", "Manager") to each user on load. Allow the user to filter employees by role using a dropdown.

3. Detail View
Clicking a user opens a modal or drawer showing:

Name

Email

Phone

Address

Company

Role

4. State Management
Use context or a modern state library to manage user data and filters.

5. Loading/Error Handling
Show loading and error messages during data fetch.

💡 Bonus (if time permits)
Use custom hooks (e.g. useEmployees)

Use useMemo/useCallback for performance

Add a unit test for a pure function or component

Add a reusable Modal component

Paginate or lazy load the employee list

🧠 What You’re Being Evaluated On
Category	Evaluation Focus
React Expertise	Proper use of hooks, contexts, state isolation
Architecture	Separation of concerns, reusable components, clean codebase
Performance	Memoization, avoiding unnecessary re-renders
UX/Quality	Responsive UI, accessible modal, graceful failure handling
TypeScript Use	Proper typings, avoiding any, reusable interfaces
Initiative	Using good tooling or going above and beyond with features