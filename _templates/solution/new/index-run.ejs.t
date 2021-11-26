---
to: src/index.js
inject: true
skip_if: "  await solve<%= name %>()"
before: "#run"
eof_last: false
---
  await solve<%= name %>()
