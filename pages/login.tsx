import { Container, Grid, GridItem, Image } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import { NextPageWithLayout } from 'src/shared/model/next.types';
import { LoginForm } from '../src/features/login/ui/LoginForm';

const LoginPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Login page S-Group</title>
      </Head>

      <Container maxW="container.xl">
        <Grid templateColumns="repeat(2, 1fr)" height="100vh">
          <GridItem>
            <LoginForm />
          </GridItem>

          <GridItem>
            <div>
              <Image
                className="h-screen"
                src="/login-background.jpg"
                alt="Background image"
              />
            </div>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

export default LoginPage;
