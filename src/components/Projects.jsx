import { useRef } from "react";

export default function Project({ onAnyClick, onSave, details }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  return (
    <div className="flex flex-col items-end sm:-translate-y-20 md:translate-x-7 lg:translate-x-56">
      <div className="flex flex-row gap-5 w-6 h-10 -translate-x-12 translate-y-72">
        <button className="text-lg" onClick={() => onAnyClick("Default Page")}>
          Cancel
        </button>
        <button
          className="text-lg text-white bg-black rounded-md pl-7 pr-7"
          onClick={() => {
            onSave(
              title.current.value,
              description.current.value,
              dueDate.current.value
            );
            onAnyClick("Project Page");
          }}
        >
          Save
        </button>
      </div>

      <ul className="flex flex-col p-4 gap-5 translate-x-28 translate-y-72 items-end">
        <li className="flex flex-col gap-1">
          <label className="font-semibold text-stone-700">TITLE</label>
          <input
            className="bg-stone-300 bg-opacity-180 border-b-2 w-96 border-stone-400 rounded-sm focus:outline-none focus:border-stone-500"
            type="text"
            ref={title}
          />
        </li>
        <li className="flex flex-col gap-1">
          <label className="font-semibold text-stone-700">DESCRIPTION</label>
          <textarea
            className="bg-stone-300 bg-opacity-180 border-b-2 w-96 border-stone-400 rounded-sm focus:outline-none focus:border-stone-500 whitespace-pre-wrap"
            type="text"
            ref={description}
          />
        </li>
        <li className="flex flex-col gap-1">
          <label className="font-semibold text-stone-700">DUE DATE</label>
          <input
            className="bg-stone-300 bg-opacity-180 border-b-2 w-96 border-stone-400 rounded-sm focus:outline-none focus:border-stone-500"
            type="date"
            ref={dueDate}
          />
        </li>
        {details}
      </ul>
    </div>
  );
}
