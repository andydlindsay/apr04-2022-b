import {useState, useEffect} from 'react';

const useMousePosition = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event) => {
      setCoords({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener('mousemove', handleMove);

    const cleanup = () => {
      document.removeEventListener('mousemove', handleMove);
    };

    return cleanup;
  }, []);

  return coords;
};

export default useMousePosition;
