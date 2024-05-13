import { Outlet } from 'react-router-dom';
// import Header from '../Header/Header';
import Footer from '../Footer/Footer';
// import Loader from '../Loader/Loader';
import { Suspense } from 'react';

const SharedLayout = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default SharedLayout;
