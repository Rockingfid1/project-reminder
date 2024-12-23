import DefaultPage from "./components/DefaultPage";
import ErrorMessage from "./components/ErrorMessage";
import Project from "./components/Projects";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import TaskPage from "./components/TaskPage";

function App() {
  const [addProjectClicked, setAddProjectClicked] = useState("Default Page");

  const savedProjectDetails = localStorage.getItem("projectDetails")
    ? JSON.parse(localStorage.getItem("projectDetails"))
    : [];
  const [projectDetails, setProjectDetails] = useState(savedProjectDetails);
  const [selectedIndex, setSelectedIndex] = useState();

  const savedTask = localStorage.getItem("task")
    ? JSON.parse(localStorage.getItem("task"))
    : [];
  const [tasks, setTasks] = useState(savedTask);
  const [randomNumber, setRandomNumber] = useState(1.1);
  const [projectId, setProjectId] = useState(0);

  function handleBrowserSave() {
    localStorage.setItem("task", JSON.stringify(tasks));
    localStorage.setItem("projectDetails", JSON.stringify(projectDetails));
  }

  function handleSubmit(task, index) {
    setRandomNumber(Math.random());
    setTasks((prev) => {
      return [
        ...prev,
        {
          tasks: task,
          tasksId: index,
          tasksSpecialId: randomNumber,
        },
      ];
    });
    console.log(tasks);
  }

  function handleDelete(specificTask) {
    const newItems = tasks.filter(
      (task) => task.tasksSpecialId !== specificTask.tasksSpecialId
    );
    localStorage.setItem("task", JSON.stringify(newItems));
    setTasks(JSON.parse(localStorage.getItem("task")));
  }

  function handleIndexAndDelete(index, remove = false) {
    setSelectedIndex(index);

    if (remove) {
      const deletedProjectDetails = savedProjectDetails.filter(
        (_, i) => i !== index
      );
      const deletedTasks = tasks.filter((task) => task.tasksId !== index);
      localStorage.setItem("task", JSON.stringify(deletedTasks));

      localStorage.setItem(
        "projectDetails",
        JSON.stringify(deletedProjectDetails)
      );

      setTasks(deletedTasks);

      setProjectDetails(deletedProjectDetails);
      setAddProjectClicked("Default Page");
    }
  }

  function handleClick(pageType) {
    setAddProjectClicked(pageType);
  }

  function handleSave(titleRef, descriptionRef, dueDateRef) {
    setProjectId(Math.random());
    setProjectDetails((prev) => {
      return [
        ...prev,
        {
          title: titleRef,
          description: descriptionRef,
          dueDate: dueDateRef,
          id: projectId,
        },
      ];
    });
  }
  return (
    <main className="lp:flex lp:flex-row lp:gap-5 bg-gradient-to-r from-orange-200 from-30% to-amber-100 to-70% lp:w-screen lp:h-screen">
      <Sidebar
        onProjectClick={handleClick}
        projectClicked={addProjectClicked}
        items={projectDetails}
        getIndex={handleIndexAndDelete}
      />
      {addProjectClicked === "Default Page" ? (
        <DefaultPage onPageClick={handleClick} />
      ) : addProjectClicked === "Project Page" ? (
        <Project
          onAnyClick={handleClick}
          onSave={handleSave}
          details={
            projectDetails.length > 0 &&
            (projectDetails[projectDetails.length - 1].title.trim() === "" ||
              projectDetails[projectDetails.length - 1].description.trim() ===
                "" ||
              projectDetails[projectDetails.length - 1].dueDate.trim() ===
                "") && <ErrorMessage />
          }
        />
      ) : projectDetails.length > 0 && addProjectClicked === "Task Page" ? (
        <ul className="w-screen">
          {projectDetails.map((_, listIndex) => {
            const sameIndex = listIndex === selectedIndex;
            return (
              <li key={listIndex}>
                <TaskPage
                  item={projectDetails}
                  itemIndex={selectedIndex}
                  onDelete={handleIndexAndDelete}
                  display={sameIndex}
                  onAdd={handleSubmit}
                  tasks={tasks}
                  onClear={handleDelete}
                  pageIndex={listIndex}
                  onSave={handleBrowserSave}
                  onProjectClick={handleClick}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        ""
      )}
    </main>
  );
}

export default App;
