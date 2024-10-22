from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/menu')
def get_menu():
    return jsonify({'menu': 'Sample Menu'})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
