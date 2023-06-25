import { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { HighlightOff } from '@mui/icons-material';
import { Typography } from '@mui/material';

interface ErrorMessageProps {
  message: string;
};

export const ErrorMessage: FunctionComponent<ErrorMessageProps> = ({ message }) => (
  <Container>
    <HighlightOff sx={{ fontSize: { xs: 60, md: 70 }, marginBottom: '30px' }} />
    <Typography
      variant='h3'
      sx={{
        fontSize: '20px',
        textAlign: 'center',
        paddingBottom: '10px',
      }}
    >
      AN ERROR WAS FOUND
    </Typography>
     <Typography
      variant='h4'
      sx={{
        fontSize: '16px',
        textAlign: 'center',
      }}
    >
      {message}
    </Typography>
  </Container>
);

const Container = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;
