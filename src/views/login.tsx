import React, { FC } from 'react';
import { Layout, TextField } from '../components';
import { Box, Button, Typography } from '../elements';

const LoginView: FC = () => (
  <Layout bigHeader>
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="flex-end"
      mb="XL"
      mt="XXL"
      color="accent"
    >
      <Typography as="h1" fontWeight="400">
        Sign In
      </Typography>
      <Typography textDecoration="underline" fontWeight="600">
        Sign up
      </Typography>
    </Box>
    <TextField label="Your username" />
    <TextField label="Your password" />
    <Typography
      my="M"
      fontSize="S"
      color="accent"
      textAlign="right"
      textDecoration="underline"
    >
      Forgot Password?
    </Typography>
    <Button variant="primary">Log in</Button>
  </Layout>
);

export default LoginView;
