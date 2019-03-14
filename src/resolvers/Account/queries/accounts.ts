import { getUserId } from "../../../utils";
import { QueryResolvers } from "../../../generated/graphqlgen";

const accounts: QueryResolvers.AccountsResolver = async (
  parent,
  args,
  { prisma, request }
) => {
  const userID = getUserId(request);

  return prisma.user({ id: userID }).accounts();
};

export default accounts;
