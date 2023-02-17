import { useForm, Head, Link } from "@inertiajs/react";
import classNames from "clsx";
import { A as AuthenticationCard } from "./AuthenticationCard.e2485885.mjs";
import { P as PrimaryButton } from "./PrimaryButton.7df85486.mjs";
import route from "ziggy-js";
import { a as jsxs, j as jsx } from "../ssr.mjs";
import "./AuthenticationCardLogo.f435ffa2.mjs";
import "react-dom/server";
import "@inertiajs/react/server";
import "react";
import "react/jsx-runtime";
function VerifyEmail({
  status
}) {
  const form = useForm({});
  const verificationLinkSent = status === "verification-link-sent";
  function onSubmit(e) {
    e.preventDefault();
    form.post(route("verification.send"));
  }
  return /* @__PURE__ */ jsxs(AuthenticationCard, {
    children: [/* @__PURE__ */ jsx(Head, {
      title: "Email Verification"
    }), /* @__PURE__ */ jsx("div", {
      className: "mb-4 text-sm text-gray-600",
      children: "Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another."
    }), verificationLinkSent && /* @__PURE__ */ jsx("div", {
      className: "mb-4 text-sm font-medium text-green-600",
      children: "A new verification link has been sent to the email address you provided during registration."
    }), /* @__PURE__ */ jsx("form", {
      onSubmit,
      children: /* @__PURE__ */ jsxs("div", {
        className: "mt-4 flex items-center justify-between",
        children: [/* @__PURE__ */ jsx(PrimaryButton, {
          className: classNames({
            "opacity-25": form.processing
          }),
          disabled: form.processing,
          children: "Resend Verification Email"
        }), /* @__PURE__ */ jsx(Link, {
          href: route("logout"),
          method: "post",
          as: "button",
          className: "text-sm text-gray-600 underline hover:text-gray-900",
          children: "Log Out"
        })]
      })
    })]
  });
}
export {
  VerifyEmail as default
};
