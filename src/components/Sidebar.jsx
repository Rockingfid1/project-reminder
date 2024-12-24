import { useState } from "react";

export default function Sidebar({
  onProjectClick,
  items,
  getIndex,
  projectClicked,
}) {
  const [selectedItem, setSelectedItem] = useState(false);

  function handleClick(index) {
    setSelectedItem(index);
  }

  return (
    <aside
      className={`min-h-screen min-w-screen ${
        projectClicked === "Project Page" || projectClicked === "Task Page"
          ? "hidden lp:block"
          : ""
      }
     lp:w-2/3 lp:h-screen lp:pt-12 bg-black rounded-r-sm`}
    >
      <div className="flex flex-col justify-between items-center md:items-center">
        <span className="flex flex-col items-center md:items-center">
          <h1 className="text-3xl text-white text-center p-8 font-semibold lp:font-semibold lp:mb-6 lp:text-white lp:text-center lg:text-5xl lp:text-3xl">
            YOUR PROJECTS
          </h1>
          <button
            className="text-neutral-400 text-lg font-normal bg-stone-800 hover:bg-stone-700 rounded-md p-2 lg:text-2xl lp:text-xl"
            onClick={() => {
              onProjectClick("Project Page");
              handleClick(null);
            }}
          >
            + Add Project
          </button>
          <ul className="flex flex-col gap-5 p-6">
            {items.map((item, itemIndex) => {
              return item.title === "" ||
                item.description === "" ||
                item.dueDate === "" ? null : (
                <li key={itemIndex}>
                  <button
                    className={`${
                      selectedItem === itemIndex
                        ? "text-zinc-400 bg-opacity-75 bg-orange-950 text-base rounded-lg hover:text-white lp:bg-orange-950 lp:bg-opacity-75 lp:text-lg lp:rounded-sm pl-2 pr-72  sm:pr-80 py-2 lg:text-2xl"
                        : "text-stone-400 text-base rounded-lg bg-opacity-75 bg-orange-950 pl-2  pr-72 py-2  sm:text-zinc-400 sm:text-lg sm:rounded-lg sm:p-2 lp:text-stone-500 lp:text-lg lp:rounded-sm lp:bg-opacity-30 hover:text-white sm:pr-80 sm:bg-orange-950 sm:bg-opacity-75 lg:text-2xl"
                    }`}
                    onClick={() => {
                      handleClick(itemIndex);
                      onProjectClick("Task Page");
                      getIndex(itemIndex);
                    }}
                  >
                    {item.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </span>
        {/* <Copyright /> */}
      </div>
    </aside>
  );
}
