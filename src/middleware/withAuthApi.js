const withAuthApi = (handler) => {
  return async (req,res) => {
    return handler(req,res);
  };
};
export default withAuthApi;
