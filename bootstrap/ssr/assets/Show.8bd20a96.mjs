import DeleteUserForm from "./DeleteUserForm.78f0901a.mjs";
import LogoutOtherBrowserSessions from "./LogoutOtherBrowserSessionsForm.3edb2612.mjs";
import TwoFactorAuthenticationForm from "./TwoFactorAuthenticationForm.2e687d22.mjs";
import UpdatePasswordForm from "./UpdatePasswordForm.8cc54f67.mjs";
import UpdateProfileInformationForm from "./UpdateProfileInformationForm.0e980877.mjs";
import { u as useTypedPage } from "./useTypedPage.bca7ae03.mjs";
import { S as SectionBorder } from "./SectionBorder.83091097.mjs";
import { A as AppLayout } from "./AppLayout.ac5a6ee7.mjs";
import { j as jsx, a as jsxs, F as Fragment } from "../ssr.mjs";
import "@inertiajs/react";
import "clsx";
import "react";
import "./Modal.9382fc3d.mjs";
import "./SectionTitle.d5bd99a3.mjs";
import "@headlessui/react";
import "react-dom";
import "./DangerButton.c63b93ef.mjs";
import "./DialogModal.3c0aea45.mjs";
import "./TextInput.93905041.mjs";
import "./SecondaryButton.78d66b17.mjs";
import "ziggy-js";
import "react-dom/server";
import "@inertiajs/react/server";
import "react/jsx-runtime";
import "./ActionMessage.1f23d4e7.mjs";
import "./PrimaryButton.7df85486.mjs";
import "axios";
import "./InputLabel.e9197da5.mjs";
import "./FormSection.49849577.mjs";
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
