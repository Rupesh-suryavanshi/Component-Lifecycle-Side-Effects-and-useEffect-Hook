import React, { useEffect, useState } from 'react';

const ScrollComponent = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <h1>Scroll Position: {scrollPosition}px</h1>
      <div style={{ height: '200vh' }}>
        Scroll down to see the effect
      </div>
    </div>
  );
};

export default ScrollComponent;
