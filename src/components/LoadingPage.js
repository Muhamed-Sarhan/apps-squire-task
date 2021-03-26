import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import * as welcome from '../46837-welcome.json';
import Login from './Login';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: welcome.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

function LoadingPage() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div>
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
    </div>
  );
}

export default LoadingPage;
