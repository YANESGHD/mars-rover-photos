import { FC } from 'react';
import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import { PhotoCard } from '../../../components/ListPhotos/PhotoCard';

interface ListBookmarksProps {
  roverImages: any[]
}

export const ListBookmarks: FC<ListBookmarksProps> = ({ roverImages }) => {
  return (
    <Container>
      <Grid container xs={12}>
        {roverImages?.map((rover: any) => (
          <Grid item xs={12} sm={6} md={4} key={rover.id}>
            <PhotoCard photo={rover} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 5px;
`;
