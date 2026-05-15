import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="error-container">
      <h1>OOOps</h1>
      <h3>Something went wrong.....</h3>
      <h4>
        {err.status}: {err.statusText}
      </h4>
      <h2>{err.data}</h2>
    </div>
  );
};

export default Error;
