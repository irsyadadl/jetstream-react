import { j as jsx } from "../ssr.mjs";
function SectionBorder() {
  return /* @__PURE__ */ jsx("div", {
    className: "hidden sm:block",
    children: /* @__PURE__ */ jsx("div", {
      className: "py-8",
      children: /* @__PURE__ */ jsx("div", {
        className: "border-t border-gray-200"
      })
    })
  });
}
export {
  SectionBorder as S
};
