export default function FetchingTasks() {
  return (
    <div className="flex flex-col m-auto items-center gap-1">
      <h1 className="m-auto text-3xl text-center font-semibold">
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
