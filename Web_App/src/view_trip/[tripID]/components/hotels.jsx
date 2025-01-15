import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./hotels.css";
import HotelCard from "./HotelCard"; 

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
          <HotelCard key={index} hotel={hotel} /> // Apply the key here
        ))}
      </div>
    </div>
  );
}

export default Hotels;
