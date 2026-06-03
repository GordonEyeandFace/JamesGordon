#!/usr/bin/env bash
# Wrapper for Vercel CLI using the client (marketingGEF / akyll-franciscos-projects)
# Vercel token stored in .env.local as VERCEL_TOKEN_GEF.
#
# Usage:
#   ./bin/gef-vercel.sh <any vercel CLI command>
#   ./bin/gef-vercel.sh ls
#   ./bin/gef-vercel.sh env ls
#   ./bin/gef-vercel.sh deploy --prod
#
# The token is loaded at runtime and passed only to the `vercel` child process.
# It is never echoed, logged, or exported to the caller's shell.

set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ENV_FILE="$PROJECT_ROOT/.env.local"

if [[ ! -f "$ENV_FILE" ]]; then
    echo "error: $ENV_FILE not found" >&2
    exit 1
fi

# Pull only VERCEL_TOKEN_GEF from .env.local without sourcing the whole file
# (avoids side-effects from other vars and keeps the token in-memory only).
TOKEN_LINE="$(grep -E '^VERCEL_TOKEN_GEF=' "$ENV_FILE" || true)"
if [[ -z "$TOKEN_LINE" ]]; then
    echo "error: VERCEL_TOKEN_GEF not set in $ENV_FILE" >&2
    exit 1
fi

# Strip the VERCEL_TOKEN_GEF= prefix and optional surrounding quotes
VERCEL_TOKEN_GEF="${TOKEN_LINE#VERCEL_TOKEN_GEF=}"
VERCEL_TOKEN_GEF="${VERCEL_TOKEN_GEF%\"}"
VERCEL_TOKEN_GEF="${VERCEL_TOKEN_GEF#\"}"
VERCEL_TOKEN_GEF="${VERCEL_TOKEN_GEF%\'}"
VERCEL_TOKEN_GEF="${VERCEL_TOKEN_GEF#\'}"

if [[ -z "$VERCEL_TOKEN_GEF" ]]; then
    echo "error: VERCEL_TOKEN_GEF is empty in $ENV_FILE" >&2
    exit 1
fi

if ! command -v vercel >/dev/null 2>&1; then
    echo "error: vercel CLI not installed (run: npm i -g vercel)" >&2
    exit 1
fi

# Hand off to vercel; never print the token.
exec vercel --token "$VERCEL_TOKEN_GEF" "$@"
