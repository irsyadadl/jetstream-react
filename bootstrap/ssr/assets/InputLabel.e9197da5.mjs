import { j as jsx } from "../ssr.mjs";
function InputLabel({
  value,
  htmlFor,
  children
}) {
  return /* @__PURE__ */ jsx("label", {
    className: "block text-sm font-medium text-gray-700",
    htmlFor,
    children: value || children
  });
}
export {
  InputLabel as I
};
