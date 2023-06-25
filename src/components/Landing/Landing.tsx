import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';
import mars from '../../assets/mars.jpg';

export const Landing: FC = () => {
  return (
    <>
      <Image src={mars} />
      {/* <Typography
        variant="h6"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          fontSize: '24px',
          fontWeight: 'bold',
          letterSpacing: '.3rem',
          textAlign: 'center',
        }}
      >
        Explore Mars
      </Typography> */}
    </>
  );
};

const Container = styled(Box)`
  position: relative;
  width: 100%;
  max-height: 210px;
`;

const Image = styled.img`
  width: 100%;
  max-height: 500px;
`;
