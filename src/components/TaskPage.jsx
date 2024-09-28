import dateFormat from "../../dateFormatter";
import { useRef, useState } from "react";
import Tasks from "./Tasks";

export default function TaskPage({
  item,
  itemIndex,
  onDelete,
  display,
  onAdd,
  tasks,
  onClear,
  pageIndex,
  onSave,
}) {
  const [enteredTask, setEnteredTask] = useState("");
  const inputContent = useRef();

  function handleChange() {
    setEnteredTask(inputContent.current.value);
  }

  function handleSubmit() {
    onAdd(enteredTask, pageIndex);
    setEnteredTask("");
  }

  function handlePageDelete(tasks) {
    tasks.filter((task) => task.tasksId !== pageIndex);
  }

  let list;
  if (
    tasks.length === 0 ||
    tasks.filter((task) => task.tasksId === pageIndex && task.tasks !== "")
      .length === 0
  ) {
    list = (
      <p className="text-center">
        Tasks will show up here (Please do not save sensitive information)
      </p>
    );
  } else if (tasks.length > 0)
    list = <Tasks tasks={tasks} itemDelete={onClear} pageIndex={pageIndex} />;

  let save;
  if (
    tasks.filter((task) => task.tasksId === pageIndex && task.tasks !== "")
      .length > 0
  )
    save = (
      <button
        className="text-lg text-white bg-black rounded-md pl-7 pr-7 translate-y-40"
        onClick={onSave}
      >
        Save
      </button>
    );

  return (
    <div
      className={` h-44 w-7/12 items-start text-lg translate-x-24 translate-y-40  ${
        !display ? "hidden" : ""
      }`}
    >
      <span className="flex justify-between mb-3">
        <h1 className=" text-stone-950 text-4xl font-bold">
          {item[itemIndex].title}
        </h1>
        <button
          className=" text-stone-950"
          onClick={() => {
            onDelete(itemIndex, true);
            handlePageDelete(tasks);
          }}
        >
          Delete
        </button>
      </span>
      <p className="mb-5 text-stone-400">
        {dateFormat(item[itemIndex].dueDate)}
      </p>
      <p className="mb-5 text-stone-950 whitespace-pre-wrap border-b-4 pb-3 border-stone-400 border-opacity-70">
        {item[itemIndex].description}
      </p>

      <div className="translate-y-6">
        <h1 className=" text-stone-950 text-4xl font-bold translate-y-10">
          Tasks
        </h1>

        <div className="translate-y-16 flex flex-row gap-4">
          <input
            onChange={handleChange}
            ref={inputContent}
            className="rounded-sm bg-stone-300 opacity-100 text-black p-1"
            type="text"
            value={enteredTask}
          />
          <button
            className="font-medium"
            onClick={() => {
              handleSubmit(itemIndex);
            }}
          >
            Add Task
          </button>
        </div>
      </div>
      {save}
      <ul
        className={
          "translate-y-44 flex flex-col gap-6 bg-stone-300 bg-opacity-40 rounded-md  p-4 py-9"
        }
      >
        {list}
      </ul>
    </div>
  );
}
