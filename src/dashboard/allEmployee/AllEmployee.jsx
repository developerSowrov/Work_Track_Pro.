import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Error from "../../pages/Error/Error";
import Loading from "../../pages/loading/Loading";
import { FaCheckCircle, FaQuestion } from "react-icons/fa";
import { GiFireDash } from "react-icons/gi";
import axios from "axios";

const AllEmployee = () => {
  const [viewMode, setViewMode] = useState("table"); // "table" or "grid"

  const {
    data: employees = [],
    isPending,
    error,
    refetch,
  } = useQuery({
    queryKey: ["worklist"],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_Localhost}/allEmployee`);
      return res.json();
    },
  });

  if (isPending) return <Loading />;
  if (error) return <Error />;

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold text-center mb-4">Employee List</h1>

      <div className="flex justify-center mb-4">
        <button
          onClick={() => setViewMode(viewMode === "table" ? "grid" : "table")}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          {viewMode === "table"
            ? "Switch to Grid View"
            : "Switch to Table View"}
        </button>
      </div>

      {viewMode === "table" ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
            <thead className="bg-[#795548] text-gray-700">
              <tr>
                <th className="p-3 text-left text-white">#</th>
                <th className="p-3 text-left text-white">Name</th>
                <th className="p-3 text-left text-white">Designation</th>
                <th className="p-3 text-center text-white ">Make HR</th>
                <th className="p-3 text-center text-white">Fire</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, index) => (
                <tr key={employee.id} className="border-b hover:bg-gray-50">
                  <td className="p-3 font-semibold text-gray-800">
                    {index + 1}
                  </td>
                  <td className="p-3">{employee.name}</td>
                  <td className="p-3 text-gray-600">{employee.designation}</td>
                  <td className="text-center">
                    <button
                      onClick={async () => {
                        await axios.patch(
                          `${import.meta.env.VITE_Localhost}/makeHR/${
                            employee._id
                          }`,
                          { role: "hr" }
                        );
                        refetch();
                      }}
                      className="focus:outline-none"
                    >
                      {employee.role === "hr" ? (
                        <FaCheckCircle className="text-green-500 text-xl " />
                      ) : (
                        <FaQuestion className="text-gray-500 text-xl" />
                      )}
                    </button>
                  </td>
                  <td className="text-center">
                    <button>
                      <GiFireDash className="text-2xl text-red-500 ml-3" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        // Grid View
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {employees.map((employee) => (
            <div
              key={employee.id}
              className="bg-white shadow-md rounded-lg p-5 border"
            >
              <h2 className="text-xl font-semibold">{employee.name}</h2>
              <p className="text-gray-600">{employee.designation}</p>
              <div className="flex items-center justify-between mt-3">
                <button
                  onClick={async () => {
                    await axios.patch(
                      `${import.meta.env.VITE_Localhost}/makeHR/${
                        employee._id
                      }`,
                      { role: "hr" }
                    );
                    refetch();
                  }}
                  className="text-green-600 hover:text-green-700 transition"
                >
                  {employee.role === "hr" ? (
                    <FaCheckCircle className="text-xl" />
                  ) : (
                    <FaQuestion className="text-xl" />
                  )}
                </button>
                <button className="text-red-500 hover:text-red-700 transition">
                  <GiFireDash className="text-2xl" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllEmployee;
