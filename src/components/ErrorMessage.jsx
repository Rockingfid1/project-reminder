import error from "../assets/error.png";
export default function ErrorMessage() {
  return (
    <span className="flex flex-row">
      <img
        src={error}
        alt="error icon"
        className="w-4 h-4 translate-x-9 mt-1"
      />
      <p className={`text-red-600 text-base font-semibold w-64 translate-x-11`}>
        Error: Please fill out all fields.
      </p>
    </span>
  );
}
