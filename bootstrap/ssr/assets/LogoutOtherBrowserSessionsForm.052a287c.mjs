import { useForm } from "@inertiajs/react";
import classNames from "clsx";
import { useState, useRef } from "react";
import { A as ActionMessage } from "./ActionMessage.c3b49322.mjs";
import { A as ActionSection } from "./Modal.a2890560.mjs";
import { D as DialogModal } from "./DialogModal.b8b793ce.mjs";
import { T as TextInput, I as InputError } from "./TextInput.58f5ea4e.mjs";
import { P as PrimaryButton } from "./PrimaryButton.94265e15.mjs";
import { S as SecondaryButton } from "./SecondaryButton.339df098.mjs";
import route from "ziggy-js";
import { a as jsxs, j as jsx } from "../ssr.mjs";
import "@headlessui/react";
import "./SectionTitle.d544f27b.mjs";
import "react-dom";
import "react-dom/server";
import "@inertiajs/react/server";
import "react/jsx-runtime";
function LogoutOtherBrowserSessions({
  sessions
}) {
  const [confirmingLogout, setConfirmingLogout] = useState(false);
  const passwordRef = useRef(null);
  const form = useForm({
    password: ""
  });
  function confirmLogout() {
    setConfirmingLogout(true);
    setTimeout(() => {
      var _a;
      return (_a = passwordRef.current) == null ? void 0 : _a.focus();
    }, 250);
  }
  function logoutOtherBrowserSessions() {
    form.delete(route("other-browser-sessions.destroy"), {
      preserveScroll: true,
      onSuccess: () => closeModal(),
      onError: () => {
        var _a;
        return (_a = passwordRef.current) == null ? void 0 : _a.focus();
      },
      onFinish: () => form.reset()
    });
  }
  function closeModal() {
    setConfirmingLogout(false);
    form.reset();
  }
  return /* @__PURE__ */ jsxs(ActionSection, {
    title: "Browser Sessions",
    description: "Manage and log out your active sessions on other browsers and devices.",
    children: [/* @__PURE__ */ jsx("div", {
      className: "max-w-xl text-sm text-gray-600",
      children: "If necessary, you may log out of all of your other browser sessions across all of your devices. Some of your recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has been compromised, you should also update your password."
    }), sessions.length > 0 ? /* @__PURE__ */ jsx("div", {
      className: "mt-5 space-y-6",
      children: sessions.map((session, i) => /* @__PURE__ */ jsxs("div", {
        className: "flex items-center",
        children: [/* @__PURE__ */ jsx("div", {
          children: session.agent.is_desktop ? /* @__PURE__ */ jsx("svg", {
            fill: "none",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            className: "h-8 w-8 text-gray-500",
            children: /* @__PURE__ */ jsx("path", {
              d: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            })
          }) : /* @__PURE__ */ jsxs("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            strokeWidth: "2",
            stroke: "currentColor",
            fill: "none",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: "h-8 w-8 text-gray-500",
            children: [/* @__PURE__ */ jsx("path", {
              d: "M0 0h24v24H0z",
              stroke: "none"
            }), /* @__PURE__ */ jsx("rect", {
              x: "7",
              y: "4",
              width: "10",
              height: "16",
              rx: "1"
            }), /* @__PURE__ */ jsx("path", {
              d: "M11 5h2M12 17v.01"
            })]
          })
        }), /* @__PURE__ */ jsxs("div", {
          className: "ml-3",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "text-sm text-gray-600",
            children: [session.agent.platform, " - ", session.agent.browser]
          }), /* @__PURE__ */ jsx("div", {
            children: /* @__PURE__ */ jsxs("div", {
              className: "text-xs text-gray-500",
              children: [session.ip_address, ",", session.is_current_device ? /* @__PURE__ */ jsx("span", {
                className: "font-semibold text-green-500",
                children: "This device"
              }) : /* @__PURE__ */ jsxs("span", {
                children: ["Last active ", session.last_active]
              })]
            })
          })]
        })]
      }, i))
    }) : null, /* @__PURE__ */ jsxs("div", {
      className: "mt-5 flex items-center",
      children: [/* @__PURE__ */ jsx(PrimaryButton, {
        onClick: confirmLogout,
        children: "Log Out Other Browser Sessions"
      }), /* @__PURE__ */ jsx(ActionMessage, {
        on: form.recentlySuccessful,
        className: "ml-3",
        children: "Done."
      })]
    }), /* @__PURE__ */ jsxs(DialogModal, {
      isOpen: confirmingLogout,
      onClose: closeModal,
      children: [/* @__PURE__ */ jsxs(DialogModal.Content, {
        title: "Log Out Other Browser Sessions",
        children: ["Please enter your password to confirm you would like to log out of your other browser sessions across all of your devices.", /* @__PURE__ */ jsxs("div", {
          className: "mt-4",
          children: [/* @__PURE__ */ jsx(TextInput, {
            type: "password",
            className: "mt-1 block w-3/4",
            placeholder: "Password",
            ref: passwordRef,
            value: form.data.password,
            onChange: (e) => form.setData("password", e.currentTarget.value)
          }), /* @__PURE__ */ jsx(InputError, {
            message: form.errors.password,
            className: "mt-2"
          })]
        })]
      }), /* @__PURE__ */ jsxs(DialogModal.Footer, {
        children: [/* @__PURE__ */ jsx(SecondaryButton, {
          onClick: closeModal,
          children: "Cancel"
        }), /* @__PURE__ */ jsx(PrimaryButton, {
          onClick: logoutOtherBrowserSessions,
          className: classNames("ml-2", {
            "opacity-25": form.processing
          }),
          disabled: form.processing,
          children: "Log Out Other Browser Sessions"
        })]
      })]
    })]
  });
}
export {
  LogoutOtherBrowserSessions as default
};
