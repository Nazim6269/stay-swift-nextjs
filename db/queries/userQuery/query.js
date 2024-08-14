import { userModel } from '@/models/usersModels';

export const findUserByCredentials = async (credentials) => {
  const user = await await userModel.findOne(credentials);

  return user;
};
