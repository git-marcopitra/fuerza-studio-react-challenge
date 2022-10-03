import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Layout, TextField } from '../components';
import { Routes, ROUTES } from '../constants';
import { Box, Button, Typography } from '../elements';

const SignupView: FC = () => {
  const { register, getValues } = useForm({
    defaultValues: {
      username: '',
      password: '',
      email: '',
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
            Sign up
          </Typography>
          <Link to={ROUTES[Routes.Login]}>
            <Typography textDecoration="underline" fontWeight="600" fontSize="S">
              Already have an account
            </Typography>
          </Link>
        </Box>
        <TextField
          type="text"
          name="username"
          register={register}
          getValues={getValues}
          label="Define a username"
        />
        <TextField
          type="password"
          name="password"
          register={register}
          getValues={getValues}
          label="Set your password"
        />
        <TextField
          type="email"
          name="email"
          register={register}
          getValues={getValues}
          label="Email (optional)"
        />
        <Box display="flex" justifyContent="center" my="XL">
          <Button variant="primary">Create account</Button>
        </Box>
      </Box>
    </Layout>
  );
};

export default SignupView;
