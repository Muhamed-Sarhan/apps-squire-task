import React from 'react';
import Lottie from 'react-lottie';
import * as load from '../images/8311-loading.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: load.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

function Spinner() {
  return (
    <div>
      <Lottie
        options={defaultOptions}
        style={{ marginTop: '8%' }}
        height={200}
        width={200}
      />
    </div>
  );
}

export default Spinner;
