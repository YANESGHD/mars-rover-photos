import { FC } from 'react';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { useBookmarkContext } from '../../contexts';
import { ListPhotos } from '../../components';

export const Bookmarks: FC = () => {
  const { bookmarks } = useBookmarkContext();

  return (
    <Container>
      <Typography variant='h5' sx={{
        fontSize: '24px',
        color: 'white',
        paddingBottom: '20px'
      }}>
        Bookmarks
      </Typography>
      <ListPhotos photos={bookmarks} />
    </Container>
  );
};

const Container = styled.div`
  padding: 15px 20px;

  @media (min-width: 668px) {
    padding: 30px 60px;
  }
`;
