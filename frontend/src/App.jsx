import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./App.css";

function App() {
  const [queue, setQueue] = useState([]);
  const [name, setName] = useState("");
  const [ticketId, setTicketId] = useState(null);

  useEffect(() => {
    const socket = io("http://localhost:4000", {
      transports: ["websocket"],
    });

    socket.on("queue:update", (updatedQueue) => {
      setQueue(updatedQueue);
    });

    return () => {
      socket.off("queue:update");
      socket.disconnect();
    };
  }, []);

  const joinQueue = async (type) => {
    if (!name.trim()) {
      return;
    }

    const response = await fetch("http://localhost:4000/join-queue", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name.trim(), type }),
    });

    if (!response.ok) {
      return;
    }

    const ticket = await response.json();
    setTicketId(ticket.id);
  };

  const callNext = async () => {
    await fetch("http://localhost:4000/call-next", {
      method: "POST",
    });
  };

  const position = ticketId
    ? queue.findIndex((item) => item.id === ticketId) + 1
    : 0;

  // TODO: Replace this simple estimate with a weighted moving average in the final system.
  const getEstimatedWaitMinutes = (queuePosition) => queuePosition * 5;

  return (
    <div className="app">
      <section className="card">
        <h1>Customer View</h1>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter your name"
            className=""
          />
        </label>
        <div className="button-row">
          <button type="button" onClick={() => joinQueue("REMOTE")}>
            Join Queue as Remote
          </button>
          <button type="button" onClick={() => joinQueue("WALK_IN")}>
            Join Queue as Walk-In
          </button>
        </div>
        {ticketId && (
          <p>Your position: {position > 0 ? position : "Waiting for update"}</p>
        )}
      </section>

      <section className="card">
        <h1>Provider Dashboard</h1>
        <button type="button" onClick={callNext}>
          Call Next
        </button>
        {queue.length === 0 ? (
          <p>No customers in queue.</p>
        ) : (
          <ul>
            {queue.map((item, index) => (
              <li key={item.id}>
                <strong>#{item.id}</strong> {item.name} ({item.type})
                <span>
                  {" "}
                  - Est. wait: {getEstimatedWaitMinutes(index + 1)} min
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default App;
