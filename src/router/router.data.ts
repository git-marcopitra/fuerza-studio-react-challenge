import { Routes, ROUTES } from '../constants';
import CreateJournalView from '../views/create-journal';
import ListJournalView from '../views/list-journal';
import LoginView from '../views/login';
import SignupView from '../views/signup';
import { IRouterData } from './router.types';

export const routerData: ReadonlyArray<IRouterData> = [
  {
    path: ROUTES[Routes.ListJournal],
    Component: ListJournalView,
    private: true,
  },
  {
    path: ROUTES[Routes.Login],
    Component: LoginView,
  },
  {
    path: ROUTES[Routes.Signup],
    Component: SignupView,
  },
  {
    path: ROUTES[Routes.CreateJournal],
    Component: CreateJournalView,
  },
];
