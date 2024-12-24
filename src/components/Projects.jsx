import { useRef, useState } from "react";
import ErrorMessage from "./ErrorMessage";

export default function Project({ onPageClick, onSave }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const [error, setError] = useState(false);

  function handleSave() {
    if (
      title.current.value.trim() === "" ||
      description.current.value.trim() === "" ||
      dueDate.current.value.trim() === ""
    ) {
      setError(true);
      return;
    } else {
      onSave(
        title.current.value,
        description.current.value,
        dueDate.current.value
      );
      onPageClick("Default Page");
      setError(false);
    }
  }

  return (
    <section className="h-screen w-screen flex flex-col items-center">
      <div className="flex flex-col items-center w-fit h-fit m-auto">
        <div className="flex flex-row gap-5 w-6 h-10 -mb-3 lp:ml-36">
          <button
            className="text-lg sm:text-xl lg:text-2xl lp:text-lg hover:text-red-600"
            onClick={() => onPageClick("Default Page")}
          >
            Cancel
          </button>
          <button
            className="text-lg sm:text-xl text-white bg-black rounded-md px-5 lg:text-2xl lg:pb-2 lg:pt-1 lp:text-lg lp:px-3"
            onClick={handleSave}
          >
            Save
          </button>
        </div>

        <ul className="flex flex-col p-4 gap-5 items-end">
          <li className="flex flex-col gap-1">
            <label className="font-semibold text-stone-700 lg:text-xl lp:text-base">
              TITLE
            </label>
            <input
              className="bg-stone-300 bg-opacity-180 border-b-2 w-72 sm:w-80 lg:w-96 border-stone-400 rounded-sm focus:outline-none focus:border-stone-500"
              type="text"
              ref={title}
            />
          </li>
          <li className="flex flex-col gap-1">
            <label className="font-semibold text-stone-700 lg:text-xl lp:text-base">
              DESCRIPTION
            </label>
            <textarea
              className="bg-stone-300 bg-opacity-180 border-b-2 w-72 sm:w-80 lg:w-96 border-stone-400 rounded-sm focus:outline-none focus:border-stone-500 whitespace-pre-wrap"
              type="text"
              ref={description}
            />
          </li>
          <li className="flex flex-col gap-1">
            <label className="font-semibold text-stone-700 lg:text-xl lp:text-base">
              DUE DATE
            </label>
            <input
              className="bg-stone-300 bg-opacity-180 border-b-2 w-72 sm:w-80 lg:w-96 border-stone-400 rounded-sm focus:outline-none focus:border-stone-500"
              type="date"
              ref={dueDate}
            />
          </li>
          {error && <ErrorMessage />}
        </ul>
      </div>
    </section>
  );
}
