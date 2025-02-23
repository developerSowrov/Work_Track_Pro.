import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "../../pages/loading/Loading";
import { useContext, useState } from "react";
import { AuthContext } from "../../components/firebase/AuthProvider";

const WorkSheet = () => {
  const { user } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const {
    data: tasks = [],
    isPending,
    error,
    refetch,
  } = useQuery({
    queryKey: ["worklist"],
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_Localhost}/worklist/${user.email}`
      );
      return res.json();
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const workName = form.work.value;
    const time = form.time.value;
    const date = form.date.value;
    const email = user.email;
    const newWork = { workName, time, date, email };

    try {
      await axios.post(`${import.meta.env.VITE_Localhost}/workAdd`, newWork);
      refetch();
      form.reset();
    } catch (err) {
      console.error("Error adding work:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_Localhost}/deleteWork/${id}`);
      refetch();
    } catch (err) {
      console.error(err);
    }
  };

  const handleOpenModal = (task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const handleUpdate = async () => {
    try {
      await axios.patch(
        `${import.meta.env.VITE_Localhost}/updateWork/${selectedTask._id}`,
        {
          workName: selectedTask.workName,
          time: selectedTask.time,
          date: selectedTask.date,
        }
      );
      refetch();
      setIsModalOpen(false);
    } catch (err) {
      console.error("Error updating work:", err);
    }
  };

  if (isPending) return <Loading />;
  if (error)
    return <p className="text-red-500">An error occurred: {error.message}</p>;

  return (
    <div className="w-full mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Work Sheet</h1>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="font-semibold mb-2">Add a New Work Query</h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          <select name="work" className="border p-2 rounded w-full">
            <option value="" hidden>
              Select Your Task
            </option>
            <option value="sales">Sales</option>
            <option value="support">Support</option>
            <option value="paper">Paper Work</option>
            <option value="content">Content</option>
          </select>
          <input
            type="number"
            name="time"
            placeholder="Hours Worked"
            className="border p-2 rounded w-full"
          />
          <input
            type="date"
            name="date"
            className="border p-2 rounded w-full"
          />
          <button className="bg-blue-100 text-black px-4 py-2 rounded">
            Submit
          </button>
        </form>
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-100">
              <th className="p-2">#</th>
              <th className="p-2">Task</th>
              <th className="p-2">Working Hours</th>
              <th className="p-2">Date</th>
              <th className="p-2">Edit</th>
              <th className="p-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={task._id || index} className="text-center">
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{task.workName}</td>
                <td className="p-2">{task.time}</td>
                <td className="p-2">{task.date}</td>
                <td className="p-2">
                  <button
                    onClick={() => handleOpenModal(task)}
                    className="text-blue-500"
                  >
                    ✏️
                  </button>
                </td>
                <td className="p-2">
                  <button
                    onClick={() => handleDelete(task._id)}
                    className="text-red-500"
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && selectedTask && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="fixed inset-0 bg-blue-200/50 backdrop-blur-sm"></div>

          <div className="bg-white p-6 rounded-lg shadow-lg z-10 w-96">
            <h2 className="text-xl font-bold mb-4">Update Work</h2>

            <select
              value={selectedTask.workName}
              onChange={(e) =>
                setSelectedTask({ ...selectedTask, workName: e.target.value })
              }
              className="border p-2 rounded w-full"
            >
              <option value="sales">Sales</option>
              <option value="support">Support</option>
              <option value="paper">Paper Work</option>
              <option value="content">Content</option>
            </select>

            <input
              type="number"
              value={selectedTask.time}
              onChange={(e) =>
                setSelectedTask({ ...selectedTask, time: e.target.value })
              }
              placeholder="Hours Worked"
              className="border p-2 rounded w-full mt-2"
            />
            <input
              type="date"
              value={selectedTask.date}
              onChange={(e) =>
                setSelectedTask({ ...selectedTask, date: e.target.value })
              }
              className="border p-2 rounded w-full mt-2"
            />

            <div className="flex justify-end mt-4 space-x-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Close
              </button>
              <button
                onClick={handleUpdate}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkSheet;
