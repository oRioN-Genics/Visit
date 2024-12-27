import React, { useState } from 'react'
import './index.css'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'

function GenerateTrip() {
  const [place, setPlace] = useState();
  return (
    <div className="container">
      <h2>Share Your Travel Interests</h2>
      <p>
        Provide some basic details about your preferences, 
        and our travel planner will suggest destinations and accommodations tailored just for you.
      </p>

      <div style={{marginTop: '2.5rem', display: 'flex', flexDirection: 'column'}}>
        <div>
          <h2 className="choices">What is your dream destination?</h2>
          <GooglePlacesAutocomplete 
            apiKey={ import.meta.env.VITE_GOOGLE_PLACE_API_KEY }
            selectProps={{
              place,
              onChange:(v) => {setPlace(v); console.log(v)}
            }}
          />
        </div>

        <div style={{marginTop: '2.5rem'}}>
          <h2 className="choices">Trip Duration:</h2>
          <input className='input-field' type="number" placeholder='Ex.3' />
        </div>

        <div style={{marginTop: '2.5rem'}}>
          <h2 className="choices">Your Budget Style:</h2>
        </div>
      </div>
    </div>
  )
}

export default GenerateTrip