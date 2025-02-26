import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Loading from "../../pages/loading/Loading";
import Error from "../../pages/Error/Error";

const Progress = () => {
  const [selectedName, setSelectedName] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");

  const {
    data: employees = [],
    isPending,
    error,
  } = useQuery({
    queryKey: ["work"],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_Localhost}/worklist`);
      return res.json();
    },
  });

  if (isPending) return <Loading />;
  if (error) return <Error />;

  const filteredData = employees?.filter((emp) => {
    const matchesName = !selectedName || emp.name === selectedName;

    const month = emp?.date?.split("-")[1];

    const matchesMonth = !selectedMonth || month === selectedMonth;

    return matchesName && matchesMonth;
  });

  const totalHours = filteredData.reduce(
    (sum, emp) => sum + parseInt(emp?.time),
    0
  );

  return (
    <div className="p-4 w-full mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">
        All Employee Progress
      </h1>

      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-4">
        <select
          onChange={(e) => setSelectedName(e.target.value)}
          className="p-2 border rounded-lg w-full sm:w-1/3"
        >
          <option value="" hidden>
            Sort by Name
          </option>
          {[...new Set(employees?.map((emp) => emp.name))].map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>

        <select
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="p-2 border rounded-lg w-full sm:w-1/3"
        >
          <option value="">All Months</option>{" "}
          <option value="01">January</option>
          <option value="02">February</option>
          <option value="03">March</option>
          <option value="04">April</option>
          <option value="05">May</option>
          <option value="06">June</option>
          <option value="07">July</option>
          <option value="08">August</option>
          <option value="09">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
      </div>

      <div className="bg-[#927c75] text-white p-3 rounded-lg text-center font-semibold text-lg mb-4">
        Total Work Hours: {totalHours}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full bg-white border rounded-lg shadow-md">
          <thead className="bg-[#795548]">
            <tr>
              <th className="p-2 text-left text-white">#</th>
              <th className="p-2 text-left text-white">Name</th>
              <th className="p-2 text-left text-white">Email</th>
              <th className="p-2 text-left text-white">Task</th>
              <th className="p-2 text-center text-white">Working Hour</th>
              <th className="p-2 text-center text-white">Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredData?.map((emp, index) => (
              <tr key={emp.id} className="border-b hover:bg-gray-50">
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{emp.name}</td>
                <td className="p-2">{emp.email}</td>
                <td className="p-2">{emp.workName}</td>
                <td className="p-2 text-center">{emp.time}</td>
                <td className="p-2 text-center">{emp.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Progress;
