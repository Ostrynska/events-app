import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../Footer/Footer';
import Loading from '../Loading/Loading';

const SharedLayout = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default SharedLayout;
