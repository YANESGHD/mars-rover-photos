import { FC, useEffect } from 'react';
import axios from 'axios';
import { getOpportunityPhotos } from './resources';

export const Opportunity: FC = () => {
  useEffect(() => {
    axios(getOpportunityPhotos())
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
  }, []);

  return (
    <>Opportunity</>
  );
};
