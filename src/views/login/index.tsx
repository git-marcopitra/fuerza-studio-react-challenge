import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { Layout, TextField } from '../../components';
import { Routes, ROUTES } from '../../constants';
import { Box, Button, Typography } from '../../elements';
import { useUser } from '../../hooks';

const LoginView: FC = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();
  const { register, getValues } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const login = async () => {
    const data = getValues();
    const result = await fetch('https://fuerza.test/auth/login', {
      method: 'post',
      body: JSON.stringify(data),
    });

    const json = await result.json();

    if (json.isError) throw new Error('Request failed!');

    window.sessionStorage.setItem('token', json.token);

    setUser(json.user);
  };

  const onSubmit = () =>
    toast.promise(login(), {
      loading: 'Loading...',
      error: ({ message }) => message,
      success: () => {
        navigate(ROUTES[Routes.ListJournal]);
        return 'Welcome back!';
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
            <Typography
              textDecoration="underline"
              fontWeight="600"
              fontSize="S"
            >
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
          <Button variant="primary" type="submit" onClick={onSubmit}>
            Log in
          </Button>
        </Box>
      </Box>
    </Layout>
  );
};

export default LoginView;
