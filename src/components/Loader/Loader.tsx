import { FC } from 'react';
import styled from '@emotion/styled';
import { CircularProgress } from '@mui/material';

export const Loader: FC = () => {
  return (
    <Container>
      <CircularProgress  sx={{ color: 'white', fontSize: 90 }} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;
