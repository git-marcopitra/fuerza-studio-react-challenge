import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components';
import MainIllustration from '../components/svg/main-illustration';
import { Routes, ROUTES } from '../constants';
import { Box, Typography } from '../elements';

const HomeView: FC = () => (
  <Layout>
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      mt={['35vh', '35vh', '10rem']}
    >
      <Box width={['100%', '100%', '30rem']} mb="XXL">
        <MainIllustration width="100%" />
      </Box>
      <Link to={ROUTES[Routes.CreateJournal]}>
        <Typography textDecoration="underline" color="accent">
          Create a journal
        </Typography>
      </Link>
    </Box>
  </Layout>
);

export default HomeView;
