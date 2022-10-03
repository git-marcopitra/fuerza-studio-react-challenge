export interface IUser {
  id: string;
  email?: string;
  username: string;
  journalIds: ReadonlyArray<string> | null;
}

export interface IUserContext {
  user: IUser | null;
  setter: (data: IUser | null) => void;
}
