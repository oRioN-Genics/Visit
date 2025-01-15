import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GetPlaceDetails, PHOTO_REF_URL } from "../../../AI/GlobalApi";

function PlaceCard({ place, placeIndex }) {
  const [PHOTO_URL, setPHOTO_URL] = useState();

  useEffect(() => {
    place && GetPlacePhoto();
  }, [place]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: place.placeName,
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
      key={placeIndex}
      to={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        `${place.placeName}, ${place.geoCoordinates.latitude}, ${place.geoCoordinates.longitude}`
      )}`}
      style={{ textDecoration: "none" }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="place-details">
        <h4 style={{ fontSize: 16, fontWeight: "bold", marginBottom: 5 }}>
          {place.placeName}
        </h4>
        <img
          src={PHOTO_URL || "/logo.svg"}
          alt={place.placeName}
          style={{
            borderRadius: 20,
            width: "100%",  
            height: "200px",  
            objectFit: "cover",  
            marginBottom: 10,  
          }} />
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
  );
}

export default PlaceCard;
