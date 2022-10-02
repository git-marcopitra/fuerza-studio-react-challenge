export enum Routes {
  Login = 'login',
  Signup = 'signup',
  Home = 'home',
  CreateJournal = 'create-journal',
}

export const ROUTES: Record<Routes, string> = {
  [Routes.Home]: '/',
  [Routes.Login]: '/login',
  [Routes.Signup]: '/signup',
  [Routes.CreateJournal]: '/create-journal',
}
