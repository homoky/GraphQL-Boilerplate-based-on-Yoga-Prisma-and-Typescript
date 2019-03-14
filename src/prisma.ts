import { Prisma } from "./generated/prisma";

export interface Context {
  prisma: Prisma;
  request: any;
}

const prisma = new Prisma({
  endpoint: <string>process.env.PRISMA_ENDPOINT,
  secret: <string>process.env.PRISMA_SECRET
});

export { prisma as default };
