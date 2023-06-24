import { FC, useEffect } from 'react';
import axios from 'axios';
import { getSpiritPhotos } from './resources';

export const Spirit: FC = () => {
  useEffect(() => {
    axios(getSpiritPhotos())
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
  }, []);

  return (
    <>Spirit</>
  );
};
