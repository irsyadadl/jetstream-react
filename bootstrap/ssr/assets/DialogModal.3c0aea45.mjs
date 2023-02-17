import { M as Modal } from "./Modal.9382fc3d.mjs";
import { j as jsx, a as jsxs } from "../ssr.mjs";
DialogModal.Content = function DialogModalContent({
  title,
  children
}) {
  return /* @__PURE__ */ jsxs("div", {
    className: "px-6 py-4",
    children: [/* @__PURE__ */ jsx("div", {
      className: "text-lg",
      children: title
    }), /* @__PURE__ */ jsx("div", {
      className: "mt-4",
      children
    })]
  });
};
DialogModal.Footer = function DialogModalFooter({
  children
}) {
  return /* @__PURE__ */ jsx("div", {
    className: "bg-gray-100 px-6 py-4 text-right",
    children
  });
};
function DialogModal({
  children,
  ...modalProps
}) {
  return /* @__PURE__ */ jsx(Modal, {
    ...modalProps,
    children
  });
}
export {
  DialogModal as D
};
