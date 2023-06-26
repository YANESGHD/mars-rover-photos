import { FC } from 'react';
import { Selector, ListRovers } from '../../components';
import styled from '@emotion/styled';

export const Home: FC = () => {
  return (
    <Container>
      <Selector />
      <ListRovers />
    </Container>
  );
};

const Container = styled.div`
  padding: 0 60px;
`;
