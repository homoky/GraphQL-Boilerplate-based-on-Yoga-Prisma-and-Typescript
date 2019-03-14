import { AccountResolvers } from "../../../generated/graphqlgen";

const users: AccountResolvers.UsersResolver = (parent, args, { prisma }) => {
  return prisma.account({ id: parent.id }).users();
};

export default users;
