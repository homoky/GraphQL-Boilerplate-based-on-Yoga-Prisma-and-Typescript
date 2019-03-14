import {
  Resolvers,
  AuthPayloadResolvers,
  UserResolvers,
  AccountResolvers
} from "../generated/graphqlgen";

import * as AccountQueries from "./Account/queries";

import * as UserMutations from "./User/mutations/";

import * as AccountFields from "./Account/fields";
import * as UserFields from "./User/fields";

export const resolvers: Resolvers = {
  Query: { ...AccountQueries },
  Mutation: { ...UserMutations },
  AuthPayload: AuthPayloadResolvers.defaultResolvers,
  User: {
    ...UserResolvers.defaultResolvers,
    ...UserFields
  },
  Account: {
    ...AccountResolvers.defaultResolvers,
    ...AccountFields
  }
};
