import * as jwt from "jsonwebtoken";

const generateToken = (userId: string): string => {
  const secret = process.env.JWT_SECRET;

  if (secret) {
    return jwt.sign({ userId }, secret, { expiresIn: "7 days" });
  }

  throw new Error("Not found .env value for JWT_SECRET.");
};

export { generateToken as default };
