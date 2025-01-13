import React from "react";
import "./info.css";

function Info({ trip }) {
  return (
    <div style={{ paddingBottom: 20 }}>
      <div className="info-container">
        <img src="/logo.svg" alt="Logo" className="info-image" />
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
