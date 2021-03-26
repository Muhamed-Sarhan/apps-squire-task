import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import * as welcome from './46837-welcome.json';
import Login from './components/Login';
import './App.css';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: welcome.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <main className='container'>
      {loading ? (
        <Lottie
          options={defaultOptions}
          style={{ marginTop: '8%' }}
          height={400}
          width={400}
        />
      ) : (
        <Login />
      )}
    </main>
  );
}

export default App;
