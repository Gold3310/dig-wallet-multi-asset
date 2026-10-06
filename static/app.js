body {
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #0f172a, #1e293b);
  color: #e2e8f0;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1rem 4rem;
}

header {
  margin-bottom: 1.5rem;
}

h1 {
  margin-bottom: 0.4rem;
}

.panel {
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 14px;
  padding: 1rem 1.25rem;
  margin-bottom: 1.25rem;
}

textarea, input, select, button {
  width: 100%;
  margin-top: 0.5rem;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid #334155;
  padding: 0.8rem 0.9rem;
  font-size: 1rem;
}

textarea, input, select {
  background: #0f172a;
  color: #f8fafc;
}

button {
  cursor: pointer;
  border: none;
  background: #22c55e;
  color: #04130a;
  font-weight: bold;
  margin-top: 1rem;
}

button.secondary {
  background: #38bdf8;
  color: #06233b;
}

.status {
  margin-top: 1rem;
  min-height: 24px;
  color: #cbd5e1;
  word-break: break-word;
}

.address-list {
  display: grid;
  gap: 0.75rem;
}

.asset-item {
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 10px;
  padding: 0.9rem;
  background: rgba(30, 41, 59, 0.7);
}

.asset-item strong {
  text-transform: capitalize;
}

.button-row {
  display: flex;
  gap: 0.75rem;
}

.button-row button {
  flex: 1;
}

@media (max-width: 640px) {
  .button-row {
    flex-direction: column;
  }
}
