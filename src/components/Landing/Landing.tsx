import { FC } from 'react';
import styled from '@emotion/styled';
import mars from '../../assets/mars.jpg';

export const Landing: FC = () => {
  return (
    <Image src={mars} />
  );
};

const Image = styled.img`
  width: 100%;
  max-height: 500px;
`;
