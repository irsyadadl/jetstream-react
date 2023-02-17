import APITokenManager from "./APITokenManager.e636f73d.mjs";
import { A as AppLayout } from "./AppLayout.ac5a6ee7.mjs";
import { j as jsx } from "../ssr.mjs";
import "@inertiajs/react";
import "clsx";
import "react";
import "./ActionMessage.1f23d4e7.mjs";
import "@headlessui/react";
import "./Modal.9382fc3d.mjs";
import "./SectionTitle.d5bd99a3.mjs";
import "react-dom";
import "./Checkbox.29d39462.mjs";
import "./ConfirmationModal.9b0cc550.mjs";
import "./DangerButton.c63b93ef.mjs";
import "./DialogModal.3c0aea45.mjs";
import "./FormSection.49849577.mjs";
import "./TextInput.93905041.mjs";
import "./InputLabel.e9197da5.mjs";
import "./PrimaryButton.7df85486.mjs";
import "./SecondaryButton.78d66b17.mjs";
import "./SectionBorder.83091097.mjs";
import "./useTypedPage.bca7ae03.mjs";
import "ziggy-js";
import "react-dom/server";
import "@inertiajs/react/server";
import "react/jsx-runtime";
function ApiTokenIndex({
  tokens,
  availablePermissions,
  defaultPermissions
}) {
  return /* @__PURE__ */ jsx(AppLayout, {
    title: "API Tokens",
    children: /* @__PURE__ */ jsx("div", {
      children: /* @__PURE__ */ jsx("div", {
        className: "mx-auto max-w-7xl py-10 sm:px-6 lg:px-8",
        children: /* @__PURE__ */ jsx(APITokenManager, {
          tokens,
          availablePermissions,
          defaultPermissions
        })
      })
    })
  });
}
export {
  ApiTokenIndex as default
};
