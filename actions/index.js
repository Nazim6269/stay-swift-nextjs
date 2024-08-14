'use server';

import { signIn } from '@/auth';

export const login = async (formData) => {
  try {
    const signInData = {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    };

    const res = await signIn('credentials', signInData);
    return res;
  } catch (error) {
    throw new Error(error);
  }
};
