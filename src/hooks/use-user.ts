import { IUserContext } from './../context/user/user.types';
import { useContext } from 'react';
import userContext from '../context/user';

const useUser = (): IUserContext => useContext(userContext);

export default useUser;
