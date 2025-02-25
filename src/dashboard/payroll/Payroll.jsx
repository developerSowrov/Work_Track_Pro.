import { useQuery } from "@tanstack/react-query";
import Loading from "../../pages/loading/Loading";
import Error from "../../pages/Error/Error";
import { FaCheckCircle } from "react-icons/fa";
import axios from "axios";

const Payroll = () => {
  const {
    data: employees = [],
    isPending,
    error,
    refetch,
  } = useQuery({
    queryKey: ["reqlist"],
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_Localhost}/getPaymentReq`
      );
      return res.json();
    },
  });
  const payBtn = async (id) => {
    const currentDate = new Date().toLocaleDateString("en-GB");
    try {
      await axios.patch(
        `${import.meta.env.VITE_Localhost}/paymentStatus/${id}`,
        {
          payment: true,
          date: currentDate,
        }
      );

      refetch();
    } catch (err) {
      console.log(err);
    }
  };
  if (isPending) return <Loading />;
  if (error) return <Error />;
  return (
    <div className="overflow-x-auto">
      <h1 className="text-3xl font-bold text-center mb-4">Employee List</h1>
      <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
        <thead className="bg-[#795548] text-gray-700">
          <tr>
            <th className="p-3 text-left text-white">#</th>
            <th className="p-3 text-left text-white">Name</th>
            <th className="p-3 text-left text-white">Salary</th>
            <th className="p-3 text-center text-white">Month</th>
            <th className="p-3 text-center text-white">Year </th>
            <th className="p-3 text-center text-white">Payment</th>
            <th className="py-3   text-center text-white">Date</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={employee.id} className="border-b hover:bg-gray-50">
              <td className="p-3 font-semibold text-gray-800">{index + 1}</td>
              <td className="p-3">{employee.name}</td>
              <td className="p-3 text-gray-600">{employee.salary}</td>
              <td className="p-3 text-center">{employee.month}</td>
              <td className="p-3 text-center">{employee.year}</td>
              <td className=" p-3 text-center">
                {employee.payment ? (
                  <button disabled>
                    <FaCheckCircle className="text-gray-400 text-2xl mx-auto" />
                  </button>
                ) : (
                  <button
                    onClick={() => payBtn(employee._id, employee.email)}
                    className=" "
                  >
                    <FaCheckCircle className="text-green-500 text-2xl mx-auto" />
                  </button>
                )}
              </td>

              <td className=" py-3  text-center font-semibold">
                {employee.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Payroll;
