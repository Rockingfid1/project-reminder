import logo from "../assets/reminder-app-logo.png";

export default function DefaultPage({ onPageClick }) {
  return (
    <div className="hidden lp:flex lp:flex-col lp:items-center lp:w-fit lp:h-fit lp:pt-5 lp:gap-4 lp:m-auto text-center">
      <img
        src={logo}
        alt="logo image"
        className="w-36 shadow-black drop-shadow-2xl"
      />
      <h1 className="font-bold text-stone-600 text-3xl">No Project Selected</h1>
      <p className=" text-stone-950 text-2xl">
        Select a project or get started with a new one.
        <br />
        <a className="hover:text-red-500" href="mailto: omfugo2006@gmail.com">
          Email me
        </a>
        <br />
        <a
          className="hover:text-red-500"
          href="https://michaelfrankokoye.netlify.app/"
        >
          Portfolio
        </a>
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
