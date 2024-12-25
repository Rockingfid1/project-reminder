import DefaultPage from "./components/DefaultPage";
import Project from "./components/Projects";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import TaskPage from "./components/TaskPage";
import FetchingTasks from "./components/FetchingTasks";

function App() {
  const [addProjectClicked, setAddProjectClicked] = useState("Default Page");
  const [projectDetails, setProjectDetails] = useState(
    JSON.parse(localStorage.getItem("projectDetails")) || []
  );
  const [selectedIndex, setSelectedIndex] = useState();
  const [randomNumber, setRandomNumber] = useState(Math.random());
  const [selectedItem, setSelectedItem] = useState(false);

  function handleSelectIndex(index) {
    setSelectedItem(index);
  }

  function handleIndexAndDelete(index, remove = false) {
    setSelectedIndex(index);

    if (remove) {
      const deletedProjectDetails = projectDetails.filter(
        (_, i) => i !== index
      );

      if (deletedProjectDetails.length === 0)
        localStorage.removeItem(
          "projectDetails",
          JSON.stringify(deletedProjectDetails)
        );
      else
        localStorage.setItem(
          "projectDetails",
          JSON.stringify(deletedProjectDetails)
        );

      setProjectDetails(deletedProjectDetails);
      setAddProjectClicked("Default Page");
    }
  }

  function handleClick(pageType) {
    setAddProjectClicked(pageType);
  }

  function handleSave(titleRef, descriptionRef, dueDateRef) {
    setRandomNumber(Math.random());
    setProjectDetails((prev) => {
      const projectsArray = [
        ...prev,
        {
          title: titleRef,
          description: descriptionRef,
          dueDate: dueDateRef,
          id: randomNumber,
        },
      ].filter(
        (project) =>
          project.title.trim() !== "" ||
          project.description.trim() !== "" ||
          project.dueDate.trim() !== ""
      );
      localStorage.setItem("projectDetails", JSON.stringify(projectsArray));
      return projectsArray;
    });

    console.log(projectDetails);
  }
  return (
    <main className="lp:flex lp:flex-row lp:gap-5 bg-gradient-to-r from-orange-200 from-30% to-amber-100 to-70% lp:w-screen lp:h-screen">
      <Sidebar
        onProjectClick={handleClick}
        projectClicked={addProjectClicked}
        items={projectDetails}
        getIndex={handleIndexAndDelete}
        selectedItem={selectedItem}
        handleSelectIndex={handleSelectIndex}
      />
      {addProjectClicked === "Default Page" ? (
        <DefaultPage onPageClick={handleClick} />
      ) : addProjectClicked === "Project Page" ? (
        <Project onPageClick={handleClick} onSave={handleSave} />
      ) : projectDetails.length > 0 && addProjectClicked === "Task Page" ? (
        <ul className="w-screen">
          {projectDetails.map((_, listIndex) => {
            const sameIndex = listIndex === selectedIndex;
            return (
              <TaskPage
                key={listIndex}
                item={projectDetails}
                itemIndex={selectedIndex}
                onDelete={handleIndexAndDelete}
                display={sameIndex}
                onProjectClick={handleClick}
                handleSelectIndex={handleSelectIndex}
              />
            );
          })}
        </ul>
      ) : (
        <FetchingTasks />
      )}
    </main>
  );
}

export default App;
