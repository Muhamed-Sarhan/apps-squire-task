import React from 'react';
import Lottie from 'react-lottie';
import * as notFound from '../images/43391-404-error-page-not-found-confused-robot.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: notFound.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

function NotFound() {
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

export default NotFound;
