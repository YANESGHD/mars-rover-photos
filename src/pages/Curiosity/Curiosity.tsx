import { FC, useEffect } from 'react';
import axios from 'axios';
import { getCuriosityPhotos } from './resources';

export const Curiosity: FC = () => {
  useEffect(() => {
    axios(getCuriosityPhotos())
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
  }, []);

  return (
    <>Curiosity</>
  );
};
