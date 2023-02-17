import classNames from "clsx";
import { j as jsx } from "../ssr.mjs";
function Checkbox(props) {
  return /* @__PURE__ */ jsx("input", {
    type: "checkbox",
    ...props,
    className: classNames("rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50", props.className)
  });
}
export {
  Checkbox as C
};
