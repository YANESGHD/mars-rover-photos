export const getRovers = () => ({
  method: 'get',
  url: `${process.env.REACT_APP_NASA_API_URL}api/v1/rovers/curiosity/photos?api_key=${process.env.REACT_APP_NASA_API_KEY}`,
})