import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Info from './components/info.jsx';
import Hotels from './components/hotels.jsx'
import './index.css';

function ViewTrip() {
    const { tripID } = useParams();
    const [ trip, setTrip ] = useState([]);

    const GetTripData = async (tripID) => {
        try {
            const response = await axios.get(`http://localhost:5000/view_trip/${tripID}`);
            console.log(response?.data); 
            setTrip(response?.data);
        } catch (error) {
            console.error("Error fetching trip data:", error);
        }
    };

    useEffect(() => {
        if (tripID) {
            GetTripData(tripID);
        }
    }, [tripID]);

    return (
        <div className='container'>
            {/* Information section */}
                <Info trip={trip}/>
            {/* Recommended hotels */}
                <Hotels trip={trip}/>
            {/* Itinerary */}
        </div>
    );
}

export default ViewTrip;
