import { useForm, Head, Link } from "@inertiajs/react";
import classNames from "clsx";
import { A as AuthenticationCard } from "./AuthenticationCard.e9e5f264.mjs";
import { C as Checkbox } from "./Checkbox.c9d6708d.mjs";
import { I as InputLabel } from "./InputLabel.25258eb4.mjs";
import { P as PrimaryButton } from "./PrimaryButton.94265e15.mjs";
import { T as TextInput, I as InputError } from "./TextInput.58f5ea4e.mjs";
import route from "ziggy-js";
import { a as jsxs, j as jsx } from "../ssr.mjs";
import "./AuthenticationCardLogo.1e3fa42b.mjs";
import "react";
import "react-dom/server";
import "@inertiajs/react/server";
import "react/jsx-runtime";
function Login({
  canResetPassword,
  status
}) {
  const form = useForm({
    email: "",
    password: "",
    remember: ""
  });
  function onSubmit(e) {
    e.preventDefault();
    form.post(route("login"), {
      onFinish: () => form.reset("password")
    });
  }
  return /* @__PURE__ */ jsxs(AuthenticationCard, {
    children: [/* @__PURE__ */ jsx(Head, {
      title: "login"
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
      }), /* @__PURE__ */ jsxs("div", {
        className: "mt-4",
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
          autoComplete: "current-password"
        }), /* @__PURE__ */ jsx(InputError, {
          className: "mt-2",
          message: form.errors.password
        })]
      }), /* @__PURE__ */ jsx("div", {
        className: "mt-4",
        children: /* @__PURE__ */ jsxs("label", {
          className: "flex items-center",
          children: [/* @__PURE__ */ jsx(Checkbox, {
            name: "remember",
            checked: form.data.remember === "on",
            onChange: (e) => form.setData("remember", e.currentTarget.checked ? "on" : "")
          }), /* @__PURE__ */ jsx("span", {
            className: "ml-2 text-sm text-gray-600",
            children: "Remember me"
          })]
        })
      }), /* @__PURE__ */ jsxs("div", {
        className: "mt-4 flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0",
        children: [canResetPassword && /* @__PURE__ */ jsx("div", {
          children: /* @__PURE__ */ jsx(Link, {
            href: route("password.request"),
            className: "text-sm text-gray-600 underline hover:text-gray-900",
            children: "Forgot your password?"
          })
        }), /* @__PURE__ */ jsxs("div", {
          className: "flex items-center justify-end",
          children: [/* @__PURE__ */ jsx(Link, {
            href: route("register"),
            className: "text-sm text-gray-600 underline hover:text-gray-900",
            children: "Need an account?"
          }), /* @__PURE__ */ jsx(PrimaryButton, {
            className: classNames("ml-4", {
              "opacity-25": form.processing
            }),
            disabled: form.processing,
            children: "Log in"
          })]
        })]
      })]
    })]
  });
}
export {
  Login as default
};
