import React from "react";
import { Link } from "react-router-dom"; // Added import for Link
import "./itinerary.css";
import PlaceCard from "./PlaceCard";

function Itinerary({ trip }) {
  let parsedTrip = {};

  try {
    parsedTrip = trip?.trip ? JSON.parse(trip.trip) : {};
  } catch (error) {
    console.error("Failed to parse trip JSON:", error);
  }

  if (!parsedTrip.itinerary || Object.keys(parsedTrip.itinerary).length === 0) {
    return (
      <div>
        <h2
          style={{
            textAlign: "left",
            fontSize: 20,
            marginTop: 5,
            fontWeight: "bold",
          }}
        >
          Places to Visit
        </h2>
        <p>No itinerary available to display.</p>
      </div>
    );
  }

  return (
    <div style={{ paddingBottom: 20 }}>
      <h2
        style={{
          textAlign: "left",
          fontSize: 20,
          marginTop: 5,
          fontWeight: "bold",
        }}
      >
        Places to Visit
      </h2>
      <div className="itinerary-grid">
        {Object.entries(parsedTrip.itinerary).map(([day, details], index) => (
          <div key={index} className="itinerary-card">
            <h3 style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
              {`Day ${index + 1}: ${details.theme}`}
            </h3>
            <p style={{ fontSize: 14, color: "#666", marginBottom: 10 }}>
              {`Best Time to Visit: ${details.bestTimeToVisit}`}
            </p>
            {details.places.map((place, placeIndex) => (
              <PlaceCard place={place} placeIndex={placeIndex} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Itinerary;
