# TeamPulse – Backend

TeamPulse is a **production-grade backend** built using **Node.js, Express, and TypeScript**, designed with **scalability, clarity, and real-world engineering practices** in mind.

This backend follows a **feature-based modular architecture**, clear request flow, and strict separation of concerns.

---

## 📁 Folder Structure

```
backend/
├─ src/
│  ├─ app.ts                # Express app configuration
│  ├─ server.ts             # Application entry point
│  ├─ config/
│  │  ├─ env.ts             # Environment variable handling
│  │  └─ db.ts              # Database connection (later)
│  ├─ modules/              # Feature-based modules
│  │  ├─ auth/
│  │  │  ├─ auth.routes.ts       # Route definitions
│  │  │  ├─ auth.controller.ts   # Request handling
│  │  │  ├─ auth.service.ts      # Business logic
│  │  │  └─ auth.schema.ts       # Input validation
│  │  ├─ user/
│  │  └─ task/
│  ├─ middlewares/          # Shared middlewares
│  │  ├─ auth.middleware.ts
│  │  └─ error.middleware.ts
│  ├─ utils/                # Shared utilities
│  │  ├─ jwt.ts
│  │  └─ response.ts
│  └─ types/                # Shared TypeScript types
├─ prisma/                  # Prisma schema & migrations (later)
├─ package.json
├─ tsconfig.json
└─ .env                     # Environment variables (not committed)
```

### Why this structure?

- **Feature-based modules** scale better than layer-based folders
- Keeps business logic isolated
- Makes testing and refactoring safer
- Matches real-world backend codebases

---

## 🔁 Request Lifecycle (Mental Model)

Every request follows this predictable flow:

```
Request
 → Middleware
 → Route
 → Controller
 → Service
 → Utils
 → Response
```

If you understand this flow, **Express will never feel confusing**.

---

## 🔍 Full Request Flow Example (Register User)

```
POST /api/v1/auth/register
 ↓
express.json()
 ↓
auth.routes.ts
 ↓
auth.controller.ts
 ↓
auth.service.ts
 ↓
utils/jwt.ts
 ↓
utils/response.ts
```

Each layer has **one responsibility only**.

---

## 🚀 server.ts — Entry Point

### Purpose

- Start the HTTP server
- Bind Express to a port
- **Nothing else**

### Why this matters

- Keeps startup logic isolated
- Improves testability
- Prevents accidental side effects

> `app.ts` builds the app
> `server.ts` runs the app

---

## 🧩 app.ts — Express Application Setup

### Responsibilities

- Configure global middleware
- Register feature routes
- Attach global error handler

### Key rule

> Middleware order matters
> Error middleware **must be registered last**

---

## 🌍 Environment Configuration — `env.ts`

### Purpose

- Centralize environment variables
- Validate critical configuration at startup
- Fail fast if something is missing

This avoids **silent production failures**.

---

## 🔐 Utilities — JWT Helper (`utils/jwt.ts`)

### Purpose

- Centralize JWT logic
- Prevent duplication across services
- Keep controllers clean

### Why this abstraction matters

- JWT library can change in one place
- Easier unit testing
- Cleaner business logic

📌 **Never sign or verify JWTs inside controllers**

---

## 📦 Standard API Responses — `utils/response.ts`

### Purpose

- Ensure consistent API responses
- Make frontend error handling predictable
- Avoid custom response shapes per endpoint

This enables simple frontend logic:

```ts
if (!response.success) {
  showError(response.error.message);
}
```

---

## 🔑 Auth Module — Feature-Based Design

```
modules/auth/
├─ auth.routes.ts       # Route wiring
├─ auth.controller.ts   # HTTP request handling
├─ auth.service.ts      # Core business logic
└─ auth.schema.ts       # Validation (Zod)
```

### Responsibilities by layer

- **Routes** → URL mapping only
- **Controller** → Request/response coordination
- **Service** → Business rules
- **Schema** → Input validation

This ensures:

- Thin controllers
- Testable services
- Clear ownership of logic

---

## 🧠 Engineering Principles Followed

- Separation of concerns
- Stateless backend
- Explicit validation
- Predictable request flow
- Production-ready structure

---

## 📌 Project Status

- Backend foundation complete
- Auth architecture in place
- Database & refresh tokens coming next
- CI/CD, caching, and realtime to follow
