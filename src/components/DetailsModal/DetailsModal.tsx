import { FC } from 'react';
import { Typography, Dialog, IconButton } from '@mui/material';
import { BookmarkBorder, Bookmark } from '@mui/icons-material';
import styled from '@emotion/styled';
import { useBookmarkContext } from '../../contexts';

interface DetailsModalProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  details: any
}

export const DetailsModal: FC<DetailsModalProps> = ({ open, setOpen, details }) => {
  const { validateBookmark, toggleBookmark } = useBookmarkContext();

  const handleBookmarkedImage = () => {
    toggleBookmark(details);
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <Container>
        <Image src={details.img_src} alt="Image" />
        <TextContainer>
          <Typography variant="body1">{`Earth Date: ${details.earth_date}`}</Typography>
          <Typography variant="body1">{`Sol Date: ${details.sol}`}</Typography>
          <Typography variant="body1">{`Camera: ${details.camera.full_name}`}</Typography>
        </TextContainer>
        <BookmarkButton onClick={handleBookmarkedImage}>
          {validateBookmark(details) ? <Bookmark sx={{ color: '#FFD000', fontSize: 35 }} /> : <BookmarkBorder sx={{ fontSize: 35 }} />}
        </BookmarkButton>
      </Container>
    </Dialog>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  background-color: #fdecef;
`;

const TextContainer = styled.div`
  padding-top: 5px;
  width: 100%;
  align-items: left;
`;

const Image = styled.img`
  width: 250px;
  height: 250px;

  @media (min-width: 668px) {
    width: 400px;
  }
`;

const BookmarkButton = styled(IconButton)`
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 4px;
`;
