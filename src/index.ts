import { GraphQLServer } from "graphql-yoga";
import { resolvers } from "./resolvers";
import prisma from "./prisma";

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context(request: any) {
    return {
      prisma,
      request
    };
  }
} as any);

server.start(() => console.log("Server is running on http://localhost:4000"));
