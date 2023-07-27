import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      window.location.href = 'http://localhost:3000';
    }, 2000);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(redirectTimeout);
  }, [navigate]);

  return (
    <div>
      <h1>Redirecting...</h1>
      <p>You will be redirected to Netflix Clone in 2 seconds.</p>
    </div>
  );
};

export default App;
