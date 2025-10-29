# SYNERGIA EVENT BOOKING API #
(Node.js & Express Fundamentals Project)
This project is a RESTful API built using Node.js and Express.js for managing event bookings for Synergia, a technical event.
It demonstrates CRUD operations using in-memory storage (arrays) — no database required.

 ## FEATURES :
## Method	Endpoint	Description 
GET	/api/bookings	Fetch all event bookings
POST	/api/bookings	Create a new booking
GET	/api/bookings/:id	View a specific booking by ID
PUT	/api/bookings/:id	Update participant details
DELETE	/api/bookings/:id	Cancel a booking

## CONCEPTS USED :
Express.js routing and middleware
RESTful API design
CRUD operations (Create, Read, Update, Delete)
Handling req.params and req.body
Basic Node.js server setup
In-memory data management (no database

## TECH STACK :
Backend: Node.js, Express.js
Language: JavaScript (ES Module)
Tools: Nodemon, Postman

## INSTALLATION AND SETUP :

Clone the repository:   git clone https://github.com/LamshithaPonnammahub/Event-Booking.git
                        cd Event_Management
Install dependencies:   npm install
Run the server:         node index.js
Browser:                http://localhost:3000

## Example Request (POST /api/bookings) :
{
  "id": 1,
  "name": "Ponnamma PD",
  "email": "ponnamma@example.com",
  "event": "Synergia 2025",
  "ticketType": "VIP"
}

## Example Response :
{
  "message": "Booking created successfully!",
  "data": {
    "id": 1,
    "name": "Ponnamma PD",
    "email": "ponnamma@example.com",
    "event": "Synergia 2025",
    "ticketType": "VIP"
  }
}


## 🧑‍💻 Author :

## Ponnamma PD
🎓 Sahyadri College of Engineering and Management
🔗 GitHub: https://github.com/LamshithaPonnammahub


## 🌟 Acknowledgement :
Developed as part of the Synergia Assignment – Node.js & Express Fundamentals.
