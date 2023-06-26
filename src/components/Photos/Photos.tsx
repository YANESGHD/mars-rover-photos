import { FC } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useFilterContext, useRoverContext } from '../../contexts';
import { NotFoundMessage, ErrorMessage } from '../';
import { Loader } from '../Loader';
import { ListPhotos } from './ListPhotos';

export const Photos: FC = () => {
  const { fetchRoverImages, roverImages, isLoading, isError, hasMore } =
    useRoverContext();
  const { page, setPage } = useFilterContext();

  const handleScroll = () => {
    fetchRoverImages(page + 1);
    setPage(page + 1);
  };

  if (!isLoading && isError) {
    return <ErrorMessage message={isError.message} />;
  }

  if (!isLoading && !roverImages?.length) {
    return <NotFoundMessage />;
  }

  return (
    <InfiniteScroll
      dataLength={roverImages?.length}
      next={handleScroll}
      hasMore={hasMore}
      loader={<Loader />}
      endMessage={<></>}
    >
      <ListPhotos photos={roverImages}/>
    </InfiniteScroll>
  );
};
