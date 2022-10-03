import React, { FC, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useParams } from 'react-router-dom';
import { v4 } from 'uuid';
import { Layout } from '../../components';
import { BackArrowSVG, PlusSVG } from '../../components/svg';
import MainIllustration from '../../components/svg/main-illustration';
import { Routes, ROUTES } from '../../constants';
import { Box, Button, Typography } from '../../elements';
import { useUser } from '../../hooks';
import { Journal } from '../../interfaces/journal.interface';

const ListJournalPostView: FC = () => {
  const { user } = useUser();
  const { journalId } = useParams();
  const [journal, setJournal] = useState<Journal | undefined>();
  const [journalsEntries, setJournalsEntries] = useState([]);

  useEffect(() => {
    toast.promise(
      (async () => {
        const responseJournal = await fetch(
          `https://fuerza.test/journals/${user?.id}`
        );

        const resultJournal = await responseJournal.json();

        if (resultJournal?.data?.isError)
          throw new Error(resultJournal.data.message);

        setJournal(
          resultJournal.journals.find(
            (journal: Journal) => journal.id === journalId
          )
        );

        const responseEntries = await fetch(
          `https://fuerza.test/journals/entries/${user?.id}`
        );
        const resultEntries = await responseEntries.json();

        if (resultEntries?.data?.isError)
          throw new Error(resultEntries.data.message);

        setJournalsEntries(resultEntries.entries);
      })(),
      {
        loading: 'Loading posts...',
        success: 'Loaded!',
        error: ({ message }) => message,
      }
    );
  }, [user, journalId]);

  return (
    <Layout>
      <Box display="flex" justifyContent="space-between" mt="XL">
        <Box display="flex" alignItems="center">
          <Link
            to={ROUTES[Routes.ListJournal].replace(
              ':journalId',
              String(journalId)
            )}
          >
            <Box height="1.2rem">
              <BackArrowSVG height="100%" />
            </Box>
          </Link>
          <Typography fontFamily="'Abhaya Libre', serif" as="h2" ml="L">
            {journal?.title}
          </Typography>
        </Box>
        {journalsEntries.length ? (
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
        ) : undefined}
      </Box>
      {journalsEntries.length ? (
        <Box
          my="XL"
          gridGap="1rem"
          display="grid"
          gridTemplateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr 1fr']}
        >
          {journalsEntries.map(({ title }) => (
            <Box
              key={v4()}
              height="12rem"
              borderRadius="S"
              bg="text.inverted"
              boxShadow="-5px 5px 1rem rgba(0, 0, 0, 0.12)"
            >
              <Box
                p="L"
                ml="0.25rem"
                mt="-0.25rem"
                mr="-0.25rem"
                height="12rem"
                borderRadius="S"
                bg="text.inverted"
                boxShadow="-5px 5px 1rem rgba(0, 0, 0, 0.12)"
              >
                <Typography
                  as="h3"
                  fontSize="XL"
                  fontWeight="400"
                  color="text.secondary"
                >
                  {title}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      ) : (
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          mt={['20vh', '20vh', '10rem']}
        >
          <Typography
            mb="5rem"
            fontFamily="'Abhaya Libre', serif"
            fontSize="XXL"
          >
            {journal?.title}
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
      )}
    </Layout>
  );
};

export default ListJournalPostView;
