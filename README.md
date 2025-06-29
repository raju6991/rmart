# 🛒 RMart Monorepo

An eCommerce platform with Next.js (client), Vite + Chakra (admin), Express API, and PostgreSQL.

## Structure

- `apps/client` - Storefront UI
- `apps/admin` - Admin dashboard
- `apps/api` - Backend service
- `packages/` - Shared code
- `tests/` - Automated testing

## Dev Commands

- `pnpm dev:client` — Run client
- `pnpm dev:admin` — Run admin
- `pnpm dev:api` — Run backend
- `pnpm dev` — Run all (with `concurrently`)
