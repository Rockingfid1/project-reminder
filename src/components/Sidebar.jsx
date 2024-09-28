import { useState } from "react";

export default function Sidebar({ onProjectClick, items, getIndex }) {
  const [selectedItem, setSelectedItem] = useState(false);

  function handleClick(index) {
    setSelectedItem(index);
  }

  return (
    <aside className="w-2/3 h-screen md:w-1/3 mt-12 pt-20 bg-black rounded-r-md">
      <h1 className="text-4xl font-bold mb-14 text-white ml-24">
        YOUR PROJECTS
      </h1>
      <button
        className="text-neutral-400 text-xl font-normal bg-stone-800 hover:bg-stone-700 rounded-md p-4 md:ml-36"
        onClick={() => {
          onProjectClick("Project Page");
          handleClick(null);
        }}
      >
        + Add Project
      </button>
      <ul className="flex flex-col gap-5 translate-y-10">
        {items.map((item, itemIndex) => {
          return item.title === "" ||
            item.description === "" ||
            item.dueDate === "" ? null : (
            <li key={itemIndex} className="ml-12">
              <button
                className={`${
                  selectedItem === itemIndex
                    ? "text-zinc-400 text-lg rounded-sm md:pr-6 lg:pr-56  hover:text-white bg-orange-950 bg-opacity-75 pl-2 pr-96 py-2"
                    : "text-stone-500 text-lg rounded-sm  hover:text-white"
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
    </aside>
  );
}
