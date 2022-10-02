export const JOURNALS = [
  {
    id: 1,
    title: 'HTML',
  },
  {
    id: 2,
    title: 'Javascript',
  },
  {
    id: 3,
    title: 'HTML',
  },
  {
    id: 4,
    title: 'Javascript',
  },
  {
    id: 5,
    title: 'HTML',
  },
  {
    id: 6,
    title: 'Javascript',
  },
].map((journal) => ({
  ...journal,
  posts: [
    {
      title: 'The h1, h2, h3, h4, h5 and h6 elements',
      body: 'Some note here',
    },
    {
      title: 'The article element',
      body: 'Other note here',
    },
    {
      title: 'The h1, h2, h3, h4, h5 and h6 elements',
      body: 'Some note here',
    },
    {
      title: 'The article element',
      body: 'Other note here',
    },
    {
      title: 'The h1, h2, h3, h4, h5 and h6 elements',
      body: 'Some note here',
    },
    {
      title: 'The article element',
      body: 'Other note here',
    },
  ],
}));
