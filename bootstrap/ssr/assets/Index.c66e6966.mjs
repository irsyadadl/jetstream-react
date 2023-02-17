import APITokenManager from "./APITokenManager.9c788d23.mjs";
import { A as AppLayout } from "./AppLayout.7f7e46f9.mjs";
import { j as jsx } from "../ssr.mjs";
import "@inertiajs/react";
import "clsx";
import "react";
import "./ActionMessage.c3b49322.mjs";
import "@headlessui/react";
import "./Modal.a2890560.mjs";
import "./SectionTitle.d544f27b.mjs";
import "react-dom";
import "./Checkbox.c9d6708d.mjs";
import "./ConfirmationModal.3cb0771f.mjs";
import "./DangerButton.e26c0380.mjs";
import "./DialogModal.b8b793ce.mjs";
import "./FormSection.7bacf247.mjs";
import "./TextInput.58f5ea4e.mjs";
import "./InputLabel.25258eb4.mjs";
import "./PrimaryButton.94265e15.mjs";
import "./SecondaryButton.339df098.mjs";
import "./SectionBorder.78c61d02.mjs";
import "ziggy-js";
import "./useTypedPage.bca7ae03.mjs";
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
