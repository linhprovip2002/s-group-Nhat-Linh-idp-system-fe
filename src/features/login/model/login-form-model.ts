import { object, string } from 'yup';

export type LoginFormModel = {
  username: string;
  password: string;
};

export const loginValidatorSchema = object({
  username: string().min(3).required(),
  password: string().min(5).required()
});
