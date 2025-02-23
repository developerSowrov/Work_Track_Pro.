import { NavLink, Outlet } from "react-router-dom";

const DashLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-[#795548] text-white w-64 p-4 hidden md:block">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          WorkTrackPro.
        </h2>
        <div className="flex flex-col gap-3">
          {/* 
            Default Profile route:
            When "/dashboard" is loaded (default index route),
            this link will be active.
          */}
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              `py-2 px-2 rounded block ${
                isActive ? "bg-white text-[#795548] font-bold" : "text-white"
              }`
            }
          >
            Profile
          </NavLink>

          <NavLink
            to="/dashboard/emne"
            className={({ isActive }) =>
              `py-2 px-2 rounded block ${
                isActive ? "bg-white text-[#795548] font-bold" : "text-white"
              }`
            }
          >
            Emne
          </NavLink>

          <NavLink
            to="/dashboard/worksheet"
            className={({ isActive }) =>
              `py-2 px-2 rounded block ${
                isActive ? "bg-white text-[#795548] font-bold" : "text-white"
              }`
            }
          >
            Work Sheet
          </NavLink>
        </div>

        {/* Divider */}
        <div className="border-t border-white my-3"></div>

        <ul className="flex flex-col gap-3">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `py-2 px-2 rounded block ${
                isActive ? "bg-white text-[#795548] font-bold" : "text-white"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/contact"
            end
            className={({ isActive }) =>
              `py-2 px-2 rounded block ${
                isActive ? "bg-white text-[#795548] font-bold" : "text-white"
              }`
            }
          >
            Contact
          </NavLink>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default DashLayout;
