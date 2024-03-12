import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text
} from '@chakra-ui/react';
import classes from './LoginForm.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  LoginFormModel,
  loginValidatorSchema
} from '../model/login-form-model';
import { useLoginMutation } from '../model/useLoginMutation';

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormModel>({
    resolver: yupResolver(loginValidatorSchema)
  });
  const { login } = useLoginMutation();

  function submit(data: LoginFormModel) {
    login(data);
  }

  return (
    <div className={classes.loginFormContainer}>
      <Heading>Welcome back</Heading>

      <Text>Enter your email and password to sign in</Text>

      <form className={classes.loginForm} onSubmit={handleSubmit(submit)}>
        <FormControl isInvalid={!!errors.username}>
          <FormLabel>Username</FormLabel>
          <Input type="text" {...register('username')} />
          {errors.username && (
            <FormErrorMessage>{errors.username.message}</FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={!!errors.password}>
          <FormLabel>Password</FormLabel>
          <Input type="password" {...register('password')} />
          {errors.password && (
            <FormErrorMessage>{errors.password.message}</FormErrorMessage>
          )}
        </FormControl>

        <Button type="submit" width="max-content">
          Sign In
        </Button>
      </form>
    </div>
  );
}
