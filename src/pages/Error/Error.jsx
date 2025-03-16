import { Link, useNavigate } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center space-y-3 ">
      <span className="font-bold text-5xl mt-56">404</span>
      <span className="font-semibold text-3xl">Page Not Found</span>
      <Link to={"/"} className="btn mt-2 text-lg">Go To Home!</Link>
    </div>
  );
};

export default Error;
