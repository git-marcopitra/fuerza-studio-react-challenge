import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Layout, TextField } from '../components';
import { Routes, ROUTES } from '../constants';
import { Box, Button, Typography } from '../elements';

const LoginView: FC = () => {
  const { register, getValues } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  return (
    <Layout bigHeader>
      <Box maxWidth="30rem" ml="auto" mr={['X', 'XXL']}>
        <Box
          mb="XL"
          mt="XXL"
          color="accent"
          display="flex"
          alignItems="flex-end"
          justifyContent="space-between"
        >
          <Typography as="h1" fontWeight="400">
            Sign in
          </Typography>
          <Link to={ROUTES[Routes.Signup]}>
            <Typography textDecoration="underline" fontWeight="600" fontSize="S">
              Sign up
            </Typography>
          </Link>
        </Box>
        <TextField
          type="text"
          name="username"
          register={register}
          getValues={getValues}
          label="Your username"
        />
        <TextField
          type="password"
          name="password"
          register={register}
          getValues={getValues}
          label="Your password"
        />
        <Typography
          my="M"
          fontSize="S"
          color="accent"
          textAlign="right"
          textDecoration="underline"
        >
          Forgot Password?
        </Typography>
        <Box display="flex" justifyContent="center" my="XL">
          <Link to={ROUTES[Routes.ListJournal]}>
          <Button variant="primary">Log in</Button>
          </Link>
        </Box>
      </Box>
    </Layout>
  );
};

export default LoginView;
