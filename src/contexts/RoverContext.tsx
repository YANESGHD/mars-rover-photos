import React, { FC, createContext, useEffect, useContext, useState, ReactNode } from 'react';
import { useRoverImages } from '../hooks/useRovers';
import { useQuery, useQueryClient } from 'react-query';
import moment from 'moment';
import axios from 'axios';

interface RoverProviderProps {
  children: ReactNode;
}

interface RoverContextProps {
  roverSelected: string;
  setRoverSelected: (rover: string) => void;
  roverImages: any;
  isLoading: boolean,
  isError: any,
  fetchRoverImages: (payload: any ) => void;
}

const getRoverImagesByFilter = async (rover: string, payload: any = null) => {
  const params: any = {
    api_key: process.env.REACT_APP_NASA_API_KEY,
    ...payload
  }
  if (!params?.earth_date && !params.sol) {
    params.earth_date = moment().format('YYYY-MM-DD');
  }

  const response = await axios({
    method: 'get',
    url: `${process.env.REACT_APP_NASA_API_URL}api/v1/rovers/${rover}/photos`,
    params
  })

  return response.data.photos;
}

const RoverContext = createContext<RoverContextProps>({
  roverSelected: 'curiosity',
  setRoverSelected: () => {},
  roverImages: [],
  isLoading: false,
  isError: '',
  fetchRoverImages: () => {}
});

export const RoverProvider: FC<RoverProviderProps> = ({ children }) => {
  const [roverSelected, setRoverSelected] = useState('curiosity');
  const queryClient = useQueryClient();

  const { data: roverImages, isLoading, error } = useQuery(
    ['roverImages', roverSelected],
    () => getRoverImagesByFilter(roverSelected),
    {
      enabled: false,
    }
  );

  const fetchRoverImages = (payload: any = null) => {
    queryClient.prefetchQuery(['roverImages', roverSelected], () => getRoverImagesByFilter(roverSelected, payload));
  }

  useEffect(() => {
    fetchRoverImages();
  }, [roverSelected]);

  const contextValue = {
    roverSelected,
    setRoverSelected,
    roverImages,
    isLoading,
    isError: error,
    fetchRoverImages
  };

  return (
    <RoverContext.Provider value={contextValue}>
      {children}
    </RoverContext.Provider>
  );
};

export const useRoverContext = () => useContext(RoverContext);
