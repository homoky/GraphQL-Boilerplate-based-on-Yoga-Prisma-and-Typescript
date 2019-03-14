import { hashPassword, generateToken } from "../../../utils";
import { MutationResolvers } from "../../../generated/graphqlgen";

const createUser: MutationResolvers.CreateUserResolver = async (
  parent,
  args,
  { prisma }
) => {
  const { email, name, password } = args.data;

  const user = await prisma.createUser({
    email,
    name,
    password: await hashPassword(password)
  });

  return {
    user,
    token: generateToken(user.id)
  };
};

export default createUser;
