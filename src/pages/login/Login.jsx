import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../components/firebase/AuthProvider";
import axios from "axios";

const Login = () => {
  const { login, google, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;
    const user = await axios.get(
      `${import.meta.env.VITE_Localhost}/getUser/${email}`
    );
    if (user.data?.fired) {
      return alert("Your account has been disabled by the admin.");
    }
    await login(email, pass)
      .then((data) => {
        console.log(data);
        navigate("/");
        setUser(data);
      })
      .catch((err) => {
        alert("The password doesn't match");
        console.log(err);
      });
  };
  const googleLogin = () => {
    google()
      .then((data) => {
        setUser(data.user);
        navigate("/");
        console.log(data.user);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex items-center justify-center mt-20 bg-base-200 p-4">
      <div className="w-full max-w-md p-6 rounded-lg shadow-lg bg-white">
        <h1 className="text-3xl font-bold text-center text-yellow-500 mb-6">
          Login to WorkTrackPro.
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="username@site.com"
              className="w-full input input-bordered"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full input input-bordered"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full mb-4 btn bg-yellow-500 text-white font-semibold hover:bg-yellow-600"
          >
            Login
          </button>
        </form>
        <div className="divider">OR</div>
        <button
          onClick={googleLogin}
          className="w-full btn bg-white text-black font-semibold border border-gray-300 hover:bg-gray-100 flex items-center justify-center"
        >
          <FaGoogle></FaGoogle> Sign in with Google
        </button>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don`t have an account?{" "}
          <Link
            to="/registration"
            className="font-semibold text-yellow-500 hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
