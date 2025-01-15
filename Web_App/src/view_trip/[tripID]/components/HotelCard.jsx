import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PHOTO_REF_URL, GetPlaceDetails } from "../../../AI/GlobalApi";

function HotelCard({ hotel }) {
  const [PHOTO_URL, setPHOTO_URL] = useState();

  useEffect(() => {
    hotel && GetPlacePhoto();
  }, [hotel]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: hotel.hotelName,
    };

    const result = await GetPlaceDetails(data).then((resp) => {
      console.log(resp.data.places[0].photos[2].name);

      const PHOTO_URL = PHOTO_REF_URL.replace(
        "{NAME}",
        resp.data.places[0].photos[2].name
      );
      setPHOTO_URL(PHOTO_URL);
    });
  };

  return (
    <Link
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
        <img
          src={PHOTO_URL || "/logo.svg"}
          alt="Logo"
          style={{
            borderRadius: 20,
            height: "180px",
            width: "100%",
            objectFit: "cover",
          }}
        />
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
  );
}

export default HotelCard;
