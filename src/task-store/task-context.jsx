import { createContext } from "react";

export const TaskPageContext = createContext({});

export default function TaskPageProvider({ children }) {
  const [randomNumber, setRandomNumber] = useSt;

  const taskCtx = {};
  return (
    <TaskPageContext.Provider value={taskCtx}>
      {children}
    </TaskPageContext.Provider>
  );
}
