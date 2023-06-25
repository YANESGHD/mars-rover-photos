import { useQuery } from 'react-query';
import axios from 'axios';
import moment from 'moment';

const getRoverImages = (rover: string) => {
  const currentDate = moment().format('YYYY-MM-DD');

  return axios({
    method: 'get',
    url: `${process.env.REACT_APP_NASA_API_URL}api/v1/weddbrovers/${rover}/photos?earth_date=${currentDate}&api_key=${process.env.REACT_APP_NASA_API_KEY}`,
  })
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
}

export const useRoverImages = (roverSelected: string) => {
  const {
    data: roverImages,
    error,
    isLoading,
    isSuccess,
    isError,
    refetch
  } = useQuery(`${roverSelected} rover`, () => getRoverImages(roverSelected));

  return {
    roverImages,
    error,
    isLoading,
    isError,
    isSuccess,
  };
}
