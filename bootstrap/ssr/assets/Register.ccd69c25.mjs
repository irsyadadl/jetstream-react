import { useForm, Head, Link } from "@inertiajs/react";
import classNames from "clsx";
import { u as useTypedPage } from "./useTypedPage.bca7ae03.mjs";
import { A as AuthenticationCard } from "./AuthenticationCard.e2485885.mjs";
import { C as Checkbox } from "./Checkbox.29d39462.mjs";
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
function Register() {
  const page = useTypedPage();
  const form = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    terms: false
  });
  function onSubmit(e) {
    e.preventDefault();
    form.post(route("register"), {
      onFinish: () => form.reset("password", "password_confirmation")
    });
  }
  return /* @__PURE__ */ jsxs(AuthenticationCard, {
    children: [/* @__PURE__ */ jsx(Head, {
      title: "Register"
    }), /* @__PURE__ */ jsxs("form", {
      onSubmit,
      children: [/* @__PURE__ */ jsxs("div", {
        children: [/* @__PURE__ */ jsx(InputLabel, {
          htmlFor: "name",
          children: "Name"
        }), /* @__PURE__ */ jsx(TextInput, {
          id: "name",
          type: "text",
          className: "mt-1 block w-full",
          value: form.data.name,
          onChange: (e) => form.setData("name", e.currentTarget.value),
          required: true,
          autoFocus: true,
          autoComplete: "name"
        }), /* @__PURE__ */ jsx(InputError, {
          className: "mt-2",
          message: form.errors.name
        })]
      }), /* @__PURE__ */ jsxs("div", {
        className: "mt-4",
        children: [/* @__PURE__ */ jsx(InputLabel, {
          htmlFor: "email",
          children: "Email"
        }), /* @__PURE__ */ jsx(TextInput, {
          id: "email",
          type: "email",
          className: "mt-1 block w-full",
          value: form.data.email,
          onChange: (e) => form.setData("email", e.currentTarget.value),
          required: true
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
          autoComplete: "new-password"
        }), /* @__PURE__ */ jsx(InputError, {
          className: "mt-2",
          message: form.errors.password
        })]
      }), /* @__PURE__ */ jsxs("div", {
        className: "mt-4",
        children: [/* @__PURE__ */ jsx(InputLabel, {
          htmlFor: "password_confirmation",
          children: "Confirm Password"
        }), /* @__PURE__ */ jsx(TextInput, {
          id: "password_confirmation",
          type: "password",
          className: "mt-1 block w-full",
          value: form.data.password_confirmation,
          onChange: (e) => form.setData("password_confirmation", e.currentTarget.value),
          required: true,
          autoComplete: "new-password"
        }), /* @__PURE__ */ jsx(InputError, {
          className: "mt-2",
          message: form.errors.password_confirmation
        })]
      }), page.props.jetstream.hasTermsAndPrivacyPolicyFeature && /* @__PURE__ */ jsx("div", {
        className: "mt-4",
        children: /* @__PURE__ */ jsxs(InputLabel, {
          htmlFor: "terms",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "flex items-center",
            children: [/* @__PURE__ */ jsx(Checkbox, {
              name: "terms",
              id: "terms",
              checked: form.data.terms,
              onChange: (e) => form.setData("terms", e.currentTarget.checked),
              required: true
            }), /* @__PURE__ */ jsxs("div", {
              className: "ml-2",
              children: ["I agree to the", /* @__PURE__ */ jsx("a", {
                target: "_blank",
                href: route("terms.show"),
                className: "text-sm text-gray-600 underline hover:text-gray-900",
                children: "Terms of Service"
              }), "and", /* @__PURE__ */ jsx("a", {
                target: "_blank",
                href: route("policy.show"),
                className: "text-sm text-gray-600 underline hover:text-gray-900",
                children: "Privacy Policy"
              })]
            })]
          }), /* @__PURE__ */ jsx(InputError, {
            className: "mt-2",
            message: form.errors.terms
          })]
        })
      }), /* @__PURE__ */ jsxs("div", {
        className: "mt-4 flex items-center justify-end",
        children: [/* @__PURE__ */ jsx(Link, {
          href: route("login"),
          className: "text-sm text-gray-600 underline hover:text-gray-900",
          children: "Already registered?"
        }), /* @__PURE__ */ jsx(PrimaryButton, {
          className: classNames("ml-4", {
            "opacity-25": form.processing
          }),
          disabled: form.processing,
          children: "Register"
        })]
      })]
    })]
  });
}
export {
  Register as default
};
