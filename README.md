# Backend-HVA

A full-stack Task Management application built using  **React** ,  **Node.js** ,  **Express** , and  **MongoDB** , with secure user authentication, admin controls, and task management features.

---

##  Features

###  Authentication

* User Registration (Name, Email, Password)
* Login with JWT
* Admin & User roles
* Password hashing with bcrypt

###  Task Management

* **Admin** can view all tasks
* **Users** can view only their assigned tasks
* Each task includes:
  * Title
  * Description
  * Assigned user's email

###  Backend Highlights

* Express REST API
* MongoDB & Mongoose models
* Custom JWT utilities
* Task seeding support
* Role-based authorization middleware

###  Frontend Highlights

* React functional components
* Context-based authentication handler
* Axios for API calls
* Role-based UI rendering
* Modern styled UI using CSS 

---

##  Project Structure

### Backend Structure

Backend-HVA/

* controller/
* middleware/
* model/
* service/
* utils/
* config/
* taskSeed.json
* server.js
* package.json

### Frontend Structure

Frontend-HVA/

* src/
  * hooks/
  * pages/
  * style/
  * api.js
  * App.js
* package.json

---

##  Setup Instructions

### Backend Setup

1. Install dependencies:

<pre class="overflow-visible!" data-start="1514" data-end="1548"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>cd</span><span> Backend-HVA
npm install
</span></span></code></div></div></pre>

2. (Optional) Seed tasks:

<pre class="overflow-visible!" data-start="1576" data-end="1608"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>node service/taskSeed.js
</span></span></code></div></div></pre>

3. Start backend:

<pre class="overflow-visible!" data-start="1628" data-end="1645"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>npm </span><span>start</span><span>
</span></span></code></div></div></pre>

Backend runs at:

[http://localhost:5000]()

---

### Frontend Setup

1. Install dependencies:

<pre class="overflow-visible!" data-start="1737" data-end="1772"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>cd</span><span> Frontend-HVA
npm install
</span></span></code></div></div></pre>

2. Start React app:

<pre class="overflow-visible!" data-start="1794" data-end="1811"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>npm </span><span>start</span><span>
</span></span></code></div></div></pre>

Frontend runs at:

[http://localhost:3000]()

---

##  Role Permissions

### Admin

* View all tasks
* View the assigned email for each task

### User

* View only their own tasks

---

##  Running the Full Project

1. Start backend:

<pre class="overflow-visible!" data-start="2255" data-end="2272"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>npm </span><span>start</span><span>
</span></span></code></div></div></pre>

2. Start frontend:

<pre class="overflow-visible!" data-start="2293" data-end="2310"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>npm </span><span>start</span><span>
</span></span></code></div></div></pre>

3. Open browser:

<pre class="overflow-visible!" data-start="2329" data-end="2358"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>http:</span><span>//localhost:3000</span><span>
</span></span></code></div></div></pre>

---
## Deployment 
https://backend-hva-16q4.vercel.app/
---
## Contributing

You can create pull requests or report issues.

---

##  Author
Vaishnavi T V
