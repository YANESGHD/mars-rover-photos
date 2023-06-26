import { FC } from 'react';
import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import { RoverCard } from './RoverCard';
import { useFilterContext, useRoverContext } from '../../contexts';
import { NotFoundMessage } from '../NotFoundMessage';
import { ErrorMessage } from '../ErrorMessage';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Loader } from '../Loader';

export const ListRovers: FC = () => {
  const { fetchRoverImages, roverImages, isLoading, isError, hasMore } = useRoverContext();
  const { page, setPage } = useFilterContext();

  const handleScroll = () => {
    fetchRoverImages(page + 1);
    setPage(page + 1);
  };

  if (!isLoading && isError) {
    return <ErrorMessage message={isError.message} />;
  }

  if (!isLoading && !roverImages?.length) {
    return <NotFoundMessage />;
  }

  return (
    <InfiniteScroll
      dataLength={roverImages?.length}
      next={handleScroll}
      hasMore={hasMore}
      loader={<Loader />}
      endMessage={<></>}
    >
      <Container>
        <Grid container xs={12} justifyContent="space-between">
          {(roverImages)?.map((rover: any) => (
            <Grid item xs={12} sm={6} md={4} key={rover.id}>
              <RoverCard rover={rover} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </InfiniteScroll>
  );
};

const Container = styled.div`
  padding-top: 5px;
`;
