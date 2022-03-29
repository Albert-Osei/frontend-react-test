import React, { useEffect } from 'react';
import './App.css';
import Api from "./api";

function App() {
  const getPatientMood = async () => {
    const response = await Api.get('/todayMood');
    return response;
  }

  useEffect(() => {
    const fetchPatientMood = async () => {
      const res = getPatientMood()
      console.log(res)
    }
    fetchPatientMood()
  }, [])


  return (
    <div className="App">
      {/* Will render patient mood json data here */}
    </div>
  );
}

export default App;
