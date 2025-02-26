import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { AuthContext } from "../../components/firebase/AuthProvider";
import Loading from "../../pages/loading/Loading";
import Error from "../../pages/Error/Error";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const {
    data: employees = [],
    isPending,
    error,
  } = useQuery({
    queryKey: ["paymentSuccess"],
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_Localhost}/paymentHistory/${user.email}`
      );
      return res.json();
    },
  });

  if (isPending) return <Loading />;
  if (error) return <Error />;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedEmployees = employees.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const totalPages = Math.ceil(employees.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <h1 className="text-3xl font-bold text-center mb-4">Employee List</h1>
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <thead className="bg-[#795548] text-gray-700">
            <tr>
              <th className="p-3 text-center text-white">#</th>
              <th className="p-3 text-center text-white">Month</th>
              <th className="p-3 text-center text-white">Year </th>
              <th className="p-3 text-center text-white">Amount</th>
              <th className="py-3 text-center text-white">Transaction ID</th>
            </tr>
          </thead>
          <tbody>
            {selectedEmployees?.map((employee, index) => (
              <tr key={employee.id} className="border-b hover:bg-gray-50">
                <td className="p-3 font-semibold text-center text-gray-800">
                  {startIndex + index + 1}
                </td>
                <td className="p-3 text-center">{employee.month}</td>
                <td className="p-3 text-center">{employee.year}</td>
                <td className="p-3 text-center text-gray-600">
                  {employee.salary}
                </td>
                <td className="py-3 text-center font-semibold">
                  {employee.trxId}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-center mt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 rounded-l"
          >
            Prev
          </button>
          <span className="px-4 py-2">{`Page ${currentPage} of ${totalPages}`}</span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 rounded-r"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
