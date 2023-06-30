import { createContext, useContext, useState, useEffect, FC, ReactNode } from 'react';
import { Photo } from '../../interfaces';

interface BookmarkContextProps {
  bookmarks: Photo[];
  toggleBookmark: (rover: Photo) => void;
  validateBookmark: (rover: Photo) => boolean
}

export const BookmarkContext = createContext<BookmarkContextProps>({
  bookmarks: [],
  toggleBookmark: (rover: Photo) => {},
  validateBookmark: (rover: Photo) => false
});

interface BookmarkProviderProps {
  children: ReactNode
}

export const BookmarkProvider: FC<BookmarkProviderProps> = ({ children }) => {
  const [bookmarks, setBookmarks] = useState<Photo[]>([]);

  const toggleBookmark = (rover: Photo) => {
    const bookmarkExists = validateBookmark(rover);

    if (bookmarkExists) {
      removeBookmark(rover);
    } else {
      addBookmark(rover);
    }
  };

  const validateBookmark = (rover: Photo) => {
    const bookmarkExists = bookmarks.some((bookmark) => bookmark.id === rover.id);
    return bookmarkExists;
  };

  const addBookmark = (rover: Photo) => {
    setBookmarks((prevBookmarks) => [...prevBookmarks, rover]);
  };

  const removeBookmark = (rover: Photo) => {
    setBookmarks((prevBookmarks) => prevBookmarks.filter((bookmark) => bookmark.id !== rover.id));
  };

  useEffect(() => {
    const storedBookmarks = localStorage.getItem('bookmarks');
    if (storedBookmarks) {
      setBookmarks(JSON.parse(storedBookmarks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const contextValue: BookmarkContextProps = {
    bookmarks,
    toggleBookmark,
    validateBookmark
  };

  return (
    <BookmarkContext.Provider value={contextValue}>
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarkContext = () => useContext(BookmarkContext);
