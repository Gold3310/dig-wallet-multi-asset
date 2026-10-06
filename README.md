# dig-wallet-multi-asset

A browser-based multi-asset wallet prototype for Chia, Ethereum, and Bitcoin. It is designed to show how one wallet can derive multiple addresses from a single root and let the user paste an address to generate the matching key material for the selected asset.

This project is a starter implementation for a web demo and is not yet production-ready for live custody or real transaction signing on-chain.

## What it does

- Accepts a 24-word recovery phrase
- Derives a deterministic seed from the phrase
- Generates a Chia-style address, Ethereum address, and Bitcoin address
- Lets the user paste an address and derive the matching key for the selected asset
- Signs a sample message with the derived key
- Presents everything in a clean browser UI

## Project status

- Chia: demo address generation only; production-grade Chia BLS derivation should use `dig-session` + `blspy`
- Ethereum: deterministic ECDSA address generation implemented
- Bitcoin: deterministic ECDSA address generation implemented

## Quick start in GitHub Codespaces

1. Open this repo in GitHub Codespaces.
2. In the terminal run:

```bash
pip install -r requirements.txt
python app.py
```

3. Open the forwarded browser link shown by the terminal.

## Local run

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python app.py
```

Then open:

http://localhost:5000

## Project structure

```text
.
├── README.md
├── requirements.txt
├── app.py
├── backend/
│   └── wallet.py
├── static/
│   ├── app.js
│   ├── index.html
│   └── style.css
└── .gitignore
```

## Usage

1. Enter a valid 24-word BIP-39 phrase.
2. Enter a password to unlock the wallet.
3. View all generated addresses.
4. Paste any generated address into the lookup box.
5. Press "Generate key" to derive the matching key for that asset.
6. Press "Sign message" to generate a signature sample.

## Security note

This demo intentionally keeps keys in memory only. Do not use it for real funds or production custody.

## License

GPL-2.0-only
