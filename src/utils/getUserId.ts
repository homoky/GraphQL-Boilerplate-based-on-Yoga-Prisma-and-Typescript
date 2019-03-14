import * as jwt from "jsonwebtoken";

const getUserId = (request: any): string => {
  const header = request.request
    ? request.request.headers.authorization
    : request.connection.context.Authorization;

  if (header) {
    const token = header.replace("Bearer ", "");
    const decoded = jwt.verify(token, <string>process.env.JWT_SECRET);
    //@ts-ignore
    return decoded.userId;
  }

  throw new Error("Authentication required");
};

export { getUserId as default };
