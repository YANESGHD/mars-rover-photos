import { FC, useEffect } from 'react';
import axios from 'axios';
import { getRovers } from './resources'; 

export const Home: FC = () => {
  useEffect(() => {
    axios(getRovers())
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
  }, [])

  return (
    <>
      <>Curiosity</>
      <>Opportunity</>
      <>Spirit</>
    </>
  )
};
