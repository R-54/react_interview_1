⚙️ Challenge: "Team Dashboard"
🕒 Duration: 1 Hour
📈 Level: Senior
🧰 Tech Stack: React (with Hooks), TypeScript (optional but preferred), Context or another state manager
🎯 Objective
Build a small Team Dashboard app that allows viewing, filtering, and sorting a list of team members.

🗃️ Data
Use this endpoint:
GET https://jsonplaceholder.typicode.com/users

Each user object includes:

id

name

email

username

company.name

address.city

📌 Requirements
✅ Must-Haves:
Fetch and display the list of users

Each user should be displayed as a card (component)

Include a search input to filter by name or username

Include a dropdown to filter by city

Include a sort toggle (asc/desc) for names

Use React Context for global state management

Use useMemo and useCallback to optimize rendering

💡 Bonus (Optional):
Show a loading indicator while fetching

Graceful error handling if fetch fails

Paginate the list (client-side)

Add a modal that shows full user details on card click