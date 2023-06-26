import { FC } from 'react';
import { Selector, ListPhotos } from '../../components';
import styled from '@emotion/styled';

export const Home: FC = () => {
  return (
    <Container>
      <Selector />
      <ListPhotos />
    </Container>
  );
};

const Container = styled.div`
  padding: 0 60px;
`;
