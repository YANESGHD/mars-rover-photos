export const getOpportunityPhotos = () => ({
  method: 'get',
  url: `${process.env.REACT_APP_NASA_API_URL}api/v1/rovers/opportunity/photos?sol=2000&api_key=${process.env.REACT_APP_NASA_API_KEY}`,
})