import { FC } from 'react';
import { Button, ButtonGroup, DialogTitle } from '@mui/material';
import styled from '@emotion/styled';
import { dateTypes } from '../../../constants';

interface TitleProps {
  dateTypeSelected: string;
  setDateTypeSelected: (value: string) => void
}

export const Title: FC<TitleProps> = ({
  dateTypeSelected,
  setDateTypeSelected
}) => {
  return (
    <DialogTitle
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <ButtonGroup color="secondary">
        {dateTypes.map((type) => (
          <StyledButton
            key={type}
            isSelected={type === dateTypeSelected}
            onClick={() => setDateTypeSelected(type)}
          >
            {type}
          </StyledButton>
        ))}
      </ButtonGroup>
    </DialogTitle>
  );
};

const StyledButton = styled(Button)<{ isSelected: boolean }>`
  height: 30px;
  width: 100px;
  border-radius: 19px;
  padding: 10px;
  font-size: 12px;
  box-shadow: 20px;
  border-color: black !important;
  color: ${({ isSelected }) => (isSelected ? 'white' : 'black')} !important;
  background-color: ${({ isSelected }) =>
    isSelected ? '#BB3896' : '#FDECEF'} !important;
`;
