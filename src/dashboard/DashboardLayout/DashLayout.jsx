import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../components/firebase/AuthProvider";
import Loading from "../../pages/loading/Loading";
import Error from "../../pages/Error/Error";
import { useQuery } from "@tanstack/react-query";
import { GiHamburgerMenu } from "react-icons/gi";

const DashLayout = () => {
  const { user } = useContext(AuthContext);
  const {
    data: bebohakari = {},
    isPending,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_Localhost}/getUser/${user.email}`
      );
      return res.json();
    },
  });

  if (isPending) return <Loading />;
  if (error) return <Error />;
  return (
    <div className="flex h-screen flex-col md:flex-row">
      {/* Sidebar */}
      <div className="drawer md:hidden">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className=" mt-5 ml-5 btn drawer-button">
            <GiHamburgerMenu className="text-xl" /> Menu
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu bg-[#795548] text-base-content min-h-full w-48 p-4">
            {/* Sidebar content here */}
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) =>
                `py-2 px-2 rounded block mb-2 ${
                  isActive ? "bg-white text-[#795548] font-bold" : "text-white"
                }`
              }
            >
              Profile
            </NavLink>
            {bebohakari.role === "employee" && (
              <div className="flex flex-col gap-2">
                <NavLink
                  to="/dashboard/worksheet"
                  className={({ isActive }) =>
                    `py-2 px-2 rounded block ${
                      isActive
                        ? "bg-white text-[#795548] font-bold"
                        : "text-white"
                    }`
                  }
                >
                  Work Sheet
                </NavLink>

                <NavLink
                  to="/dashboard/paymentHistory"
                  className={({ isActive }) =>
                    `py-2 px-2 rounded block ${
                      isActive
                        ? "bg-white text-[#795548] font-bold"
                        : "text-white"
                    }`
                  }
                >
                  Payment History
                </NavLink>
              </div>
            )}
            {/* hr */}
            {bebohakari.role === "hr" && (
              <div className="flex flex-col gap-3">
                <NavLink
                  to="/dashboard/empList"
                  className={({ isActive }) =>
                    `py-2 px-2 rounded block ${
                      isActive
                        ? "bg-white text-[#795548] font-bold"
                        : "text-white"
                    }`
                  }
                >
                  Employee List
                </NavLink>
                <NavLink
                  to="/dashboard/progress"
                  className={({ isActive }) =>
                    `py-2 px-2 rounded block ${
                      isActive
                        ? "bg-white text-[#795548] font-bold"
                        : "text-white"
                    }`
                  }
                >
                  Progress
                </NavLink>
              </div>
            )}
            {/* admin */}
            {bebohakari.role === "admin" && (
              <div className="flex flex-col gap-3">
                <NavLink
                  to="/dashboard/allEmployee"
                  className={({ isActive }) =>
                    `py-2 px-2 rounded block ${
                      isActive
                        ? "bg-white text-[#795548] font-bold"
                        : "text-white"
                    }`
                  }
                >
                  All Employee
                </NavLink>
                <NavLink
                  to="/dashboard/payroll"
                  className={({ isActive }) =>
                    `py-2 px-2 rounded block ${
                      isActive
                        ? "bg-white text-[#795548] font-bold"
                        : "text-white"
                    }`
                  }
                >
                  Payroll
                </NavLink>
              </div>
            )}
            <div className="border-t border-white my-3"></div>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `py-2 px-2 rounded block mb-1 ${
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
          </div>
        </div>
      </div>
      <div className="bg-[#795548] h-screen pb-96 text-white w-64 p-4 hidden md:block">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          WorkTrackPro.
        </h2>
        <div className="flex flex-col gap-3">
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

          {/* employee */}
          {bebohakari.role === "employee" && (
            <div className="flex flex-col gap-3">
              <NavLink
                to="/dashboard/worksheet"
                className={({ isActive }) =>
                  `py-2 px-2 rounded block ${
                    isActive
                      ? "bg-white text-[#795548] font-bold"
                      : "text-white"
                  }`
                }
              >
                Work Sheet
              </NavLink>

              <NavLink
                to="/dashboard/paymentHistory"
                className={({ isActive }) =>
                  `py-2 px-2 rounded block ${
                    isActive
                      ? "bg-white text-[#795548] font-bold"
                      : "text-white"
                  }`
                }
              >
                Payment History
              </NavLink>
            </div>
          )}
          {/* hr */}
          {bebohakari.role === "hr" && (
            <div className="flex flex-col gap-3">
              <NavLink
                to="/dashboard/empList"
                className={({ isActive }) =>
                  `py-2 px-2 rounded block ${
                    isActive
                      ? "bg-white text-[#795548] font-bold"
                      : "text-white"
                  }`
                }
              >
                Employee List
              </NavLink>
              <NavLink
                to="/dashboard/progress"
                className={({ isActive }) =>
                  `py-2 px-2 rounded block ${
                    isActive
                      ? "bg-white text-[#795548] font-bold"
                      : "text-white"
                  }`
                }
              >
                Progress
              </NavLink>
            </div>
          )}
          {/* admin */}
          {bebohakari.role === "admin" && (
            <div className="flex flex-col gap-3">
              <NavLink
                to="/dashboard/allEmployee"
                className={({ isActive }) =>
                  `py-2 px-2 rounded block ${
                    isActive
                      ? "bg-white text-[#795548] font-bold"
                      : "text-white"
                  }`
                }
              >
                All Employee
              </NavLink>
              <NavLink
                to="/dashboard/payroll"
                className={({ isActive }) =>
                  `py-2 px-2 rounded block ${
                    isActive
                      ? "bg-white text-[#795548] font-bold"
                      : "text-white"
                  }`
                }
              >
                Payroll
              </NavLink>
            </div>
          )}
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
