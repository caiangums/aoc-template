---
to: src/index.js
inject: true
skip_if: "import solve<%= name %> from './<%= name %>'"
before: "#import"
eof_last: false
---
import solve<%= name %> from './<%= name %>'
