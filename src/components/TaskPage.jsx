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
  onProjectClick,
}) {
  const [enteredTask, setEnteredTask] = useState("");
  const inputContent = useRef();

  function handleChange() {
    setEnteredTask(inputContent.current.value);
  }

  function handleSubmit(index) {
    onAdd(enteredTask, index);
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
      <p className="text-center text-base">
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
        className="lp:text-lg text-lg lg:text-xl lg:pb-1 text-white bg-black rounded-md pl-7 pr-7 w-fit"
        onClick={onSave}
      >
        Save
      </button>
    );

  return (
    <section
      className={`lp:h-5/6 lp:w-9/12 lp:items-start text-lg w-screen h-screen p-8 lp:ml-52 sm:p-20 ${
        !display ? "hidden lp:block" : ""
      }`}
    >
      <span className="flex justify-between mb-3">
        <h1 className=" text-stone-950 text-4xl font-bold lg:text-5xl lp:text-4xl">
          {item[itemIndex].title}
        </h1>
        <div>
          <button
            className=" text-stone-950 mr-6 lg:text-xl lp:text-lg"
            onClick={() => {
              onProjectClick("Default Page");
            }}
          >
            Back
          </button>
          <button
            className=" text-red-500 lg:text-xl lp:text-lg"
            onClick={() => {
              onDelete(itemIndex, true);
              handlePageDelete(tasks);
            }}
          >
            Delete
          </button>
        </div>
      </span>
      <p className="mb-5 text-stone-400 lg:text-xl lp:text-lg">
        {dateFormat(item[itemIndex].dueDate)}
      </p>
      <p className="mb-5 lg:pb-6 lg:text-2xl text-stone-950 whitespace-pre-wrap border-b-4 pb-3 border-stone-400 border-opacity-70 lp:text-xl">
        {item[itemIndex].description}
      </p>

      <div className="-mb-7 flex flex-col gap-5">
        <h1 className=" text-stone-950 text-4xl font-bold lp:text-3xl">
          Tasks
        </h1>

        <div className="flex flex-row gap-4">
          <input
            onChange={handleChange}
            ref={inputContent}
            className="rounded-sm bg-stone-300 opacity-100 text-black p-1"
            type="text"
            value={enteredTask}
          />
          <button
            className="font-medium lg:text-xl lp:text-lg"
            onClick={() => {
              handleSubmit(itemIndex);
            }}
          >
            Add Task
          </button>
        </div>

        {save}
        <ul
          className={
            "flex flex-col gap-6 bg-stone-300 bg-opacity-40 rounded-md p-2 mt-3 sm:p-5 lg:text-xl lp:text-lg"
          }
        >
          {list}
        </ul>
      </div>
    </section>
  );
}
