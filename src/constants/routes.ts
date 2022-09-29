export enum Routes {
  Login = 'login',
  Home = 'home',
}

export const ROUTES: Record<Routes, string> = {
  [Routes.Home]: '/',
  [Routes.Login]: '/login',
}
