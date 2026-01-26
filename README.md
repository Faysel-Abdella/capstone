# Werefa – A Real-Time Hybrid Queue Management System and Service Marketplace for SMEs in Ethiopia

## 1. Project Overview

Manual queuing remains common in Ethiopian SMEs, leading to long waits, unclear service order, and limited visibility for customers and providers. Werefa is a hybrid queue management system that supports both remote users and walk-in customers, enabling orderly service delivery with real-time updates. The prototype also introduces service discovery to help customers identify available providers and offerings.

##2. Feature Set
Hybrid FIFO: A "remote + physical" queue logic that keeps everyone in their rightful spot.
Socket-Driven Sync: No manual refreshing; the UI updates in real-time as the queue moves.
Provider Console: "Call Next" functionality with a high-level view of the current waitlist.
WMA Estimation: Moving away from "hard-coded" wait times toward a weighted moving average for better accuracy.
Transactional Feedback: Conceptualizing a system where ratings are triggered by successful events.

##3.Technology Profile
Stack: JavaScript-heavy (React, Node, Express).
Streaming: Socket.io handles the event-driven updates.
Persistence: Prototyping in RAM; migrating to a relational Postgres setup for the final build.
DevOps: Docker-ready for easy "write once, run anywhere" capability.

##4. System Design
Werefa uses a 3-tier modular monolithic approach to balance simplicity with separation of concerns. The backend encapsulates the queue logic and ensures that even with massive traffic, the sequence of users remains consistent. By using database transactions in the final version, we guarantee ACID compliance for every person joining or leaving the line, effectively preventing "race conditions" in the FIFO logic.

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

- Fasil Hawultie
- Nanati Asamnew
- Faysel Abdella
- Ifnan Faysel
- Dejene Samuel
- Debela Berako
- Abdulwahid Hussen

## 9. License

Academic use only.
