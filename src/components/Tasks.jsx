export default function Tasks({ tasks, itemDelete }) {
  return tasks
    .filter((task) => task.task.trim() !== "")
    .map((task) => {
      return (
        <li className="flex flex-row justify-between" key={task.taskSpecialId}>
          <p className="font-semibold">{task.task}</p>
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
    });
}
