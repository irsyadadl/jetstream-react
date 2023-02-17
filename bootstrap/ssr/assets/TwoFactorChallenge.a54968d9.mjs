import { useForm, Head } from "@inertiajs/react";
import classNames from "clsx";
import { useState, useRef } from "react";
import { A as AuthenticationCard } from "./AuthenticationCard.e2485885.mjs";
import { I as InputLabel } from "./InputLabel.e9197da5.mjs";
import { P as PrimaryButton } from "./PrimaryButton.7df85486.mjs";
import { T as TextInput, I as InputError } from "./TextInput.93905041.mjs";
import route from "ziggy-js";
import { a as jsxs, j as jsx } from "../ssr.mjs";
import "./AuthenticationCardLogo.f435ffa2.mjs";
import "react-dom/server";
import "@inertiajs/react/server";
import "react/jsx-runtime";
function TwoFactorChallenge() {
  const [recovery, setRecovery] = useState(false);
  const form = useForm({
    code: "",
    recovery_code: ""
  });
  const recoveryCodeRef = useRef(null);
  const codeRef = useRef(null);
  function toggleRecovery(e) {
    e.preventDefault();
    const isRecovery = !recovery;
    setRecovery(isRecovery);
    setTimeout(() => {
      var _a, _b;
      if (isRecovery) {
        (_a = recoveryCodeRef.current) == null ? void 0 : _a.focus();
        form.setData("code", "");
      } else {
        (_b = codeRef.current) == null ? void 0 : _b.focus();
        form.setData("recovery_code", "");
      }
    }, 100);
  }
  function onSubmit(e) {
    e.preventDefault();
    form.post(route("two-factor.login"));
  }
  return /* @__PURE__ */ jsxs(AuthenticationCard, {
    children: [/* @__PURE__ */ jsx(Head, {
      title: "Two-Factor Confirmation"
    }), /* @__PURE__ */ jsx("div", {
      className: "mb-4 text-sm text-gray-600",
      children: recovery ? "Please confirm access to your account by entering one of your emergency recovery codes." : "Please confirm access to your account by entering the authentication code provided by your authenticator application."
    }), /* @__PURE__ */ jsxs("form", {
      onSubmit,
      children: [recovery ? /* @__PURE__ */ jsxs("div", {
        children: [/* @__PURE__ */ jsx(InputLabel, {
          htmlFor: "recovery_code",
          children: "Recovery Code"
        }), /* @__PURE__ */ jsx(TextInput, {
          id: "recovery_code",
          type: "text",
          className: "mt-1 block w-full",
          value: form.data.recovery_code,
          onChange: (e) => form.setData("recovery_code", e.currentTarget.value),
          ref: recoveryCodeRef,
          autoComplete: "one-time-code"
        }), /* @__PURE__ */ jsx(InputError, {
          className: "mt-2",
          message: form.errors.recovery_code
        })]
      }) : /* @__PURE__ */ jsxs("div", {
        children: [/* @__PURE__ */ jsx(InputLabel, {
          htmlFor: "code",
          children: "Code"
        }), /* @__PURE__ */ jsx(TextInput, {
          id: "code",
          type: "text",
          inputMode: "numeric",
          className: "mt-1 block w-full",
          value: form.data.code,
          onChange: (e) => form.setData("code", e.currentTarget.value),
          autoFocus: true,
          autoComplete: "one-time-code",
          ref: codeRef
        }), /* @__PURE__ */ jsx(InputError, {
          className: "mt-2",
          message: form.errors.code
        })]
      }), /* @__PURE__ */ jsxs("div", {
        className: "mt-4 flex items-center justify-end",
        children: [/* @__PURE__ */ jsx("button", {
          type: "button",
          className: "cursor-pointer text-sm text-gray-600 underline hover:text-gray-900",
          onClick: toggleRecovery,
          children: recovery ? "Use an authentication code" : "Use a recovery code"
        }), /* @__PURE__ */ jsx(PrimaryButton, {
          className: classNames("ml-4", {
            "opacity-25": form.processing
          }),
          disabled: form.processing,
          children: "Log in"
        })]
      })]
    })]
  });
}
export {
  TwoFactorChallenge as default
};
