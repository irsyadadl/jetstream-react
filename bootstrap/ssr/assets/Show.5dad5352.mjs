import DeleteUserForm from "./DeleteUserForm.61d51c86.mjs";
import LogoutOtherBrowserSessions from "./LogoutOtherBrowserSessionsForm.052a287c.mjs";
import TwoFactorAuthenticationForm from "./TwoFactorAuthenticationForm.8f7da440.mjs";
import UpdatePasswordForm from "./UpdatePasswordForm.81a10e1e.mjs";
import UpdateProfileInformationForm from "./UpdateProfileInformationForm.bd6bdfb1.mjs";
import { u as useTypedPage } from "./useTypedPage.bca7ae03.mjs";
import { S as SectionBorder } from "./SectionBorder.78c61d02.mjs";
import { A as AppLayout } from "./AppLayout.7f7e46f9.mjs";
import { j as jsx, a as jsxs, F as Fragment } from "../ssr.mjs";
import "@inertiajs/react";
import "clsx";
import "react";
import "./Modal.a2890560.mjs";
import "./SectionTitle.d544f27b.mjs";
import "@headlessui/react";
import "react-dom";
import "./DangerButton.e26c0380.mjs";
import "./DialogModal.b8b793ce.mjs";
import "./TextInput.58f5ea4e.mjs";
import "./SecondaryButton.339df098.mjs";
import "ziggy-js";
import "react-dom/server";
import "@inertiajs/react/server";
import "react/jsx-runtime";
import "./ActionMessage.c3b49322.mjs";
import "./PrimaryButton.94265e15.mjs";
import "axios";
import "./InputLabel.25258eb4.mjs";
import "./FormSection.7bacf247.mjs";
function Show({
  sessions,
  confirmsTwoFactorAuthentication
}) {
  const {
    jetstream,
    auth
  } = useTypedPage().props;
  return /* @__PURE__ */ jsx(AppLayout, {
    title: "Profile",
    renderHeader: () => /* @__PURE__ */ jsx("h2", {
      className: "text-xl font-semibold leading-tight text-gray-800",
      children: "Profile"
    }),
    children: /* @__PURE__ */ jsx("div", {
      children: /* @__PURE__ */ jsxs("div", {
        className: "mx-auto max-w-7xl py-10 sm:px-6 lg:px-8",
        children: [jetstream.canUpdateProfileInformation ? /* @__PURE__ */ jsxs("div", {
          children: [/* @__PURE__ */ jsx(UpdateProfileInformationForm, {
            user: auth.user
          }), /* @__PURE__ */ jsx(SectionBorder, {})]
        }) : null, jetstream.canUpdatePassword ? /* @__PURE__ */ jsxs("div", {
          className: "mt-10 sm:mt-0",
          children: [/* @__PURE__ */ jsx(UpdatePasswordForm, {}), /* @__PURE__ */ jsx(SectionBorder, {})]
        }) : null, jetstream.canManageTwoFactorAuthentication ? /* @__PURE__ */ jsxs("div", {
          className: "mt-10 sm:mt-0",
          children: [/* @__PURE__ */ jsx(TwoFactorAuthenticationForm, {
            requiresConfirmation: confirmsTwoFactorAuthentication
          }), /* @__PURE__ */ jsx(SectionBorder, {})]
        }) : null, /* @__PURE__ */ jsx("div", {
          className: "mt-10 sm:mt-0",
          children: /* @__PURE__ */ jsx(LogoutOtherBrowserSessions, {
            sessions
          })
        }), jetstream.hasAccountDeletionFeatures ? /* @__PURE__ */ jsxs(Fragment, {
          children: [/* @__PURE__ */ jsx(SectionBorder, {}), /* @__PURE__ */ jsx("div", {
            className: "mt-10 sm:mt-0",
            children: /* @__PURE__ */ jsx(DeleteUserForm, {})
          })]
        }) : null]
      })
    })
  });
}
export {
  Show as default
};
