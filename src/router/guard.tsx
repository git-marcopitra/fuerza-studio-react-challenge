import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { Routes, ROUTES } from '../constants';
import { useUser } from '../hooks';

const Guard: FC = ({ children }) => {
  const { user } = useUser();

  if (user) return <>{children}</>;

  return <Navigate replace to={ROUTES[Routes.Login]} />;
};

export default Guard;
