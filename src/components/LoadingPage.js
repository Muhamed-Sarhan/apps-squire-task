import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import { Redirect } from 'react-router-dom';
import * as welcome from '../images/46837-welcome.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: welcome.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

function LoadingPage({ setIsLoading }) {
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 4000);
  }, []);
  return (
    <div>
      <Lottie
        options={defaultOptions}
        style={{ marginTop: '8%' }}
        height={400}
        width={400}
      />
    </div>
  );
}

export default LoadingPage;
