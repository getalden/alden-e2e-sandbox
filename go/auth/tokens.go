package auth

import "time"

// TokenLifetime is how long an API token lasts.
const TokenLifetime = 24 * time.Hour

// alden e2e: session timeout 15 minutes
