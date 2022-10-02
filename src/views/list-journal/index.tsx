import React, { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
import { Layout } from '../../components';
import {
  JournalCoverMiniDarkSVG,
  JournalCoverMiniLightSVG,
  PlusSVG,
} from '../../components/svg';
import MainIllustration from '../../components/svg/main-illustration';
import { Routes, ROUTES } from '../../constants';
import { Box, Button, Typography } from '../../elements';
import { JOURNALS } from '../../mock';

const ListJournalView: FC = () => {
  const navigate = useNavigate();
  const goToJournal = (id: number) => () =>
    navigate(ROUTES[Routes.ListJournalPost].replace(':journalId', String(id)));

  return (
    <Layout
      headerButton={
        JOURNALS.length ? (
          <Link to={ROUTES[Routes.CreateJournal]}>
            <Button variant="secondary">
              <Box as="span" display="inline-block" width="0.6rem" mr="M">
                <PlusSVG width="100%" />
              </Box>
              Add Journal
            </Button>
          </Link>
        ) : undefined
      }
    >
      {JOURNALS.length ? (
        <Box
          display="grid"
          gridGap="2rem"
          mt={['XL', 'XL', 'XXXL']}
          gridTemplateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr 1fr']}
        >
          {JOURNALS.map(({ id, title }, index) => (
            <Box
              key={v4()}
              display="flex"
              position="relative"
              alignItems="center"
              justifyContent="center"
              onClick={goToJournal(id)}
            >
              <Box maxWidth="15rem">
                {index & 1 ? (
                  <JournalCoverMiniDarkSVG width="100%" />
                ) : (
                  <JournalCoverMiniLightSVG width="100%" />
                )}
              </Box>
              <Typography
                as="h2"
                fontWeight="400"
                position="absolute"
                fontFamily="'Abhaya Libre', serif"
                color={index & 1 ? 'text.inverted' : 'text.primary'}
              >
                {title}
              </Typography>
            </Box>
          ))}
        </Box>
      ) : (
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
      )}
    </Layout>
  );
};

export default ListJournalView;