import { useContext } from "react";
import { AuthContext } from "../../components/firebase/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex flex-col items-center justify-center  px-4 py-10 rounded-lg mb-5 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full  lg:w-8/12">
        {/* Profile Image */}
        <img
          className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-gray-300"
          src={user.photoURL}
          alt="Profile"
        />
        {/* User Info */}
        <h2 className="text-2xl font-bold text-[#795548] mt-3">
          {user.displayName}
        </h2>
        <p className="text-gray-600 mt-2">
          <span className="font-semibold">Email:</span> {user.email}
        </p>
        <p className="text-gray-600 my-2">
          <span className="font-semibold">Salary:</span> $100{user.salary}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">
            Bank Account No.: 890438 85404 4890
          </span>
          {user.bankAccount}
        </p>
        <div className="mt-4">
          <p className="text-gray-500 text-sm">
            Welcome to the dashboard! This is your central hub for managing
            tasks, accessing essential tools, and staying updated. Whether youre
            overseeing operations, handling HR, or focusing on your
            responsibilities, everything you need is right here. Lets achieve
            great things together!
          </p>
          <p className="text-gray-600 font-semibold mt-2">--Welcome--</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
