import { A as AuthenticationCardLogo } from "./AuthenticationCardLogo.1e3fa42b.mjs";
import { a as jsxs, j as jsx } from "../ssr.mjs";
function AuthenticationCard({
  children
}) {
  return /* @__PURE__ */ jsxs("div", {
    className: "flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0",
    children: [/* @__PURE__ */ jsx("div", {
      children: /* @__PURE__ */ jsx(AuthenticationCardLogo, {})
    }), /* @__PURE__ */ jsx("div", {
      className: "mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg",
      children
    })]
  });
}
export {
  AuthenticationCard as A
};
