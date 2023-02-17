import { j as jsx } from "../ssr.mjs";
import classNames from "clsx";
import { forwardRef } from "react";
function InputError({
  message,
  className,
  children
}) {
  if (!message && !children) {
    return null;
  }
  return /* @__PURE__ */ jsx("div", {
    className,
    children: /* @__PURE__ */ jsx("p", {
      className: "text-sm text-red-600",
      children: message || children
    })
  });
}
const TextInput = forwardRef((props, ref) => /* @__PURE__ */ jsx("input", {
  ...props,
  ref,
  className: classNames("rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50", props.className)
}));
const TextInput$1 = TextInput;
export {
  InputError as I,
  TextInput$1 as T
};
