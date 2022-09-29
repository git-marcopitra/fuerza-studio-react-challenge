import React, { FC } from 'react';
import { Box, Typography } from '../../elements';
import Input from '../../elements/input';

const TextField: FC<{ label?: string }> = ({ label }) => (
  <Box
    my="L"
    width="100%"
    bg="foreground"
    position="relative"
    borderRadius="S"
    boxShadow="0 0 0.2rem #0001"
  >
    {label && (
      <Typography
        p="L"
        top="0"
        left="0"
        as="label"
        color="accent"
        fontWeight="600"
        position="absolute"
      >
        {label}
      </Typography>
    )}
    <Input p="L" bg="transparent" width="100%" border="none" outline="none" />
  </Box>
);

export default TextField;
