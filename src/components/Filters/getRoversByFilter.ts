import axios from 'axios';
import moment from 'moment';

const getRoverImagesByFilter = (rover: string, payload: any = null) => {
  const params: any = {
    api_key: process.env.REACT_APP_NASA_API_KEY,
    ...payload
  }
  if (!params?.earth_date && !params.sol) {
    params.earth_date = moment().format('YYYY-MM-DD');
  }

  return {
    method: 'get',
    url: `${process.env.REACT_APP_NASA_API_URL}api/v1/weddbrovers/${rover}/photos}`,
    params
  }
}