import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import SharedLayout from '../components/SharedLayout/SharedLayout';

const Events = lazy(() => import('../pages/Events/Events'));
const Registration = lazy(() => import('../pages/Registration/Registration'));
const Participants = lazy(() => import('../pages/Participants/Participants'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Events />} />
        <Route path=":id/registration" element={<Registration />} />
        <Route path=":id/participants" element={<Participants />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
