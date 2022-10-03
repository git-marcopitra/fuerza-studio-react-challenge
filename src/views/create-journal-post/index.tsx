import React, { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Layout, TextField } from '../../components';
import { BackArrowSVG } from '../../components/svg';
import { ROUTES, Routes } from '../../constants';
import { Box, Button, TextArea, Typography } from '../../elements';
import { useUser } from '../../hooks';
import { Journal } from '../../interfaces/journal.interface';

const CreateJournalPostView: FC = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const { journalId } = useParams();

  const [journal, setJournal] = useState<Journal | undefined>();

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
      })(),
      {
        loading: 'Loading journal...',
        success: 'Loaded!',
        error: ({ message }) => message,
      }
    );
  }, [user, journalId]);

  const { getValues, register } = useForm({
    defaultValues: { title: 'Title', body: 'Write your note' },
  });

  const createPost = async () => {
    const { title, body } = getValues();

    const data = { title, content: body };

    const response = await fetch(
      `https://fuerza.test/journals/entry/${journalId}`,
      {
        method: 'post',
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();

    if (result?.data?.isError) throw new Error(result.data.message);
  };

  const onSubmit = () =>
    toast.promise(createPost(), {
      loading: 'Creating...',
      success: () => {
        navigate(ROUTES[Routes.ListJournal]);
        return 'Created Successfully';
      },
      error: ({ message }) => message,
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
          {journal?.title}
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
          <Button variant="primary" onClick={onSubmit}>
            Save note
          </Button>
        </Box>
      </Box>
    </Layout>
  );
};

export default CreateJournalPostView;
