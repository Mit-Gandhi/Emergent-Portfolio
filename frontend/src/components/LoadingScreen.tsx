import React from 'react';
import { OrbitalLoader } from './ui/orbital-loader';

const LoadingScreen = ({ message = "Loading..." }) => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-95 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="text-center">
        <OrbitalLoader 
          message={message}
          messagePlacement="bottom"
          className="text-green-500"
        />
      </div>
    </div>
  );
};

export default LoadingScreen;