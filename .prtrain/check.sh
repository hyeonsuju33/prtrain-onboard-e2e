#!/usr/bin/env bash
# External PR egress probe: registry install must work, arbitrary hosts must be blocked.
set -u
work=$(mktemp -d)
trap 'rm -rf "$work"' EXIT
cd "$work" && npm init -y >/dev/null 2>&1
if npm install --no-audit --no-fund left-pad@1.3.0 >npm.log 2>&1; then echo "PROBE_REGISTRY_INSTALL=ok"; reg=0; else echo "PROBE_REGISTRY_INSTALL=fail"; tail -5 npm.log; reg=1; fi
if curl -sS -m 15 -o /dev/null -w '%{http_code}' https://example.com/ >curl.out 2>curl.err; then echo "PROBE_ARBITRARY_CURL=reachable code=$(cat curl.out)"; arb=1; else echo "PROBE_ARBITRARY_CURL=blocked err=$(head -c 160 curl.err | tr '\n' ' ')"; arb=0; fi
cd - >/dev/null && node --test test/*.test.js || exit 1
exit $((reg + arb))
