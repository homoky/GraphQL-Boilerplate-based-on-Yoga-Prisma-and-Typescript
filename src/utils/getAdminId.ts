import getUserId from "./getUserId";
import prisma from "../prisma";

const getAdminId = async (request: any) => {
  const userId = getUserId(request);

  const user = await prisma.user({ id: userId });

  if (user.role === "ADMIN") {
    return user.id;
  }

  throw new Error("User account with admin privileges is required.");
};

export { getAdminId as default };
