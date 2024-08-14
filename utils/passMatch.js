import bcrypt from 'bcryptjs';

export const passMatch = async (plainPass, encryptedPass) => {
  return await bcrypt.compare(plainPass, encryptedPass);
};
