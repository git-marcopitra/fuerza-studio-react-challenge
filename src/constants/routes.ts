export enum Routes {
  Login = 'login',
  Signup = 'signup',
  ListJournal = 'list-journal',
  CreateJournal = 'create-journal',
  ListJournalPost = 'list-journal-post',
  CreateJournalPost = 'create-journal-post',
}

export const ROUTES: Record<Routes, string> = {
  [Routes.Login]: '/login',
  [Routes.Signup]: '/signup',
  [Routes.ListJournal]: '/',
  [Routes.CreateJournal]: '/create-journal',
  [Routes.ListJournalPost]: '/journal/:journalId',
  [Routes.CreateJournalPost]: '/journal/:journalId/posts/create',
};
