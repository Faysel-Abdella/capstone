# Werefa – A Real-Time Hybrid Queue Management System and Service Marketplace for SMEs in Ethiopia

## 1. Project Overview

Manual queuing remains common in Ethiopian SMEs, leading to long waits, unclear service order, and limited visibility for customers and providers. Werefa is a hybrid queue management system that supports both remote users and walk-in customers, enabling orderly service delivery with real-time updates. The prototype also introduces service discovery to help customers identify available providers and offerings.

## 2. Key Features

- Hybrid FIFO queue (remote + walk-in)
- Real-time queue synchronization using WebSockets
- Provider dashboard (call next, view live queue)
- Adaptive wait-time estimation (prototype uses fixed average, final system uses weighted moving average)
- Transaction-based rating system (conceptual in prototype)

## 3. Technology Stack

- Frontend: React.js
- Backend: Node.js + Express
- Real-time: Socket.io (WebSockets)
- Database: In-memory (prototype), PostgreSQL (production)
- Deployment: Docker, cloud hosting (planned)

## 4. System Architecture

Werefa follows a 3-tier modular monolithic architecture. The client layer provides the customer and provider interfaces, the application layer encapsulates queue logic and real-time synchronization, and the persistence layer handles data storage. In the final version, concurrency and ordering will be enforced using database transactions to preserve FIFO consistency under load.

## 5. Prototype Scope & Limitations

- Functional prototype for academic demonstration
- Single provider, in-memory storage
- No authentication in prototype
- Designed to validate architecture and real-time queue logic

## 6. How to Run the Project

### Prerequisites

- Node.js (LTS)

### Backend

1. Open a terminal and navigate to the backend directory:
   - `cd backend`
2. Install dependencies and start the server:
   - `npm install`
   - `npm run dev`

### Frontend

1. Open a new terminal and navigate to the frontend directory:
   - `cd frontend`
2. Install dependencies and start the client:
   - `npm install`
   - `npm run dev`

The backend runs on `http://localhost:4000` and the frontend runs on the Vite dev server (default `http://localhost:5173`).

## 7. Future Enhancements

- PostgreSQL integration
- Redis for WebSocket scaling
- JWT authentication and RBAC
- Offline-first kiosk mode
- Advanced analytics dashboard

## 8. Team Members

- Fasil Hawultie — Project Lead, System Architecture
- [Name] — Backend Development, Real-time Services
- Nanati Asamnew — Frontend Development, UI/UX
- [Name] — Research & Evaluation, Documentation

## 9. License

Academic use only.
