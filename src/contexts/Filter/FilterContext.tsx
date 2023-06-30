import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Filters } from '../../interfaces';

interface FilterContextProps {
  filters: Filters;
  setFilters: (filters: Filters) => void;
  page: number;
  setPage: (page: number) => void
}

const FilterContext = createContext<FilterContextProps>({
  filters: {},
  setFilters: () => {},
  page: 1,
  setPage: () => {}
});

interface FilterProviderProps {
  children: ReactNode
}

export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const [filters, setFilters] = useState<Filters>({});
  const [page, setPage] = useState(1);

  const contextValue: FilterContextProps = {
    filters,
    setFilters,
    page,
    setPage
  };

  return (
    <FilterContext.Provider value={contextValue}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => useContext(FilterContext);
