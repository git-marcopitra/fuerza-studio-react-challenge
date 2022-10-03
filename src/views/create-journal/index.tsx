import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Layout, TextField } from '../../components';
import { Routes, ROUTES } from '../../constants';
import { Box, Button } from '../../elements';
import { useUser } from '../../hooks';
import CreateJournalCover from './create-journal-cover';

const CreateJournalView: FC = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const { control, getValues, register } = useForm({
    defaultValues: { title: 'HTM_' },
  });

  const createJournal = async () => {
    const title = getValues('title');

    const data = { title, userId: user!.id };

    const response = await fetch('https://fuerza.test/journals', {
      method: 'post',
      body: JSON.stringify(data),
    });
    const result = await response.json();

    if (result?.data?.isError) throw new Error(result.data.message);
  };

  const onSubmit = () =>
    toast.promise(createJournal(), {
      loading: 'Creating...',
      success: () => {
        navigate(ROUTES[Routes.ListJournal]);
        return 'Created Successfully';
      },
      error: ({ message }) => message,
    });

  return (
    <Layout>
      <Box
        display="grid"
        alignItems="center"
        justifyItems="center"
        gridTemplateColumns={['1fr', '1fr', '1fr 1fr']}
      >
        <CreateJournalCover control={control} />
        <Box maxWidth="25rem" width="100%">
          <TextField
            type="text"
            name="title"
            register={register}
            getValues={getValues}
          />
          <Box display="flex" justifyContent="center" my="XL">
            <Button variant="primary" onClick={onSubmit}>
              Save journal
            </Button>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default CreateJournalView;
