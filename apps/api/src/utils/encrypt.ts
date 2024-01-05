import * as bcrypt from 'bcrypt';

export const createHashValue = (val: string) => {
  const salt = bcrypt.genSaltSync();
  return bcrypt.hashSync(val, salt);
};

export const isValidPwd = (pwd: string, encryptedPwd: string): boolean => {
  const validValue = bcrypt.compareSync(pwd, encryptedPwd);
  return validValue;
};
