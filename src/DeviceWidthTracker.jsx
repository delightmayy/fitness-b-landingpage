import React, { useState, useEffect } from 'react';

const DeviceWidthTracker = () => {
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setDeviceWidth(window.innerWidth);
    };

    // Add event listener to window resize
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array to run effect only once on component mount

  return (
    <div>
      <h1>Device Width: {deviceWidth}px</h1>
    </div>
  );
};

export default DeviceWidthTracker;
