import { Dispatch, SetStateAction } from 'react';

export interface IUser {
  email?: string;
  username: string;
  journalIds: ReadonlyArray<string> | null;
}

export interface IUserContext {
  user: IUser | null;
  setUser: Dispatch<SetStateAction<IUser | null>>;
}
