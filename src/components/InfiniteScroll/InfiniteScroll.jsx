import { useEffect } from 'react';

const InfiniteScroll = ({ onScrollEnd }) => {
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      if (position >= maxScroll) {
        onScrollEnd();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [onScrollEnd]);

  return null;
};

export default InfiniteScroll;
