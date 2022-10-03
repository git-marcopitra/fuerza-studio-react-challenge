import { Routes, ROUTES } from '../constants';
import CreateJournalView from '../views/create-journal';
import CreateJournalPostView from '../views/create-journal-post';
import ListJournalView from '../views/list-journal';
import ListJournalPostView from '../views/list-journal-post';
import LoginView from '../views/login';
import SignupView from '../views/signup';
import { IRouterData } from './router.types';

export const routerData: ReadonlyArray<IRouterData> = [
  {
    path: ROUTES[Routes.ListJournal],
    Component: ListJournalView,
    auth: true,
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
    auth: true,
  },
  {
    path: ROUTES[Routes.ListJournalPost],
    Component: ListJournalPostView,
    auth: true,
  },
  {
    path: ROUTES[Routes.CreateJournalPost],
    Component: CreateJournalPostView,
    auth: true,
  },
];
