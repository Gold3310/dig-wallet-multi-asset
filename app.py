from flask import Flask, jsonify, request
from backend.wallet import WalletCore

app = Flask(__name__)
wallet = WalletCore()

@app.get("/")
def index():
    return app.send_static_file("index.html")

@app.post("/api/unlock")
def unlock():
    payload = request.get_json(force=True)
    phrase = payload.get("phrase", "")
    password = payload.get("password", "")

    if not phrase:
        return jsonify({"error": "Recovery phrase is required."}), 400

    try:
        wallet.unlock(phrase, password)
        return jsonify({
            "addresses": wallet.addresses,
            "status": "ok"
        })
    except ValueError as exc:
        return jsonify({"error": str(exc)}), 400

@app.post("/api/derive")
def derive():
    payload = request.get_json(force=True)
    asset = payload.get("asset", "")
    address = payload.get("address", "")

    if not asset or not address:
        return jsonify({"error": "Asset and address are required."}), 400

    try:
        result = wallet.derive_for_address(asset, address)
        return jsonify(result)
    except ValueError as exc:
        return jsonify({"error": str(exc)}), 400

@app.post("/api/sign")
def sign():
    payload = request.get_json(force=True)
    asset = payload.get("asset", "")
    message = payload.get("message", "")

    if not asset or message is None:
        return jsonify({"error": "Asset and message are required."}), 400

    try:
        signature = wallet.sign_message(asset, message)
        return jsonify({"signature": signature})
    except ValueError as exc:
        return jsonify({"error": str(exc)}), 400

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
