import { FC, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import moment from 'moment';
import { Dialog } from '@mui/material';
import { useFilterContext, useRoverContext } from '../../contexts';
import { Title, Content, Actions } from '.';

interface IPayload {
  earth_date?: string;
  sol?: string;
  camera?: string
}

interface FiltersProps {
  open: boolean;
  setOpen: (value: boolean) => void
}

export const FiltersModal: FC<FiltersProps> = ({ open, setOpen }) => {
  const [dateTypeSelected, setDateTypeSelected] = useState('Earth Date');
  const [earthValueEntered, setEarthValueEntered] = useState<any>(null);
  const [solValueEntered, setSolValueEntered] = useState<string>('');
  const [cameraSelected, setCameraSelected] = useState('');
  const { roverSelected } = useRoverContext();
  const { setFilters } = useFilterContext();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const payload: IPayload = {};

    if (cameraSelected) {
      payload.camera = cameraSelected.toLowerCase();
    }

    if (dateTypeSelected === 'Earth Date' && earthValueEntered?.$d) {
      payload.earth_date = moment(earthValueEntered.$d).format('YYYY-MM-DD');
    }

    if (dateTypeSelected === 'Sol Date' && solValueEntered) {
      payload.sol = solValueEntered;
    }

    setFilters(payload);
    setOpen(false);
  };

  useEffect(() => {
    setEarthValueEntered(null);
    setSolValueEntered('');
    setCameraSelected('');
  }, [roverSelected]);

  return (
    <>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <Container>
          <Title
            dateTypeSelected={dateTypeSelected}
            setDateTypeSelected={setDateTypeSelected}
          />
          <Content
            roverSelected={roverSelected}
            dateTypeSelected={dateTypeSelected}
            earthValueEntered={earthValueEntered}
            setEarthValueEntered={setEarthValueEntered}
            solValueEntered={solValueEntered}
            setSolValueEntered={setSolValueEntered}
            cameraSelected={cameraSelected}
            setCameraSelected={setCameraSelected}
          />
          <Actions setOpen={setOpen} handleSubmit={handleSubmit} />
        </Container>
      </Dialog>
    </>
  );
};

const Container = styled.div`
  background-color: #FDECEF;
`;
