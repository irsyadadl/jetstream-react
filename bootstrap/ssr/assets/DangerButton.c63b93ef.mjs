import classNames from "clsx";
import { j as jsx } from "../ssr.mjs";
function DangerButton({
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx("button", {
    ...props,
    className: classNames("inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-red-500 focus:border-red-700 focus:outline-none focus:ring focus:ring-red-200 active:bg-red-600 disabled:opacity-25", props.className),
    children
  });
}
export {
  DangerButton as D
};
