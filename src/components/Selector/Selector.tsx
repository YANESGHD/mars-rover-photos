import { FC, useState } from 'react';
import styled from '@emotion/styled';
import { ButtonGroup, Button, IconButton } from '@mui/material';
import { Tune } from '@mui/icons-material';
import { rovers } from '../../constants';
import { useRoverContext } from '../../contexts';
import { Filters } from '../';

export const Selector: FC = () => {
  const { roverSelected, setRoverSelected } = useRoverContext();
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Container>
        <ButtonGroup color="secondary" aria-label="medium secondary button group">
          {rovers.map((rover) => (
            <StyledButton 
              key={rover}
              isSelected={rover === roverSelected}
              onClick={() => setRoverSelected(rover)}>
              {rover}
            </StyledButton>
          ))}
        </ButtonGroup>
        <IconButton onClick={() => setOpenModal(true)}>
          <Tune sx={{ color: 'white', fontSize: '30px' }} />
        </IconButton>
      </Container>

      <Filters open={openModal} setOpen={setOpenModal} />
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: #0F110C;
`;

const StyledButton = styled(Button)<{ isSelected: boolean }>`
  height: 30px;
  width: 100px;
  border-radius: 19px;
  padding: 10px;
  font-size: 12px;
  box-shadow: 20px;
  background-color: ${({ isSelected }) => (isSelected ? '#BB3896' : '#0F110C')} !important;
`;
