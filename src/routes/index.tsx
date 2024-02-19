import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Bikes from '../pages/bikes';
import Details from '../pages/details';
import NotFound from '../pages/notfound';

const pages = [
  {
    path: '/',
    element: <Bikes />,
  },
  {
    path: '/details/:id',
    element: <Details />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

const PageRoutes = () => {
  return (
    <Routes>
      {React.Children.toArray(
        pages.map(({ path, element }) => (
          <Route path={path} element={element} />
        ))
      )}
    </Routes>
  );
};

export default PageRoutes;
