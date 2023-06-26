import { FC, useState } from 'react';
import styled from '@emotion/styled';
import { DetailsModal } from './DetailsModal';

interface PhotoCardProps {
  photo: any
}

export const PhotoCard: FC<PhotoCardProps> = ({ photo }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <Container>
        <Image src={photo.img_src} onClick={() => setShowDetails(true)} />
      </Container>
      <DetailsModal
        open={showDetails}
        setOpen={setShowDetails}
        details={photo}
      />
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
  width: 250px;
  height: 250px;
  border-radius: 14px;

  @media (min-width: 1090) {
    width: 340px
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px #bb3896;
    transform: scale(1.02);
  }
`;