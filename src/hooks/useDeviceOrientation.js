import {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';

const useDeviceOrientation = () => {
  const [deviceOrientation, setDeviceOrientation] = useState(null);

  useEffect(() => {
    const updateState = () => {
      const {height, width} = Dimensions.get('window');
      if (height >= width) {
        setDeviceOrientation('portrait');
      } else {
        setDeviceOrientation('landscape');
      }
    };

    updateState(); // for initial render
    Dimensions.addEventListener('change', updateState);
    return () => Dimensions.removeEventListener('change', updateState);
  }, []);

  return deviceOrientation;
};

export default useDeviceOrientation;
