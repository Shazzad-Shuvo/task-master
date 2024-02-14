import { useState } from "react";
import TaskModal from "../../TaskModal/TaskModal";

// icon for modal (testing here)
import { MdAddTask } from "react-icons/md";
import Swal from "sweetalert2";

const Banner = () => {
  // for modal
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    // console.log(form.title.value);
    const taskData = {
      title: form.title.value,
      deadline: form.deadline.value,
      priority: form.priority.value,
      description: form.description.value,
      status: "incomplete",
    };

    // console.log(taskData);

    // get previous data from local storage
    const existingTasks = JSON.parse(localStorage.getItem("taskData")) || [];

    // add new data to the array
    const newTaskData = [...existingTasks, taskData];

    // save the updated array back to local storage
    localStorage.setItem("taskData", JSON.stringify(newTaskData));

    // success message
    Swal.fire({
      icon: "success",
      title: "Task added Successfully!!",
      showConfirmButton: false,
      timer: 1500,
      showClass: {
        popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
              `,
      },
      hideClass: {
        popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
          `,
      },
    });
    // reset the form
    form.reset();
  };

  return (
    <div className="max-w-[90rem] mx-auto flex flex-col md:flex-row gap-5 justify-between items-center px-10 mt-10">
      {/* banner text */}
      <div className="text-gray-700">
        <h2 className="text-5xl font-bold">
          Conquer your
          <span className="bg-gradient-to-r from-orange-300 to-orange-600 bg-clip-text text-transparent">
            {" "}
            To-Dos
          </span>
        </h2>
        <p className="text-xl font-semibold mt-2">
          Your journey to productivity begins here
        </p>
        <button
          className="border-2 rounded-lg border-orange-500 py-2 px-4 mt-4 text-orange-500 hover:text-white font-bold hover:bg-gradient-to-r from-orange-300 to-orange-600 hover:border-transparent"
          onClick={() => setOpen(true)}
        >
          Let's Explore <MdAddTask />
        </button>
        <TaskModal open={open} onClose={() => setOpen(false)}>
          <div className="w-[40rem] p-4 max-h-[500px] overflow-y-scroll">
            <div className="flex gap-5 justify-center">
              <MdAddTask size={56} className=" text-green-600" />
              <h2 className=" text-3xl font-semibold my-3">Add Task</h2>
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="mb-8">
                {/* task name */}
                <div className="flex flex-col gap-3 my-6">
                  <label>Task</label>
                  <input
                    required="true"
                    type="text"
                    placeholder="Task Title"
                    name="title"
                    className="border-2 rounded-lg p-3 w-full"
                  />
                </div>
                {/* task deadline */}
                <div className="flex flex-col gap-3 my-6">
                  <label>Deadline</label>
                  <input
                    required="true"
                    type="date"
                    placeholder=""
                    name="deadline"
                    className="border-2 rounded-lg p-3 w-full"
                  />
                </div>
                {/* task priority */}
                <div className="flex flex-col gap-3 my-6">
                  <label>Priority</label>
                  <select
                    required="true"
                    name="priority"
                    defaultValue=""
                    className="border-2 rounded-lg p-3 w-full"
                  >
                    <option value="" disabled hidden>
                      -- Select Priority Type --
                    </option>
                    <option value="low">Low</option>
                    <option value="moderate">Moderate</option>
                    <option value="high">High</option>
                  </select>
                </div>
                {/* task Description */}
                <div className="flex flex-col gap-3 my-6">
                  <label>Task Description</label>
                  <textarea
                    placeholder="Task Description"
                    name="description"
                    className="border-2 rounded-lg p-3 w-full"
                  ></textarea>
                </div>
              </div>
              <div className="text-center">
                <button className="rounded-lg py-2 px-4 mt-4 text-white hover:text-white font-bold bg-gradient-to-r from-orange-300 to-orange-500 hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600">
                  Create
                </button>
              </div>
            </form>
          </div>
        </TaskModal>
      </div>
      {/* banner image */}
      <div>
        <img src="/src/assets/tm-banner-removebg-preview.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
