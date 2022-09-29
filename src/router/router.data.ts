import { Routes, ROUTES } from '../constants';
import HomeView from '../views/home';
import LoginView from '../views/login';
import { IRouterData } from './router.types';

export const routerData: ReadonlyArray<IRouterData> = [
  {
    path: ROUTES[Routes.Home],
    Component: HomeView,
    private: true,
  },
  {
    path: ROUTES[Routes.Login],
    Component: LoginView,
  },
]