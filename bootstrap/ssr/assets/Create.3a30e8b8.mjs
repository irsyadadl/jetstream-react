import CreateTeamForm from "./CreateTeamForm.6474f77b.mjs";
import { A as AppLayout } from "./AppLayout.7f7e46f9.mjs";
import { j as jsx } from "../ssr.mjs";
import "@inertiajs/react";
import "./useTypedPage.bca7ae03.mjs";
import "./ActionMessage.c3b49322.mjs";
import "@headlessui/react";
import "./FormSection.7bacf247.mjs";
import "clsx";
import "./SectionTitle.d544f27b.mjs";
import "./TextInput.58f5ea4e.mjs";
import "react";
import "./InputLabel.25258eb4.mjs";
import "./PrimaryButton.94265e15.mjs";
import "ziggy-js";
import "react-dom/server";
import "@inertiajs/react/server";
import "react/jsx-runtime";
function Create() {
  return /* @__PURE__ */ jsx(AppLayout, {
    title: "Create Team",
    renderHeader: () => /* @__PURE__ */ jsx("h2", {
      className: "text-xl font-semibold leading-tight text-gray-800",
      children: "Create Team"
    }),
    children: /* @__PURE__ */ jsx("div", {
      children: /* @__PURE__ */ jsx("div", {
        className: "mx-auto max-w-7xl py-10 sm:px-6 lg:px-8",
        children: /* @__PURE__ */ jsx(CreateTeamForm, {})
      })
    })
  });
}
export {
  Create as default
};
