import * as bcrypt from "bcryptjs";

const hashPassword = (password: string): Promise<string> => {
  if (password.length < 5) {
    throw new Error("Password must be 5 characters or longer.");
  }

  return bcrypt.hash(password, 10);
};

export { hashPassword as default };
