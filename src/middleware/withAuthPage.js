const withAuthPage = (handler) => {
  return async (ctx) => {
    return handler(ctx);
  };
};
export default withAuthPage;
