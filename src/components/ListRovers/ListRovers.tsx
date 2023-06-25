import { FC } from 'react';
import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import { RoverCard } from './RoverCard';
import { useRoverContext } from '../../contexts';
import { NotFoundMessage } from '../NotFoundMessage';
import { ErrorMessage } from '../ErrorMessage';
import { Loader } from '../Loader';

export const ListRovers: FC = () => {
  const { roverImages, isLoading, isError } = useRoverContext();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorMessage message={isError.message} />;
  }

  if (!roverImages?.length) {
    return <NotFoundMessage />;
  }

  return (
    <Container>
        <Grid container xs={12} justifyContent="space-between">
          {(roverImages)?.map((rover: any) => (
            <Grid item xs={12} sm={6} md={4} key={rover.id}>
              <RoverCard rover={rover} />
            </Grid>
          ))}
        </Grid>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 5px;
`;
