import { A as AuthenticationCardLogo } from "./AuthenticationCardLogo.f435ffa2.mjs";
import { Head } from "@inertiajs/react";
import { a as jsxs, j as jsx } from "../ssr.mjs";
import "react-dom/server";
import "@inertiajs/react/server";
import "react";
import "ziggy-js";
import "react/jsx-runtime";
function TermsOfService({
  terms
}) {
  return /* @__PURE__ */ jsxs("div", {
    className: "font-sans text-gray-900 antialiased",
    children: [/* @__PURE__ */ jsx(Head, {
      title: "Terms of Service"
    }), /* @__PURE__ */ jsx("div", {
      className: "bg-gray-100 pt-4",
      children: /* @__PURE__ */ jsxs("div", {
        className: "flex min-h-screen flex-col items-center pt-6 sm:pt-0",
        children: [/* @__PURE__ */ jsx("div", {
          children: /* @__PURE__ */ jsx(AuthenticationCardLogo, {})
        }), /* @__PURE__ */ jsx("div", {
          className: "prose mt-6 w-full overflow-hidden bg-white p-6 shadow-md sm:max-w-2xl sm:rounded-lg",
          dangerouslySetInnerHTML: {
            __html: terms
          }
        })]
      })
    })]
  });
}
export {
  TermsOfService as default
};
