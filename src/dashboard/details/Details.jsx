import { useQuery } from "@tanstack/react-query";
import Loading from "../../pages/loading/Loading";
import Error from "../../pages/Error/Error";
import { useParams } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Details = () => {
  const params = useParams();
  const {
    data: employee = [],
    isPending,
    error,
  } = useQuery({
    queryKey: ["worklist"],
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_Localhost}/details/${params.id}`
      );
      return res.json();
    },
  });

  if (isPending) return <Loading />;
  if (error) return <Error></Error>;
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen p-4 bg-gray-100">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Employee Details
          </h1>

          <div className="flex flex-col sm:flex-row border-0 border-b border-gray-300 items-center gap-6 p-4 ">
            <img
              src={employee.photoUrl}
              alt={employee.name}
              className="w-24 h-24 rounded-full border border-gray-300  object-cover"
            />
            <div className="text-center sm:text-left">
              <h2 className="text-xl font-bold text-blue-700">
                {employee.name}
              </h2>
              <p className="text-gray-600">{employee.role}</p>
            </div>
          </div>

          <div className="mt-4 space-y-4">
            <div className="grid grid-cols-2 gap-20 border-b border-gray-300 pb-2">
              <span className="font-semibold text-gray-700 grid-cols-1">
                Email:
              </span>
              <span className="text-gray-600 font-bold grid-cols-1">
                {employee.email}
              </span>
            </div>

            <div className=" grid border-b gap-20 grid-cols-2 border-gray-300 pb-2">
              <span className="font-semibold text-gray-700 grid-cols-1">
                Role:
              </span>
              <span className="text-gray-600 font-bold  grid-cols-1">
                {employee.role}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-20 border-b border-gray-300 pb-2">
              <span className="font-semibold text-gray-700">
                Bank Account No.:
              </span>
              <span className="text-gray-600 font-bold ">
                {employee.account}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-20 border-b border-gray-300 pb-2">
              <span className="font-semibold text-gray-700">Salary:</span>
              <span className="text-gray-600 font-bold ">
                ${employee.salary}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-20 border-b border-gray-300 pb-2">
              <span className="font-semibold text-gray-700">Designation:</span>
              <span className="text-gray-600 font-bold ">
                {employee.designation}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-700">
                Verification Status:
              </span>
              {employee.verified ? (
                <FaCheckCircle className="text-green-500 text-xl mx-auto" />
              ) : (
                <ImCross className="text-red-500 text-xl mx-auto" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
