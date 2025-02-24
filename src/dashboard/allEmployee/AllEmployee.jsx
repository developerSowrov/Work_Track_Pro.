// import React from 'react';

import { useQuery } from "@tanstack/react-query";
import Error from "../../pages/Error/Error";
import Loading from "../../pages/loading/Loading";
import { FaCheckCircle, FaQuestion } from "react-icons/fa";
import { GiFireDash } from "react-icons/gi";
import axios from "axios";

const AllEmployee = () => {
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
    <div>
      <div className="overflow-x-auto">
        <h1 className="text-3xl font-bold text-center mb-4">Employee List</h1>
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <thead className="bg-[#795548] text-gray-700">
            <tr>
              <th className="p-3 text-left text-white">#</th>
              <th className="p-3 text-left text-white">Name</th>
              <th className="p-3 text-left text-white">Designation</th>
              <th className="p-3 text-left  text-white">Make HR</th>
              <th className="p-3 text-left text-white">Fire</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={employee.id} className="border-b hover:bg-gray-50">
                <td className="p-3 font-semibold text-gray-800">{index + 1}</td>
                <td className="p-3">{employee.name}</td>
                <td className="p-3 text-gray-600">{employee.designation}</td>
                <td className="">
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
                      <FaCheckCircle className="text-green-500 text-xl" />
                    ) : (
                      <FaQuestion></FaQuestion>
                    )}
                  </button>
                </td>
                <td>
                  <GiFireDash className="text-2xl ml-3" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllEmployee;
