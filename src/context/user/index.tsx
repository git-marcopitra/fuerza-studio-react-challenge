import React, { createContext, FC, useEffect, useState } from 'react';
import { IUser, IUserContext } from './user.types';

const userContext = createContext({} as IUserContext);

export const UserProvider: FC = ({ children }) => {
  const { Provider } = userContext;
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem('user') ?? 'null'));
  }, []);

  const setter = (data: IUser | null) => {
    setUser(data);
    sessionStorage.setItem('user', JSON.stringify(data));
  };

  const value: IUserContext = {
    user,
    setter,
  };

  return <Provider value={value}>{children}</Provider>;
};

export default userContext;
