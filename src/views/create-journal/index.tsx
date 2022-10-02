import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Layout, TextField } from '../../components';
import { Box, Button } from '../../elements';
import CreateJournalCover from './create-journal-cover';

const CreateJournalView: FC = () => {
  const { control, getValues, register } = useForm({
    defaultValues: { title: 'HTM_' },
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
        <Box width="25rem">
          <TextField
            type="text"
            name="title"
            register={register}
            getValues={getValues}
          />
          <Box display="flex" justifyContent="center" my="XL">
            <Button variant="primary">Save journal</Button>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default CreateJournalView;
