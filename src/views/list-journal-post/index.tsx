import React, { FC, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Layout } from '../../components';
import { PlusSVG } from '../../components/svg';
import MainIllustration from '../../components/svg/main-illustration';
import { Routes, ROUTES } from '../../constants';
import { Box, Button, Typography } from '../../elements';
import { JOURNALS } from '../../mock';

const ListJournalPostView: FC = () => {
  const { journalId } = useParams();

  const { title } = useMemo(
    () =>
      (journalId ? JOURNALS.find(({ id }) => +journalId === id) : null) ?? {
        id: 0,
        title: 'HTML',
      },
    [journalId]
  );

  return (
    <Layout
      headerButton={
        JOURNALS.length ? (
          <Link
            to={ROUTES[Routes.CreateJournalPost].replace(
              ':journalId',
              String(journalId)
            )}
          >
            <Button variant="secondary">
              <Box as="span" display="inline-block" width="0.6rem" mr="M">
                <PlusSVG width="100%" />
              </Box>
              Add note
            </Button>
          </Link>
        ) : undefined
      }
    >
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        mt={['20vh', '20vh', '10rem']}
      >
        <Typography mb="5rem" fontFamily="'Abhaya Libre', serif" fontSize="XXL">
          {title}
        </Typography>
        <Box width={['100%', '100%', '30rem']} mb="XXL">
          <MainIllustration width="100%" />
        </Box>
        <Link
          to={ROUTES[Routes.CreateJournalPost].replace(
            ':journalId',
            String(journalId)
          )}
        >
          <Typography textDecoration="underline" color="accent">
            Create a note
          </Typography>
        </Link>
      </Box>
    </Layout>
  );
};

export default ListJournalPostView;
