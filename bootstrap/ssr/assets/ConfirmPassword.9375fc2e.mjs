import { useForm, Head } from "@inertiajs/react";
import classNames from "clsx";
import { A as AuthenticationCard } from "./AuthenticationCard.e2485885.mjs";
import { T as TextInput, I as InputError } from "./TextInput.93905041.mjs";
import { I as InputLabel } from "./InputLabel.e9197da5.mjs";
import { P as PrimaryButton } from "./PrimaryButton.7df85486.mjs";
import route from "ziggy-js";
import { a as jsxs, j as jsx } from "../ssr.mjs";
import "./AuthenticationCardLogo.f435ffa2.mjs";
import "react";
import "react-dom/server";
import "@inertiajs/react/server";
import "react/jsx-runtime";
function ConfirmPassword() {
  const form = useForm({
    password: ""
  });
  function onSubmit(e) {
    e.preventDefault();
    form.post(route("password.confirm"), {
      onFinish: () => form.reset()
    });
  }
  return /* @__PURE__ */ jsxs(AuthenticationCard, {
    children: [/* @__PURE__ */ jsx(Head, {
      title: "Secure Area"
    }), /* @__PURE__ */ jsx("div", {
      className: "mb-4 text-sm text-gray-600",
      children: "This is a secure area of the application. Please confirm your password before continuing."
    }), /* @__PURE__ */ jsxs("form", {
      onSubmit,
      children: [/* @__PURE__ */ jsxs("div", {
        children: [/* @__PURE__ */ jsx(InputLabel, {
          htmlFor: "password",
          children: "Password"
        }), /* @__PURE__ */ jsx(TextInput, {
          id: "password",
          type: "password",
          className: "mt-1 block w-full",
          value: form.data.password,
          onChange: (e) => form.setData("password", e.currentTarget.value),
          required: true,
          autoComplete: "current-password",
          autoFocus: true
        }), /* @__PURE__ */ jsx(InputError, {
          className: "mt-2",
          message: form.errors.password
        })]
      }), /* @__PURE__ */ jsx("div", {
        className: "mt-4 flex justify-end",
        children: /* @__PURE__ */ jsx(PrimaryButton, {
          className: classNames("ml-4", {
            "opacity-25": form.processing
          }),
          disabled: form.processing,
          children: "Confirm"
        })
      })]
    })]
  });
}
export {
  ConfirmPassword as default
};
