import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../components/firebase/AuthProvider";
import { imgURL } from "../../utils/utils";
import axios from "axios";

const Registration = () => {
  const { creatUser, profile, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const account = form.account.value;
    const salary = form.salary.value;
    const verified = false;
    const role = form.role.value;
    const designation = form.designation.value;
    const fired = false;
    const photo = form.photo.files[0];
    const photoUrl = await imgURL(photo);
    const userData = {
      name,
      email,
      password,
      account,
      salary,
      verified,
      role,
      designation,
      photoUrl,
      fired,
    };

    if (password.length < 6) {
      alert("❌ Password must be at least 6 characters long.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      alert("❌ Password must contain at least one uppercase letter.");
      return;
    }
    if (!/[\W]/.test(password)) {
      alert("❌ Password must contain at least one special character.");
      return;
    }
    creatUser(email, password)
      .then((data) => {
        console.log(data);
        profile(name, photoUrl)
          .then((data) => {
            setUser({ ...data, displayName: name, photoURL: photoUrl });
            axios
              .post(
                `${import.meta.env.VITE_Localhost}/users/${email}`,
                userData
              )
              .then((data) => console.log(data))
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex items-center justify-center mt-20 bg-base-200 p-4">
      <div className="w-full max-w-md p-6 rounded-lg shadow-lg bg-white">
        <h1 className="text-3xl font-bold text-center text-yellow-500 mb-6">
          Register for WorkTrackPro.
        </h1>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Full Name"
              className="w-full input input-bordered"
              required
            />
          </div>
          {/* Email Field */}
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
          {/* Password Field */}
          <div className="mb-4">
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
              placeholder="Create a strong password"
              className="w-full input input-bordered"
              required
            />
          </div>
          {/* Account  Field */}
          <div className="mb-6">
            <label
              htmlFor="Account"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Bank Account No.
            </label>
            <input
              type="number"
              id="account"
              name="account"
              placeholder="Enter your account number"
              className="w-full input input-bordered"
              required
            />
          </div>
          {/* Salary Field */}
          <div className="mb-6">
            <label
              htmlFor="salary"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Salary
            </label>
            <input
              type="number"
              id="salary"
              name="salary"
              placeholder="Enter your getting salary"
              className="w-full input input-bordered"
              required
            />
          </div>
          {/* Designation */}
          <div className="mb-6 w-full">
            <select
              name="designation"
              className="w-full py-2 pl-2 rounded-sm"
              id=""
            >
              <option value="" selected hidden>
                Select Your Designation
              </option>
              <option value="Sales Assistant">Sales Assistant</option>
              <option value="Social Media executive">
                Social Media executive
              </option>
              <option value="Digital Marketer">Digital Marketer</option>
              <option value="Web Developer">Web Developer</option>
            </select>
          </div>
          {/* Photo field */}
          <div>
            <button className="mb-6 ">
              <input
                type="file"
                className="file-input file-input-ghost"
                name="photo"
              />
            </button>
          </div>
          {/* Select role */}
          <div className="mb-6 w-full">
            <select name="role" className="w-full py-2 pl-2 rounded-sm" id="">
              <option value="" selected hidden>
                Select Your Role
              </option>
              <option value="employee">Employee</option>
              <option value="hr">HR</option>
            </select>
          </div>
          {/* Register Button */}
          <button
            type="submit"
            className="w-full btn bg-yellow-500 text-white font-semibold hover:bg-yellow-600 mb-4"
          >
            Register
          </button>
        </form>

        {/* Redirect to Login */}
        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-yellow-500 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
