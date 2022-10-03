import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { Layout, TextField } from '../../components';
import { Routes, ROUTES } from '../../constants';
import { Box, Button, Typography } from '../../elements';
import { useUser } from '../../hooks';

const SignupView: FC = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();
  const { register, getValues } = useForm({
    defaultValues: {
      username: '',
      password: '',
      email: '',
    },
  });

  const signup = async () => {
    const data = getValues();
    const result = await fetch('https://fuerza.test/auth/signup', {
      method: 'post',
      body: JSON.stringify(data),
    });

    const json = await result.json();

    if (json.isError) throw new Error('Request failed!');

    window.sessionStorage.setItem('token', json.token);

    setUser(json.user);
  };

  const onSubmit = () =>
    toast.promise(signup(), {
      loading: 'Loading...',
      error: ({ message }) => message,
      success: () => {
        navigate(ROUTES[Routes.ListJournal]);
        return 'Your account was created';
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
            <Typography
              textDecoration="underline"
              fontWeight="600"
              fontSize="S"
            >
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
          <Button variant="primary" onClick={onSubmit}>
            Create account
          </Button>
        </Box>
      </Box>
    </Layout>
  );
};

export default SignupView;
