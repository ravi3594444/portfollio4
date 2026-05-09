// Route "/" is transparently served by the beforeFiles rewrite in next.config.mjs
// which maps "/" → "/public/index.html" with no redirect visible to users.
// This file is kept as a fallback only — it will not normally be rendered.
export default function Home() {
  return null
}
