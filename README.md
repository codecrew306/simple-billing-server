# SimpleBill Server

A mobile-friendly billing application for small retail shops, grocery stores, and kirana shops in India. Helps shop owners transition from handwritten bills to a digital billing system.

## Project Structure

```
src/
├── controllers/    # HTTP request handlers
├── models/         # Data models and schemas
├── views/          # UI templates
├── services/       # Business logic
├── routes/         # API endpoints
├── middleware/     # Request processing
├── constants/      # App constants
├── config/         # Configuration
├── utils/          # Helper functions
├── app.js          # Express app setup
└── server.js       # Entry point

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

This project follows MVC architecture with a service layer:

- **Controllers** handle HTTP requests and responses
- **Services** contain business logic
- **Models** define data structures and database interactions
- **Routes** map URLs to controllers
- **Middleware** processes requests before they reach controllers

## Tech Stack

- Node.js with ES modules
- Express.js
- MVC architecture pattern
