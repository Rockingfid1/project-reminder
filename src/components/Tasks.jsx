export default function Tasks({ tasks, itemDelete, pageIndex }) {
  return tasks
    .filter((task) => task.tasksId === pageIndex && task.tasks !== "")
    .map((task, taskIndex) => {
      return (
        <li className="flex flex-row justify-between" key={taskIndex}>
          <p className="font-semibold">{task.tasks}</p>
          <button
            className="hover:text-red-600"
            onClick={() => {
              itemDelete(task);
            }}
          >
            Clear
          </button>
        </li>
      );
    })
    .reverse();
}
