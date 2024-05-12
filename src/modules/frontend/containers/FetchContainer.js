const FecthContainer = ({ loading, children }) => {
  return <>{loading ? "LOADING" : children}</>;
};

export default FecthContainer;
