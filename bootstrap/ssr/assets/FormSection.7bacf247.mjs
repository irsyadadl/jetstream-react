import classNames from "clsx";
import { S as SectionTitle } from "./SectionTitle.d544f27b.mjs";
import { a as jsxs, j as jsx } from "../ssr.mjs";
function FormSection({
  onSubmit,
  renderActions,
  title,
  description,
  children
}) {
  const hasActions = !!renderActions;
  return /* @__PURE__ */ jsxs("div", {
    className: "md:grid md:grid-cols-3 md:gap-6",
    children: [/* @__PURE__ */ jsx(SectionTitle, {
      title,
      description
    }), /* @__PURE__ */ jsx("div", {
      className: "mt-5 md:col-span-2 md:mt-0",
      children: /* @__PURE__ */ jsxs("form", {
        onSubmit: (e) => {
          e.preventDefault();
          onSubmit();
        },
        children: [/* @__PURE__ */ jsx("div", {
          className: classNames("bg-white px-4 py-5 shadow sm:p-6", hasActions ? "sm:rounded-tl-md sm:rounded-tr-md" : "sm:rounded-md"),
          children: /* @__PURE__ */ jsx("div", {
            className: "grid grid-cols-6 gap-6",
            children
          })
        }), hasActions && /* @__PURE__ */ jsx("div", {
          className: "flex items-center justify-end bg-gray-50 px-4 py-3 text-right shadow sm:rounded-bl-md sm:rounded-br-md sm:px-6",
          children: renderActions == null ? void 0 : renderActions()
        })]
      })
    })]
  });
}
export {
  FormSection as F
};
