export enum Routes {
  Login = 'login',
  Signup = 'signup',
  ListJournal = 'list-journal',
  CreateJournal = 'create-journal',
}

export const ROUTES: Record<Routes, string> = {
  [Routes.ListJournal]: '/',
  [Routes.Login]: '/login',
  [Routes.Signup]: '/signup',
  [Routes.CreateJournal]: '/create-journal',
}
