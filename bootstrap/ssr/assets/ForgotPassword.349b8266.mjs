import { useForm, Head } from "@inertiajs/react";
import classNames from "clsx";
import { A as AuthenticationCard } from "./AuthenticationCard.e2485885.mjs";
import { I as InputLabel } from "./InputLabel.e9197da5.mjs";
import { P as PrimaryButton } from "./PrimaryButton.7df85486.mjs";
import { T as TextInput, I as InputError } from "./TextInput.93905041.mjs";
import route from "ziggy-js";
import { a as jsxs, j as jsx } from "../ssr.mjs";
import "./AuthenticationCardLogo.f435ffa2.mjs";
import "react";
import "react-dom/server";
import "@inertiajs/react/server";
import "react/jsx-runtime";
function ForgotPassword({
  status
}) {
  const form = useForm({
    email: ""
  });
  function onSubmit(e) {
    e.preventDefault();
    form.post(route("password.email"));
  }
  return /* @__PURE__ */ jsxs(AuthenticationCard, {
    children: [/* @__PURE__ */ jsx(Head, {
      title: "Forgot Password"
    }), /* @__PURE__ */ jsx("div", {
      className: "mb-4 text-sm text-gray-600",
      children: "Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."
    }), status && /* @__PURE__ */ jsx("div", {
      className: "mb-4 text-sm font-medium text-green-600",
      children: status
    }), /* @__PURE__ */ jsxs("form", {
      onSubmit,
      children: [/* @__PURE__ */ jsxs("div", {
        children: [/* @__PURE__ */ jsx(InputLabel, {
          htmlFor: "email",
          children: "Email"
        }), /* @__PURE__ */ jsx(TextInput, {
          id: "email",
          type: "email",
          className: "mt-1 block w-full",
          value: form.data.email,
          onChange: (e) => form.setData("email", e.currentTarget.value),
          required: true,
          autoFocus: true
        }), /* @__PURE__ */ jsx(InputError, {
          className: "mt-2",
          message: form.errors.email
        })]
      }), /* @__PURE__ */ jsx("div", {
        className: "mt-4 flex items-center justify-end",
        children: /* @__PURE__ */ jsx(PrimaryButton, {
          className: classNames({
            "opacity-25": form.processing
          }),
          disabled: form.processing,
          children: "Email Password Reset Link"
        })
      })]
    })]
  });
}
export {
  ForgotPassword as default
};
