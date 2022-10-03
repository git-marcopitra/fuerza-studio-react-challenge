import React, { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Guard from './guard';
import { routerData } from './router.data';

const router = createBrowserRouter(
  routerData.map(({ path, Component, auth }) => ({
    path,
    element: auth ? (
      <Guard>
        <Component />
      </Guard>
    ) : (
      <Component />
    ),
  }))
);

const Router: FC = () => <RouterProvider router={router} />;

export default Router;
