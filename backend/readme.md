backend/
├─ src/
│ ├─ app.ts
│ ├─ server.ts
│ ├─ config/
│ │ ├─ env.ts
│ │ └─ db.ts
│ ├─ modules/
│ │ ├─ auth/
│ │ │ ├─ auth.routes.ts
│ │ │ ├─ auth.controller.ts
│ │ │ ├─ auth.service.ts
│ │ │ └─ auth.schema.ts
│ │ ├─ user/
│ │ ├─ task/
│ ├─ middlewares/
│ │ ├─ auth.middleware.ts
│ │ └─ error.middleware.ts
│ ├─ utils/
│ │ ├─ jwt.ts
│ │ └─ response.ts
│ └─ types/
├─ prisma / migrations (later)
├─ package.json
├─ tsconfig.json
└─ .env
