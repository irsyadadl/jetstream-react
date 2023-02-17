import { S as SectionTitle } from "./SectionTitle.d544f27b.mjs";
import { a as jsxs, j as jsx } from "../ssr.mjs";
import { Transition, Dialog } from "@headlessui/react";
import classNames from "clsx";
import React from "react";
import ReactDOM from "react-dom";
function ActionSection({
  title,
  description,
  children
}) {
  return /* @__PURE__ */ jsxs("div", {
    className: "md:grid md:grid-cols-3 md:gap-6",
    children: [/* @__PURE__ */ jsx(SectionTitle, {
      title,
      description
    }), /* @__PURE__ */ jsx("div", {
      className: "mt-5 md:col-span-2 md:mt-0",
      children: /* @__PURE__ */ jsx("div", {
        className: "bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6",
        children
      })
    })]
  });
}
function Modal({
  isOpen,
  onClose,
  maxWidth = "2xl",
  children
}) {
  const maxWidthClass = {
    sm: "sm:max-w-sm",
    md: "sm:max-w-md",
    lg: "sm:max-w-lg",
    xl: "sm:max-w-xl",
    "2xl": "sm:max-w-2xl"
  }[maxWidth];
  if (typeof window === "undefined") {
    return null;
  }
  return ReactDOM.createPortal(/* @__PURE__ */ jsx(Transition.Root, {
    show: isOpen,
    as: React.Fragment,
    children: /* @__PURE__ */ jsx(Dialog, {
      as: "div",
      static: true,
      className: "fixed inset-0 z-10 overflow-y-auto",
      open: isOpen,
      onClose,
      children: /* @__PURE__ */ jsxs("div", {
        className: "flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0",
        children: [/* @__PURE__ */ jsx(Transition.Child, {
          as: React.Fragment,
          enter: "ease-out duration-300",
          enterFrom: "opacity-0",
          enterTo: "opacity-100",
          leave: "ease-in duration-200",
          leaveFrom: "opacity-100",
          leaveTo: "opacity-0",
          children: /* @__PURE__ */ jsx(Dialog.Overlay, {
            className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          })
        }), /* @__PURE__ */ jsx("span", {
          className: "hidden sm:inline-block sm:h-screen sm:align-middle",
          "aria-hidden": "true",
          children: "\u200B"
        }), /* @__PURE__ */ jsx(Transition.Child, {
          as: React.Fragment,
          enter: "ease-out duration-300",
          enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
          enterTo: "opacity-100 translate-y-0 sm:scale-100",
          leave: "ease-in duration-200",
          leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
          leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
          children: /* @__PURE__ */ jsx("div", {
            className: classNames("inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:align-middle", maxWidthClass),
            children
          })
        })]
      })
    })
  }), document.body);
}
export {
  ActionSection as A,
  Modal as M
};
