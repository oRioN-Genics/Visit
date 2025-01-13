import React from "react";
import { Link } from "react-router-dom"; // Make sure this import is included
import "./hotels.css";

function Hotels({ trip }) {
  let parsedTrip = {};

  try {
    parsedTrip = trip?.trip ? JSON.parse(trip.trip) : {};
  } catch (error) {
    console.error("Failed to parse trip JSON:", error);
  }

  if (!parsedTrip.hotels || parsedTrip.hotels.length === 0) {
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
          Hotel Recommendation
        </h2>
        <p>No hotels available to display.</p>
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
        Hotel Recommendation
      </h2>
      <div className="hotel-grid">
        {parsedTrip?.hotels?.map((hotel, index) => (
          <Link
            key={index}
            to={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              `${hotel.hotelName || "Hotel Name not provided"}, ${
                hotel.address || "Location not provided"
              }`
            )}`}
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="hotel-card">
              <img src="/logo.svg" alt="Logo" style={{ borderRadius: 20 }} />
              <h2 style={{ fontSize: 18, fontWeight: "bold", marginTop: 10 }}>
                {hotel.hotelName || "Hotel Name Not Available"}
              </h2>
              <p style={{ fontSize: 14, color: "#666" }}>
                {hotel.description || "No description available."}
              </p>
              <p
                style={{
                  fontSize: 14,
                  color: "#007BFF",
                  marginTop: 5,
                  textAlign: "center",
                }}
              >
                {`📍 ${hotel.address || "Address not provided."}`}
              </p>
              <p
                style={{
                  fontSize: 14,
                  color: "#007BFF",
                  marginTop: 5,
                  textAlign: "center",
                }}
              >
                {`🪙 ${hotel.price || "Price not provided."}`}
              </p>
              <p
                style={{
                  fontSize: 14,
                  color: "#007BFF",
                  marginTop: 5,
                  textAlign: "center",
                }}
              >
                {`⭐ ${hotel.rating || "Rating not provided."}`}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Hotels;
