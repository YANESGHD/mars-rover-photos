import { FC } from 'react';
import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import { PhotoCard } from './';
import { Photo } from '../../interfaces';

interface ListPhotosProps {
  photos: Photo[]
}

export const ListPhotos: FC<ListPhotosProps> = ({ photos }) => {
  return (
    <Container>
      <Grid container xs={12}>
        {photos?.map((photo: Photo) => (
          <Grid item xs={12} sm={6} md={3} key={photo.id}>
            <PhotoCard photo={photo} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 5px;
`;
