import { FC } from 'react';
import styled from '@emotion/styled';
import { Selector, Photos } from '../../components';

export const Home: FC = () => {
  return (
    <Container>
      <Selector />
      <Photos />
    </Container>
  );
};

const Container = styled.div`
  padding: 0 10px;

  @media (min-width: 668px) {
    padding: 0 60px;
  }
`;
