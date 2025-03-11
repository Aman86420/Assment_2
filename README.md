# School Locator API

This project is a **RESTful API** for managing and retrieving school information based on geographical coordinates. It allows users to **add** schools and **fetch** the nearest schools based on latitude and longitude.

## 🚀 Features
- Add a new school with its name, address, latitude, and longitude.
- Retrieve a list of schools sorted by distance from the provided coordinates.
- Deployed on **Render**.

## 🛠 Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Deployment**: Render

## 🔗 Deployed API Base URL
[https://assment-2.onrender.com](https://assment-2.onrender.com)

## 📌 API Endpoints

### 1️⃣ List Nearby Schools
- **URL**: `/api/listSchools`
- **Method**: `GET`
- **Query Parameters**:
  - `latitude` (required)
  - `longitude` (required)
- **Example Request**:
GET https://assment-2.onrender.com/api/listSchools?latitude=40.73061&longitude=-73.935242

- **Example Response**:
```json
[
  {
    "id": 1,
    "name": "Redwood High",
    "address": "12343 Main Street, DC",
    "latitude": 48,
    "longitude": -84,
    "distance": 1135.50
  }
]

2️⃣ Add a New School
URL: /api/addSchool
Method: POST
Request Body (JSON):

{
  "name": "Redwood High",
  "address": "12343 Main Street, DC",
  "latitude": 47.712776,
  "longitude": -84.005974
}

Example Response:

{
  "message": "School added successfully"
}

# 🏗 How to Set Up Locally
git clone https://github.com/Aman86420/Assment_2.git
cd Assment_2
npm install
Create a .env file and configure MySQL:
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=root
DB_NAME=school_db

npm start
🔗 GitHub Repo: https://github.com/Aman86420/Assment_2





