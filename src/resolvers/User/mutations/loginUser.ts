import * as bcrypt from "bcryptjs";
import generateToken from "../../../utils/generateToken";
import { MutationResolvers } from "../../../generated/graphqlgen";

const loginUser: MutationResolvers.LoginUserResolver = async (
  parent,
  args,
  { prisma }
) => {
  const user = await prisma.user({ email: args.data.email });

  const isMatch = await bcrypt.compare(args.data.password, user.password);

  if (!user || !isMatch) {
    throw new Error("Unable to login.");
  }

  return {
    user,
    token: generateToken(user.id)
  };
};

export default loginUser;
