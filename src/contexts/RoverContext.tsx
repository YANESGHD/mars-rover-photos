import React, { FC, createContext, useEffect, useContext, useState, ReactNode } from 'react';
import moment from 'moment';
import axios from 'axios';
import { useFilterContext } from './FilterContext';

interface RoverProviderProps {
  children: ReactNode
}

interface RoverContextProps {
  roverSelected: string;
  setRoverSelected: (rover: string) => void;
  roverImages: any;
  isLoading: boolean;
  isError: any;
  hasMore: boolean;
  fetchRoverImages: (payload: any) => void
}

const RoverContext = createContext<RoverContextProps>({
  roverSelected: 'curiosity',
  setRoverSelected: () => {},
  roverImages: [],
  isLoading: false,
  isError: '',
  hasMore: true,
  fetchRoverImages: () => {}
});

const getRoverImagesByFilter = async (rover: string, payload: any = null, page: number) => {
  const params: any = {
    page: page || 1,
    api_key: process.env.REACT_APP_NASA_API_KEY,
    ...payload
  };

  if (!params?.earth_date && !params.sol) {
    params.earth_date = moment().format('YYYY-MM-DD');
  }

  const response = await axios({
    method: 'get',
    url: `${process.env.REACT_APP_NASA_API_URL}api/v1/trovers/${rover}/photos`,
    params
  });

  return response.data.photos;
};

export const RoverProvider: FC<RoverProviderProps> = ({ children }) => {
  const [roverSelected, setRoverSelected] = useState('curiosity');
  const [roverImages, setRoverImages] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [hasMore, setHasMore] = useState(true);

  const { filters, setFilters, setPage } = useFilterContext();

  const fetchRoverImages = async (page: any = null) => {
    setIsLoading(true);
    setError(null);

    try {
      const images = await getRoverImagesByFilter(roverSelected, filters, page);
      setRoverImages((prevState: any) => [...prevState, ...images]);
      setHasMore(images.length === 25);
    } catch (error) {
      setError(error);
    }

    setIsLoading(false);
  };

  const handleRoverChange = (rover: any) => {
    setRoverSelected(rover);
    setFilters({});
    setPage(1);
  };

  useEffect(() => {
    setRoverImages([]);
    fetchRoverImages();
  }, [roverSelected, filters]);

  const contextValue: RoverContextProps = {
    roverSelected,
    setRoverSelected: handleRoverChange,
    roverImages,
    isLoading,
    isError: error,
    hasMore,
    fetchRoverImages
  };

  return (
    <RoverContext.Provider value={contextValue}>
      {children}
    </RoverContext.Provider>
  );
};

export const useRoverContext = () => useContext(RoverContext);
