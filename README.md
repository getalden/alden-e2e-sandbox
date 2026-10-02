# Alden e2e sandbox

A small shop in TypeScript, Python, Go and PHP, made for testing [Alden](https://getalden.dev) end to end. Its PRs are
opened by Alden's test kit (`pnpm e2e:seed` in the alden repo) and are never merged.

- `ts/`: the storefront (pricing, cart, auth)
- `py/`: the orders service (Django-style models and migrations)
- `go/`: the ledger
- `php/`: invoicing (Laravel-style)

CI passes in a few seconds, unless a PR adds `ci/FAIL`.

<!-- alden e2e: docs-only change -->
