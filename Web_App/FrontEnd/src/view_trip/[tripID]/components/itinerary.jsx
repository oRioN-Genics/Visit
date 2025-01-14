import React from "react";
import { Link } from "react-router-dom"; // Added import for Link
import "./itinerary.css";

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
              <Link
                key={placeIndex}
                to={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  `${place.placeName}, ${place.geoCoordinates.latitude}, ${place.geoCoordinates.longitude}`
                )}`}
                style={{ textDecoration: "none" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                
                <div className="place-details">
                  <h4
                    style={{ fontSize: 16, fontWeight: "bold", marginBottom: 5 }}
                  >
                    {place.placeName}
                  </h4>
                  <img src="/logo.svg" alt="Logo" style={{ borderRadius: 20 }} />
                  <p style={{ fontSize: 14, color: "#666", marginBottom: 5 }}>
                    {place.details}
                  </p>
                  <p style={{ fontSize: 14, color: "#007BFF", marginBottom: 5 }}>
                    {`📍 Location: ${place.geoCoordinates.latitude}, ${place.geoCoordinates.longitude}`}
                  </p>
                  <p style={{ fontSize: 14, color: "#007BFF", marginBottom: 5 }}>
                    {`💵 Ticket Pricing: ${place.ticketPricing}`}
                  </p>
                  <p style={{ fontSize: 14, color: "#007BFF", marginBottom: 5 }}>
                    {`🚗 Travel Time: ${place.timeToTravel}`}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Itinerary;
