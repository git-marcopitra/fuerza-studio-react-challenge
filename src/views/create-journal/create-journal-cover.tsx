import React, { FC } from 'react';
import { Control, useWatch } from 'react-hook-form';
import JournalCover from '../../components/svg/journal-cover';
import { Box, Typography } from '../../elements';

const CreateJournalCover: FC<{ control: Control<{ title: string }> }> = ({
  control,
}) => {
  const title = useWatch({ control, name: 'title' });

  return (
    <Box
      pt="XXXL"
      pb="XL"
      display="flex"
      position="relative"
      alignItems="center"
      justifyContent="center"
    >
      <Box width="20rem">
        <JournalCover width="100%" />
      </Box>
      <Typography
        p="XXL"
        fontSize="XXL"
        maxWidth="20rem"
        position="absolute"
        fontFamily="'Abhaya Libre', serif"
      >
        {title}
      </Typography>
    </Box>
  );
};

export default CreateJournalCover;
