import React, { useEffect, useState } from "react";
import "./info.css";
import { GetPlaceDetails, PHOTO_REF_URL } from "../../../AI/GlobalApi";


function Info({ trip }) {
  const [PHOTO_URL, setPHOTO_URL]=useState();

  useEffect(() => {
    trip && GetPlacePhoto();
  }, [trip]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: trip?.userSelection?.place?.label,
    };

    const result = await GetPlaceDetails(data).then((resp) => {
      console.log(resp.data.places[0].photos[2].name);

      const PHOTO_URL = PHOTO_REF_URL.replace('{NAME}', resp.data.places[0].photos[2].name);
      setPHOTO_URL(PHOTO_URL);
    });
  };

  return (
    <div style={{ paddingBottom: 20, paddingTop: 20 }}>
      <div className="info-container">
        <img src={PHOTO_URL || "/logo.svg"} alt="Logo" className="info-image" />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "left",
          alignItems: "left",
          marginBottom: 10,
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: 24,
            color: "#333",
            textAlign: "center",
          }}
        >
          {trip?.userSelection?.place?.label}
        </h2>
      </div>

      {/* Row for Duration, Budget, and Traveling With */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "left",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div
          style={{
            padding: "5px 15px",
            backgroundColor: "#e2e8f0",
            borderRadius: "9999px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img src="/calendar.png" className="icons" />
          <h2
            style={{
              margin: 0,
              color: "#6b7280",
              fontSize: 15,
            }}
          >
            {trip?.userSelection?.duration} Day
          </h2>
        </div>
        <div
          style={{
            padding: "5px 15px",
            backgroundColor: "#e2e8f0",
            borderRadius: "9999px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img src="/coins.png" className="icons" style={{ opacity: 0.55 }} />
          <h2
            style={{
              margin: 0,
              color: "#6b7280",
              fontSize: 15,
            }}
          >
            {trip?.userSelection?.budget} Budget
          </h2>
        </div>
        <div
          style={{
            padding: "5px 15px",
            backgroundColor: "#e2e8f0",
            borderRadius: "9999px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img src="/people.png" className="icons" style={{ opacity: 0.65 }} />
          <h2
            style={{
              margin: 0,
              color: "#6b7280",
              fontSize: 15,
            }}
          >
            {trip?.userSelection?.traveling_with?.title}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Info;
