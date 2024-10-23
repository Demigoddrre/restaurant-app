from flask import Flask, jsonify, request
import psycopg2

app = Flask(__name__)

# Connect to PostgreSQL
def get_db_connection():
    conn = psycopg2.connect(
        host='localhost',  # Change this to your Google Cloud SQL connection later
        database='restaurant_db',
        user='your_user',
        password='your_password'
    )
    return conn

@app.route('/api/menu')
def get_menu():
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute('SELECT * FROM menu;')
    menu_items = cur.fetchall()
    cur.close()
    conn.close()

    return jsonify(menu_items)

# User sign-up route
@app.route('/api/signup', methods=['POST'])
def signup():
    data = request.json
    first_name = data['first_name']
    last_name = data['last_name']
    email = data['email']
    password = data['password']  # Normally you would hash this

    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute(
        "INSERT INTO users (first_name, last_name, email, password) VALUES (%s, %s, %s, %s)",
        (first_name, last_name, email, password)
    )
    conn.commit()
    cur.close()
    conn.close()

    return jsonify({'message': 'User signed up successfully'}), 201

# User sign-in route (placeholder, we will integrate Google Sign-In later)
@app.route('/api/signin', methods=['POST'])
def signin():
    data = request.json
    email = data['email']
    password = data['password']  # Normally you would check this against the stored hash

    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("SELECT * FROM users WHERE email = %s", (email,))
    user = cur.fetchone()
    cur.close()
    conn.close()

    if user:
        return jsonify({'message': 'Sign-in successful', 'user': user}), 200
    else:
        return jsonify({'message': 'User not found'}), 404

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
