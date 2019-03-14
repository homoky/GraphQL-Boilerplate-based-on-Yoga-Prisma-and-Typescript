import { UserResolvers } from "../../../generated/graphqlgen";

const accounts: UserResolvers.AccountsResolver = (parent, args, { prisma }) => {
  return prisma.user({ id: parent.id }).accounts();
};

export default accounts;
