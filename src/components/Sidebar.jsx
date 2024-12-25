import { StatusBar } from "react-native";

export default function Sidebar({
  onProjectClick,
  items,
  getIndex,
  projectClicked,
  selectedItem,
  handleSelectIndex,
}) {
  function handleProjectSwitch(itemIndex) {
    handleSelectIndex(itemIndex);

    setTimeout(() => {
      onProjectClick("Task Page");
    }, 350);
    onProjectClick("Fetch Tasks");

    getIndex(itemIndex);
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <aside
        className={`min-h-screen min-w-screen ${
          projectClicked === "Project Page" || projectClicked === "Task Page"
            ? "hidden lp:block  lp:w-[65%]"
            : projectClicked === "Fetch Tasks"
            ? "hidden lp:block lp:w-[39%]"
            : "lp:w-[39%]"
        }
 lp:h-screen lp:pt-12 bg-black rounded-r-sm`}
      >
        <div className="flex flex-col justify-between items-center md:items-center">
          <span className="flex flex-col items-center md:items-center">
            <h1 className="text-3xl text-white text-center p-8 font-semibold 2md:text-4xl lp:font-semibold lp:mb-6 lp:text-white lp:text-center lg:text-5xl lp:text-3xl">
              YOUR PROJECTS
            </h1>
            <button
              className="text-neutral-400 text-lg font-normal bg-stone-800 hover:bg-stone-700 rounded-md p-2 lg:text-2xl lp:text-xl"
              onClick={() => {
                onProjectClick("Project Page");
                handleSelectIndex(null);
              }}
            >
              + Add Project
            </button>
            <ul className="flex flex-col gap-5 p-6 items-center">
              {items.map((item, itemIndex) => {
                return item.title === "" ||
                  item.description === "" ||
                  item.dueDate === "" ? null : (
                  <li key={itemIndex}>
                    <button
                      className={`${
                        selectedItem === itemIndex
                          ? "text-zinc-400 bg-opacity-75 bg-orange-950 text-base text-center text-nowrap rounded-lg hover:text-white lp:bg-orange-950 2md:pl-4 lp:bg-opacity-75 lp:text-lg lp:rounded-sm py-3 lg:py-3 px-7 sm:pr-80 lg:text-2xl 2md:text-xl"
                          : "text-stone-400 text-base rounded-lg bg-opacity-75 2md:pl-4 text-center text-nowrap bg-orange-950 py-3 px-7 lg:py-3  sm:text-zinc-400 sm:text-lg sm:rounded-lg sm:p-2 lp:text-stone-500 lp:text-lg lp:rounded-sm lp:bg-opacity-25 hover:text-white sm:pr-80 sm:bg-orange-950 sm:bg-opacity-75 lg:text-2xl 2md:text-xl"
                      }`}
                      onClick={() => handleProjectSwitch(itemIndex)}
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
    </>
  );
}
