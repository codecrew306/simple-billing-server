# SimpleBill Server

A mobile-friendly billing application for small retail shops, grocery stores, and kirana shops in India. Helps shop owners transition from handwritten bills to a digital billing system.

## Project Structure

```
src/
├── controllers/    # HTTP request handlers
├── services/       # Business logic
├── repositories/   # Database operations
├── models/         # Data models and schemas
├── routes/         # API endpoints
├── middleware/     # Request processing
├── constants/      # App constants
├── config/         # Configuration
├── utils/          # Helper functions
├── views/          # UI templates
├── app.js          # Express app setup
└── server.js       # Entry point

tests/              # Test files
```

## Setup

Install dependencies:
```bash
npm install
```

Create a `.env` file for environment variables:
```
PORT=3000
```

## Development

Start the server:
```bash
npm start
```

Start with auto-reload:
```bash
npm run dev
```

## Architecture

This project follows MERN architecture with layered separation:

- **Controllers** handle HTTP requests and responses
- **Services** contain business logic and validation
- **Repositories** handle database operations (Mongoose queries)
- **Models** define data structures and schemas
- **Routes** map URLs to controllers
- **Middleware** processes requests before they reach controllers

## Tech Stack

- Node.js with ES modules
- Express.js
- MongoDB with Mongoose
- Layered architecture (Controller → Service → Repository → Model)
