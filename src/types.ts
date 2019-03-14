import { Prisma } from "./generated/prisma";

type UserRoleType = "USER" | "ADMIN";

export interface Context {
  prisma: Prisma;
  request: any;
}

export interface AuthPayload {
  token: string;
  user: User;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRoleType;
}

export interface Account {
  id: string;
  name: string;
}
