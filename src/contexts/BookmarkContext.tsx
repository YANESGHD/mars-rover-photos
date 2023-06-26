import { createContext, useContext, useState, useEffect, FC, ReactNode } from 'react';

interface Bookmark {
  id: number;
  imageUrl: string
}

interface BookmarkContextProps {
  bookmarks: any[];
  toggleBookmark: (rover: any) => void;
  validateBookmark: (rover: any) => boolean
}

export const BookmarkContext = createContext<BookmarkContextProps>({
  bookmarks: [],
  toggleBookmark: (rover: any) => {},
  validateBookmark: (rover: any) => false
});

interface BookmarkProviderProps {
  children: ReactNode
}

export const BookmarkProvider: FC<BookmarkProviderProps> = ({ children }) => {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

  const toggleBookmark = (rover: any) => {
    const bookmarkExists = validateBookmark(rover);

    if (bookmarkExists) {
      removeBookmark(rover);
    } else {
      addBookmark(rover);
    }
  };

  const validateBookmark = (rover: any) => {
    const bookmarkExists = bookmarks.some((bookmark) => bookmark.id === rover.id);
    return bookmarkExists;
  };

  const addBookmark = (rover: any) => {
    setBookmarks((prevBookmarks) => [...prevBookmarks, rover]);
  };

  const removeBookmark = (rover: any) => {
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
