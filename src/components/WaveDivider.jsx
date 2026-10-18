import React from 'react';

export const WaveDivider = ({ type = 'dark-to-white', flip = false }) => {
  return (
    <div className="wave-divider" aria-hidden="true" style={{ width: '100%', overflow: 'hidden', lineHeight: 0, padding: '1.5rem 0' }}>
      <svg
        viewBox="0 0 1440 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ width: '100%', height: '40px', display: 'block' }}
      >
        <path
          d="M0,30 C360,55 720,5 1080,35 C1260,45 1380,25 1440,30"
          stroke="rgba(250, 204, 21, 0.25)"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M0,40 C400,10 800,60 1200,20 C1320,10 1400,30 1440,35"
          stroke="rgba(255, 255, 255, 0.06)"
          strokeWidth="1"
          fill="none"
        />
      </svg>
    </div>
  );
};
