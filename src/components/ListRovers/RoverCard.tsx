import { FC, useState } from 'react';
import styled from '@emotion/styled';
import { DetailsModal } from './DetailsModal';

interface RoverCardProps {
  rover: any
}

export const RoverCard: FC<RoverCardProps> = ({ rover }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <Container>
        <Image src={rover.img_src} onClick={() => setShowDetails(true)}/>
      </Container>
      <DetailsModal open={showDetails} setOpen={setShowDetails} details={rover} />
    </>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
  transition: box-shadow 0.3s ease-in-out;
`;

const Image = styled.img`
  width: 340px;
  height: 250px;
  border-radius: 14px;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px #BB3896;
    transform: scale(1.02);
  }
`;
