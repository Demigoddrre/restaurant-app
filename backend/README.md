
# Restaurant App - Backend

The backend of the Restaurant App handles API requests, manages menu and order data, and communicates with the database. Built with Flask and PostgreSQL, it’s containerized using Docker.

## Technologies Used

- **Python 3.9**: Backend programming language
- **Flask**: Micro web framework for API development
- **PostgreSQL**: Database to manage restaurant data
- **SQLAlchemy**: ORM for database interaction
- **Docker**: Containerization of the app
- **NGINX**: Reverse proxy for the full stack setup
- **psycopg2**: PostgreSQL adapter for Python

## Concepts

- **RESTful API**: Exposes CRUD operations for restaurant data like menu items and orders.
- **Containerization**: The backend is containerized for consistent deployment.
- **Environment Configuration**: Configured via `.env` for database credentials and secret keys.

## Setup and Installation

### Prerequisites

- Python 3.9+
- Docker (with Docker Compose)
- PostgreSQL

### Clone the Repository

```bash
git clone https://github.com/[YOUR_USERNAME]/restaurant-app-backend.git
cd restaurant-app-backend
```

### Environment Variables

Create a `.env` file with the following:

```
FLASK_APP=app.py
FLASK_ENV=development
DATABASE_URL=postgresql://user:password@db/restaurant_db
SECRET_KEY=your-secret-key
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

## Running the Project

### Docker (Recommended)

1. **Build and run**:

   ```bash
   docker-compose up --build
   ```

2. **Access the API**:

   The API will be accessible at `http://localhost:5000`.

### Without Docker

1. **Setup PostgreSQL**: Update the `.env` file with your local PostgreSQL credentials.
2. **Create Database**: Run the SQL setup script:

   ```bash
   psql -U <username> -d <database> -f db/setup.sql
   ```

3. **Run the Flask App**:

   ```bash
   flask run
   ```

   Access the API at `http://localhost:5000`.

## API Endpoints

- **GET** `/api/menu`: Retrieve all menu items
- **POST** `/api/menu`: Add a new menu item
- **GET** `/api/menu/:id`: Get a menu item by ID
- **PUT** `/api/menu/:id`: Update a menu item by ID
- **DELETE** `/api/menu/:id`: Delete a menu item by ID
- **POST** `/api/order`: Place a new order

## Testing

To run the unit tests:

```bash
python -m unittest discover -s tests
```

## Future Improvements

- Add authentication (JWT or OAuth2)
- Implement caching with Redis
- Enhance error handling for better API responses

