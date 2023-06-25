import { FC } from 'react';
import { Typography, Dialog } from '@mui/material';
import { styled } from '@mui/system';

interface DetailsModalProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  details: any;
}

export const DetailsModal: FC<DetailsModalProps> = ({ open, setOpen, details }) => {
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <Container>
        <Image src={details.img_src} alt="Image" />
        <Typography variant="body1">{`Earth Date: ${details.earth_date}`}</Typography>
        <Typography variant="body1">{`Sol Date: ${details.sol}`}</Typography>
        <Typography variant="body1">{`Camera: ${details.camera.full_name}`}</Typography>
      </Container>
    </Dialog>
  );
};

const Container = styled('div')`
  padding: 10px;
  background-color: #FDECEF;
`;

const Image = styled('img')`
  width: 100%;
  height: 250px;

  @media (min-width: 668px) {
    width: 400px;
  }
`;
