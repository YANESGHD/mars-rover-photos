import { FC, createContext, useEffect, useContext, useState, ReactNode } from 'react';
import moment from 'moment';
import axios from 'axios';
import { useFilterContext } from './FilterContext';
import { Photo, Filters } from '../interfaces';

interface RoverProviderProps {
  children: ReactNode
}

interface RoverContextProps {
  roverSelected: string;
  setRoverSelected: (rover: string) => void;
  roverImages: Photo[];
  isLoading: boolean;
  isError: any;
  hasMore: boolean;
  fetchRoverImages: (page: number | null) => void
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

const getRoverImagesByFilter = async (rover: string, filters: Filters, page: number | null) => {
  const params = {
    page: page ?? 1,
    api_key: process.env.REACT_APP_NASA_API_KEY,
    ...filters
  };

  if (!params?.earth_date && !params.sol) {
    params.earth_date = moment().format('YYYY-MM-DD');
  }

  const response = await axios({
    method: 'get',
    url: `${process.env.REACT_APP_NASA_API_URL}api/v1/rovers/${rover}/photos`,
    params
  });

  return response.data.photos;
};

export const RoverProvider: FC<RoverProviderProps> = ({ children }) => {
  const [roverSelected, setRoverSelected] = useState('curiosity');
  const [roverImages, setRoverImages] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [hasMore, setHasMore] = useState(true);

  const { filters, setFilters, setPage } = useFilterContext();

  const fetchRoverImages = async (page: number | null = null) => {
    setIsLoading(true);
    setError(null);

    try {
      const images = await getRoverImagesByFilter(roverSelected, filters, page);
      setRoverImages((prevState: Photo[]) => [...prevState, ...images]);
      setHasMore(images.length === 25);
    } catch (error) {
      setError(error);
    }

    setIsLoading(false);
  };

  const handleRoverChange = (rover: string) => {
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
