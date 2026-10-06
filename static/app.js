* {
  box-sizing: border-box;
}

:root {
  --bg: #07111f;
  --panel: rgba(15, 23, 42, 0.85);
  --border: rgba(148, 163, 184, 0.24);
  --text: #e2e8f0;
  --muted: #94a3b8;
  --primary: #22c55e;
  --primary-text: #04130a;
  --secondary: #38bdf8;
  --secondary-text: #06233b;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  background: linear-gradient(180deg, #020817 0%, #0f172a 100%);
  color: var(--text);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

button, input, textarea, select {
  font: inherit;
}

.app-shell {
  max-width: 480px;
  margin: 0 auto;
  padding: max(16px, env(safe-area-inset-top)) 16px max(18px, env(safe-area-inset-bottom));
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.eyebrow {
  margin: 0 0 4px;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.7rem;
}

h1 {
  margin: 0;
  font-size: clamp(1.7rem, 5vw, 2.2rem);
}

h2 {
  margin: 0;
  font-size: 1.08rem;
}

.status-pill {
  background: rgba(34, 197, 94, 0.15);
  color: #bbf7d0;
  border: 1px solid rgba(34, 197, 94, 0.4);
  border-radius: 999px;
  padding: 7px 10px;
  font-size: 0.75rem;
  font-weight: 600;
}

.card {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 22px;
  padding: 16px;
  margin-bottom: 14px;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.35);
}

.card-header {
  margin-bottom: 10px;
}

label {
  display: block;
  margin-top: 12px;
  margin-bottom: 8px;
  color: var(--muted);
  font-size: 0.92rem;
}

textarea,
input,
select {
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: rgba(15, 23, 42, 0.9);
  color: var(--text);
  padding: 14px 14px;
  outline: none;
  font-size: 1rem;
}

textarea {
  resize: vertical;
  min-height: 96px;
}

.primary-btn,
.secondary-btn {
  width: 100%;
  border: none;
  border-radius: 14px;
  padding: 14px 16px;
  font-weight: 700;
  font-size: 1rem;
  margin-top: 14px;
}

.primary-btn {
  background: var(--primary);
  color: var(--primary-text);
}

.secondary-btn {
  background: var(--secondary);
  color: var(--secondary-text);
}

.compact {
  padding-top: 12px;
  padding-bottom: 12px;
}

.status {
  min-height: 20px;
  margin-top: 12px;
  color: var(--muted);
  font-size: 0.9rem;
  line-height: 1.4;
  word-break: break-word;
}

.address-list {
  display: grid;
  gap: 12px;
}

.asset-item {
  background: rgba(30, 41, 59, 0.7);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 12px 14px;
}

.asset-item strong {
  display: block;
  margin-bottom: 6px;
  text-transform: capitalize;
  color: #f8fafc;
  font-size: 0.95rem;
}

.asset-item p {
  margin: 0;
  color: #dbeafe;
  font-size: 0.82rem;
  line-height: 1.5;
  overflow-wrap: anywhere;
}

@media (min-width: 700px) {
  .app-shell {
    max-width: 540px;
    padding-top: 32px;
  }
}
