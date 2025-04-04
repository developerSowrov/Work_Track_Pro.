import { Link, NavLink } from "react-router-dom";
import pic from "../assets/DALL·E 2025-02-17 02.22.43 - A sleek and modern logo for 'WorkTrackPro'. The design should use blue and gray tones, symbolizing professionalism and efficiency. Include an abstract.webp";
import { useContext } from "react";
import { AuthContext } from "../components/firebase/AuthProvider";
const Navbar = () => {
  const { user, logOut, setUser } = useContext(AuthContext);
  const signOut = () => {
    logOut()
      .then(() => setUser(null))
      .catch((err) => {
        // console.log(err);
      });
  };
  return (
    <div className=" bg-[#795548] shadow-sm">
      <div className=" navbar max-w-[1180px]  mx-auto">
        <div className="mr-1">
          <img className="w-10 h-10  rounded-full" src={pic} alt="" />
        </div>
        <div className="flex-1">
          <a className="text-[#EEEEEE] font-semibold text-xl">WorkTracPro.</a>
        </div>
        <div className="flex justify-center items-center gap-4">
          {user && (
            <div>
              <NavLink to={"/dashboard"} className="text-[#EEEEEE]">Dashboard</NavLink>
            </div>
          )}
          <div>
            <NavLink to={"/contact"} className="text-[#EEEEEE]">Contact US</NavLink>
          </div>
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <button onClick={signOut}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <div>
              <Link to={"/registration"}>
                <button className="btn bg-[#795548]  text-white font-semibold">
                  Sign Up
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
