import React, { createContext, FC, useState } from 'react';
import { IUser, IUserContext } from './user.types';

const userContext = createContext({} as IUserContext);

export const UserProvider: FC = ({ children }) => {
  const { Provider } = userContext;
  const [user, setUser] = useState<IUser | null>(null);

  const value: IUserContext = {
    user,
    setUser,
  };

  return <Provider value={value}>{children}</Provider>;
};

export default userContext;
