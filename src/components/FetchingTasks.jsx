export default function FetchingTasks() {
  return (
    <div className="flex flex-col lp:m-auto items-center lp:gap-1 h-screen lp:h-fit">
      <h1 className="lp:m-auto m-auto text-2xl 2md:text-3xl lp:text-3xl text-center font-semibold">
        Fetching Tasks
      </h1>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
