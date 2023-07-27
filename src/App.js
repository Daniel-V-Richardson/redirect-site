import React, { useEffect } from 'react';
import "./App.css"
import { useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      window.location.href = 'http://localhost:3000';
    }, 1000);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(redirectTimeout);
  }, [navigate]);

  return (
    <div className='App'>
      <h1>Redirecting to Netflix Please wait...</h1>
      
    </div>
  );
};

export default App;
