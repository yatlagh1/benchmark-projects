#!/bin/sh
# usage: _review/capture.sh <before|after> [url]
# Serves nothing itself: run `python3 -m http.server 8000` in maxlit-final/ first.
set -e
HERE=$(cd "$(dirname "$0")" && pwd)
case "$1" in
  before) URL=${2:-http://localhost:8000/maxlit-growth-loop/index.html} ;;
  after)  URL=${2:-http://localhost:8000/maxlit-growth-loop-v2/index.html} ;;
  *) echo "usage: $0 before|after [url]"; exit 1 ;;
esac
OUT="$HERE/$1"; mkdir -p "$OUT"
TMP=$(mktemp -t capture).js
sed -e "s#__BASE__#$URL#" -e "s#__OUT__#$OUT#" "$HERE/capture.template.js" > "$TMP"
playwright-cli -s=gl open >/dev/null 2>&1 || true
playwright-cli -s=gl --raw run-code --filename="$TMP"
rm -f "$TMP"
ls "$OUT"
