import logo from "../assets/reminder-app-logo.png";

export default function DefaultPage({ onPageClick }) {
  return (
    <div className="hidden lp:flex lp:flex-col lp:items-center lp:w-3/5 lp:h-1/3 lp:ml-96 lp:pt-5 lp:gap-8 lp:-translate-x-48 lp:translate-y-60">
      <img
        src={logo}
        alt="logo image"
        className="w-36 shadow-black drop-shadow-2xl"
      />
      <h1 className="font-bold text-stone-600 text-3xl">No Project Selected</h1>
      <p className=" text-stone-950 text-2xl">
        Select a project or get started with a new one.
        <br />
        Please select <strong className="font-semibold">"save"</strong> before
        making any changes
        <br />(<strong className="font-semibold">Deleting</strong> a page,{" "}
        <strong className="font-semibold">clearing</strong> a task, etc). <br />
        {/* <br />
        <br /> Email any bugs:{" "} */}
        {/* <a href={`mailto: omfugo2006@gmail.com`}>omfugo2006@gmail.com</a> */}
      </p>
      <button
        className="text-neutral-400 text-2xl bg-stone-900 rounded-md p-4"
        onClick={() => onPageClick("Project Page")}
      >
        Create new project
      </button>
    </div>
  );
}
