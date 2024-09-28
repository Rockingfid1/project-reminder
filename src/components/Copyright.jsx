import { createPortal } from "react-dom";

export default function Copyright() {
  return createPortal(
    <footer>
      <p className="text-stone-600 text-right text-xs">
        © Copyright by Michaelfrank Okoye. Don't claim as your own product.
      </p>
    </footer>,
    document.querySelector("body")
  );
}
