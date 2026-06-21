# GlowDrape Monorepo Architecture

A scalable production-grade monorepo architecture for **GlowDrape**, built with **Turborepo**, **pnpm workspace**, **Next.js**, and **NestJS**.

This repository contains:

* Customer-facing storefront application
* Admin dashboard application
* Backend API server
* Shared packages for reusable code and future scaling

---

## Tech Stack

### Frontend

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* React

### Backend

* NestJS
* TypeScript
* Node.js

### Monorepo Tooling

* pnpm Workspace
* Turborepo

---

# Project Architecture

```txt
glowdrape/
│
├── apps/
│   │
│   ├── storefront/        → Customer facing website
│   │
│   ├── admin/            → Admin dashboard
│   │
│   └── api/              → Backend API server
│
├── packages/
│   │
│   ├── ui/               → Shared UI components
│   │
│   ├── shared-types/     → Shared TypeScript interfaces
│   │
│   ├── shared-utils/     → Shared helper functions
│   │
│   └── database/         → Database schema and migrations (planned)
│
├── turbo.json
├── pnpm-workspace.yaml
└── package.json
```

---

# Current Working Applications

The monorepo currently runs **3 applications simultaneously**.

| Application | Framework | Port |
| ----------- | --------- | ---- |
| Storefront  | Next.js   | 3000 |
| Admin       | Next.js   | 3001 |
| API         | NestJS    | 4000 |

---

# Prerequisites

Install the following:

### Node.js

Version:

```bash
v22+
```

Download:

[Node.js Official Website](https://nodejs.org?utm_source=chatgpt.com)

---

### pnpm

Install globally:

```bash
npm install -g pnpm
```

Documentation:

[pnpm Documentation](https://pnpm.io?utm_source=chatgpt.com)

---

# Clone Repository

```bash
git clone <your-github-repository-url>
```

Move into project:

```bash
cd GlowDrapeMonoRepoArch
```

---

# Install Dependencies

Install all dependencies for all workspace packages.

```bash
pnpm install
```

This installs dependencies for:

* storefront
* admin
* api
* root workspace

---

# Run Entire Monorepo

Run all applications simultaneously.

```bash
pnpm dev
```

This starts:

```txt
Storefront → http://localhost:3000

Admin → http://localhost:3001

API → http://localhost:4000
```

Powered by:

* Turborepo
* pnpm workspace

---

# Run Applications Separately

## 1. Run Storefront Only

Move to storefront:

```bash
cd apps/storefront
```

Run:

```bash
pnpm dev
```

Runs on:

```txt
http://localhost:3000
```

---

## 2. Run Admin Only

Move to admin:

```bash
cd apps/admin
```

Run:

```bash
pnpm dev
```

Runs on:

```txt
http://localhost:3001
```

---

## 3. Run API Only

Move to api:

```bash
cd apps/api
```

Run:

```bash
pnpm start:dev
```

Runs on:

```txt
http://localhost:4000
```

---

# Build Entire Monorepo

Build every application.

```bash
pnpm build
```

Equivalent to:

```bash
turbo run build
```

---

# Workspace Commands

### Install dependency in root workspace

```bash
pnpm add <package-name> -w
```

Example:

```bash
pnpm add turbo -D -w
```

---

### Install dependency in specific app

Example storefront:

```bash
pnpm add axios --filter storefront
```

Example admin:

```bash
pnpm add zustand --filter admin
```

Example api:

```bash
pnpm add bcrypt --filter api
```

---

# Development Workflow

Start entire architecture:

```bash
pnpm dev
```

After code changes:

```bash
git add .
git commit -m "your commit message"
git push
```

---

# Upcoming Development

Planned modules:

### Storefront

* Product listing
* Product details page
* Cart system
* Checkout
* Wishlist
* Authentication
* Order tracking

### Admin

* Product management
* Category management
* Inventory management
* Coupon management
* Reports dashboard
* Customer management

### API

* Authentication
* Product APIs
* Order APIs
* Payment APIs
* Review APIs
* Notification APIs

---

# Future Database Layer

Planned:

* PostgreSQL
* Prisma ORM

Database package structure:

```txt
packages/database/
   prisma/
      schema.prisma
      migrations/
```

---

# Architecture Flow

```txt
Customer
    ↓
Storefront (Next.js)
    ↓
API Calls
    ↓
NestJS Backend
    ↓
Database

Admin
    ↓
Admin Dashboard
    ↓
API Calls
    ↓
NestJS Backend
```

---

# Team Vision

Goal is to build a scalable production-grade e-commerce architecture using modern full-stack development practices.

Focused on:

* scalability
* maintainability
* code sharing
* reusable architecture
* production readiness

---

#

---

# Status

Current Phase:

```txt
Infrastructure Setup Completed
```

Completed:

* Monorepo setup
* pnpm workspace setup
* Turborepo setup
* Storefront setup
* Admin setup
* API setup
* Simultaneous server execution

Next Phase:

```txt
Shared packages + Database + Business logic
```
