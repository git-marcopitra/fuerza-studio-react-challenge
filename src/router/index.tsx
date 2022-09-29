import React, { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routerData } from './router.data';

const router = createBrowserRouter(
  routerData.map(({ path, Component }) => ({
    path,
    element: <Component />,
  }))
);

const Router: FC = () => <RouterProvider router={router} />;

export default Router;
