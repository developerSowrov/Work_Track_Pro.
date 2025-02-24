import { FaCheckCircle } from "react-icons/fa";
import { BsFillEyeFill, BsCurrencyDollar } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../pages/loading/Loading";
import Error from "../../pages/Error/Error";
import { Link } from "react-router-dom";
import axios from "axios";

const EmpList = () => {
  // Fetch Employees
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

  // Mutation to update verification status

  if (isPending) return <Loading />;
  if (error) return <Error />;
  refetch();
  return (
    <div className="overflow-x-auto">
      <h1 className="text-3xl font-bold text-center mb-4">Employee List</h1>
      <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
        <thead className="bg-[#795548] text-gray-700">
          <tr>
            <th className="p-3 text-left text-white">#</th>
            <th className="p-3 text-left text-white">Name</th>
            <th className="p-3 text-left text-white">Email</th>
            <th className="p-3 text-center text-white">Verified</th>
            <th className="p-3 text-center text-white">Bank Account</th>
            <th className="p-3 text-center text-white">Salary</th>
            <th className="p-3 text-center text-white">Pay</th>
            <th className="p-3 text-center text-white">Details</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={employee.id} className="border-b hover:bg-gray-50">
              <td className="p-3 font-semibold text-gray-800">{index + 1}</td>
              <td className="p-3">{employee.name}</td>
              <td className="p-3 text-gray-600">{employee.email}</td>
              <td className="p-3 text-center">
                <button
                  onClick={async () => {
                    await axios.patch(
                      `${import.meta.env.VITE_Localhost}/verified/${
                        employee._id
                      }`,
                      { verified: !employee.verified }
                    );
                    refetch();
                  }}
                  className="focus:outline-none"
                >
                  {employee.verified ? (
                    <FaCheckCircle className="text-green-500 text-xl mx-auto" />
                  ) : (
                    <ImCross className="text-red-500 text-xl mx-auto" />
                  )}
                </button>
              </td>
              <td className="p-3 text-center">{employee.account}</td>
              <td className="p-3 text-center font-semibold">
                {employee.salary}
              </td>
              <td className="p-3 text-center">
                <button className="bg-[#795548] text-white p-2 rounded-lg hover:bg-[#462f26]">
                  <BsCurrencyDollar className="text-xl" />
                </button>
              </td>
              <td className="p-3 text-center">
                <Link to={`/dashboard/details/${employee._id}`}>
                  <button className="bg-gray-200 p-2 rounded-lg hover:bg-gray-300">
                    <BsFillEyeFill className="text-xl text-gray-700" />
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmpList;
