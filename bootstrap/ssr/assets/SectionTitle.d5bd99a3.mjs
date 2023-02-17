import { j as jsx, a as jsxs } from "../ssr.mjs";
function SectionTitle({
  title,
  description
}) {
  return /* @__PURE__ */ jsx("div", {
    className: "md:col-span-1",
    children: /* @__PURE__ */ jsxs("div", {
      className: "px-4 sm:px-0",
      children: [/* @__PURE__ */ jsx("h3", {
        className: "text-lg font-medium text-gray-900",
        children: title
      }), /* @__PURE__ */ jsx("p", {
        className: "mt-1 text-sm text-gray-600",
        children: description
      })]
    })
  });
}
export {
  SectionTitle as S
};
