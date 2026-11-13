# ProfileTrail

Employment credential issuance and verification platform. An organization issues a
cryptographically signed employment credential, an individual shares it, and a recruiter
independently verifies it — including what happens when it's revoked.

This is a deliberately cut-down build of a larger spec (see `/docs` once added), scoped to a
single core workflow: **Issue → Sign → Share → Verify**. See the project plan for what's in scope
and what's explicitly deferred.

## Status

Early development. Landing page (`apps/web`) is in progress; backend (`apps/api`) not yet started.

## Structure

```
profiletrail/
├── apps/
│   ├── web/   Next.js + TypeScript + Tailwind frontend
│   └── api/   Go backend (not yet created)
└── docker-compose.yml   (not yet created)
```

## Development

```bash
cd apps/web
npm install
npm run dev
```
