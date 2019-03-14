const getAccountId = (request: any) => {
  const account = request.request
    ? request.request.headers["account-id"]
    : request.connection.context.AccountID;

  if (account) {
    return account;
  }

  throw new Error("Header-key `account-id` is required.");
};

export { getAccountId as default };
