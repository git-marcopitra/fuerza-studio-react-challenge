import React, { FC, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Layout, TextField } from '../../components';
import { BackArrowSVG } from '../../components/svg';
import { ROUTES, Routes } from '../../constants';
import { Box, Button, TextArea, Typography } from '../../elements';
import { JOURNALS } from '../../mock';

const CreateJournalPostView: FC = () => {
  const { journalId } = useParams();

  const { title } = useMemo(
    () =>
      (journalId ? JOURNALS.find(({ id }) => +journalId === id) : null) ?? {
        id: 0,
        title: 'HTML',
        posts: [],
      },
    [journalId]
  );

  const { getValues, register } = useForm({
    defaultValues: { title: 'Title', body: 'Write your note' },
  });

  return (
    <Layout>
      <Box display="flex" alignItems="center" mt="XL">
        <Link
          to={ROUTES[Routes.ListJournalPost].replace(
            ':journalId',
            String(journalId)
          )}
        >
          <Box height="1.2rem">
            <BackArrowSVG height="100%" />
          </Box>
        </Link>
        <Typography fontFamily="'Abhaya Libre', serif" as="h2" ml="L">
          {title}
        </Typography>
      </Box>
      <Box maxWidth="25rem" width="100%">
        <TextField
          type="text"
          name="title"
          register={register}
          getValues={getValues}
        />
        <TextArea
          p="L"
          my="L"
          rows={25}
          width="100%"
          border="none"
          outline="none"
          color="accent"
          bg="foreground"
          borderRadius="S"
          {...register('body')}
          boxShadow="0 0 0.2rem #0001"
        />
        <Box display="flex" justifyContent="center" my="XL">
          <Button variant="primary">Save note</Button>
        </Box>
      </Box>
    </Layout>
  );
};

export default CreateJournalPostView;
