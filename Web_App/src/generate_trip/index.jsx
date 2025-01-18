import React, { useEffect, useState } from 'react'
import './index.css'
import axios from "axios";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { AI_PROMPT, SelectBudgetStyles, SelectTravelsList } from '../constants/options';
import Toast from '../components/Toast';
import { chatSession } from '../AI/AI_model';
import { useNavigate } from 'react-router-dom';


function GenerateTrip() {
  const [place, setPlace] = useState();

  const [formData, setFormData] = useState([]);
  const [toastMessage, setToastMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    })
  }

  useEffect(() => {
    console.log(formData);
  }, [formData])


  const OnGenerateTrip=async()=>{
    // if (!isSignedIn) {
    //   if (!toastMessage) {
    //     setToastMessage('Please sign in to generate a trip!');
    //   }
    //   navigate('/signin'); // Redirect to sign-in page
    //   return;
    // }

    if (!formData?.duration||!formData?.place||!formData?.budget||!formData?.traveling_with) {
      setToastMessage('Please fill out the entire form!');
      return;
    }
  
    if (formData?.duration > 10) {
      setToastMessage('The duration is too long. Please enter a shorter trip duration.');
      return;
    }

    setLoading(true);

    const PROMPT = AI_PROMPT
    .replace('{place}', formData?.place?.label)
    .replace('{duration}', formData?.duration)
    .replace('{budget}', formData?.budget)
    .replace('{traveling_with}', formData?.traveling_with?.title)
    .replace('{numOfPeople}', formData?.traveling_with?.people)

    console.log(PROMPT);

    // const result = await chatSession.sendMessage(PROMPT);
    // SaveGeneratedTrip(result?.response?.text());

    // console.log(result?.response?.text());
    try {
      const result = await chatSession.sendMessage(PROMPT);
      await SaveGeneratedTrip(result?.response?.text()); // Wait for saving to complete
    } catch (error) {
      console.error('Error generating trip:', error);
      setToastMessage('An error occurred while generating the trip.');
    } finally {
      setLoading(false); // stop loading
    }
  }

  const SaveGeneratedTrip = async (trip) => {
      try {
      const token = localStorage.getItem("authToken"); 
  
      const response = await axios.post("http://localhost:5000/api/travelPlans", {
        trip,
        userSelection: formData,
      }, {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });
  
      console.log("Trip saved successfully:", response.data);

      setToastMessage("Trip saved successfully!");

      navigate(`/view_trip/${response.data._id}`);
      
    } catch (error) {
      console.error("Error saving the trip:", error);
      setToastMessage("Error saving the trip. Please try again.");
    }
  };
  

  return (
    <div className="container">
    <h2>Share Your Travel Interests 🏖️</h2>
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
            onChange:(v) => {setPlace(v); handleInputChange('place', v)}
          }}
        />
      </div>

      <div style={{marginTop: '2.5rem'}}>
        <h2 className="choices">Trip Duration:</h2>
        <input className='input-field' type="number" placeholder='Ex.3' 
          onChange={(e) => handleInputChange('duration', e.target.value)} 
        />
      </div>

      <div style={{marginTop: '2.5rem'}}>
        <h2 className="choices">Your Budget Style:</h2>
        <div style={{display: 'grid',       
                      gridTemplateColumns: 'repeat(3, 1fr)', 
                      gap: '1.25rem',        
                      marginTop: '1.25rem',}}>
          {SelectBudgetStyles.map((item, index) => (
            <div key={index}
              onClick={() => handleInputChange('budget', item.title)}
            className={`choice-options ${formData?.budget === item.title ? 'selected' : ''}`}>
              <h3 style={{ fontSize: '2.25rem', lineHeight: '2.5rem', marginTop:'0.1rem' }}>{item.icon}</h3>
              <h3 style={{ fontWeight: 'bold', fontSize: '1.125rem', lineHeight: '1.70rem', marginTop:'0.01rem' }}>{item.title}</h3>
              <h3 style={{ fontSize: '0.875rem', color: '#6B7280', marginTop:'0.02rem', marginBottom:'0.2rem' }}>{item.desc}</h3>
            </div>
          ))}
        </div>
      </div>

      
      <div style={{marginTop: '2.5rem'}}>
        <h2 className="choices">Who are you traveling with?</h2>
        <div style={{display: 'grid',       
                      gridTemplateColumns: 'repeat(3, 1fr)', 
                      gap: '1.25rem',        
                      marginTop: '1.25rem',}}>
          {SelectTravelsList.map((item, index) => (
            <div key={index}
            onClick={() => handleInputChange('traveling_with', {title: item.title, people: item.people})}
            className={`choice-options ${formData?.traveling_with?.title === item.title ? "selected" : ""}`}>
              <h3 style={{ fontSize: '2.25rem', lineHeight: '2.5rem', marginTop:'0.1rem' }}>{item.icon}</h3>
              <h3 style={{ fontWeight: 'bold', fontSize: '1.125rem', lineHeight: '1.70rem', marginTop:'0.01rem' }}>{item.title}</h3>
              <h3 style={{ fontSize: '0.875rem', color: '#6B7280', marginTop:'0.02rem', marginBottom:'0.2rem' }}>{item.desc}</h3>
            </div>
          ))}
        </div>
      </div>

    </div>

      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <button onClick={OnGenerateTrip} 
                style={{marginTop: '20px'}}
                disabled={loading}>
                  {loading ? 'Generating...' : 'Generate Trip'}
        </button>
        <Toast message={toastMessage} 
                onClose={() => setToastMessage('')} />
      </div>
    
    </div>
  )
}

export default GenerateTrip