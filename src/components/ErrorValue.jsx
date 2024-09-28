import { createPortal } from "react-dom";
import { useRef, useImperativeHandle, forwardRef } from "react";

const ErrorValue = forwardRef(function ErrorValue({}, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      className="m-auto top-2/4 bg-gradient-to-r from-orange-200 from-30% to-amber-100 to-70% z-50 flex backdrop:bg-stone-900/90 shadow-md gap-12 py-10 px-5 rounded-lg border-2 border-opacity-30 border-black"
      ref={dialog}
    >
      <p className="text-black font-semibold w-64 translate-x-11 text-xl text-center">
        Please fill out the correct values
      </p>
      <form method="dialog">
        <button className="font-normal -translate-y-8 hover:text-red-600">
          Close
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default ErrorValue;
