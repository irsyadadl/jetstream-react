import CreateTeamForm from "./CreateTeamForm.a5a29ee1.mjs";
import { A as AppLayout } from "./AppLayout.ac5a6ee7.mjs";
import { j as jsx } from "../ssr.mjs";
import "@inertiajs/react";
import "./useTypedPage.bca7ae03.mjs";
import "./ActionMessage.1f23d4e7.mjs";
import "@headlessui/react";
import "./FormSection.49849577.mjs";
import "clsx";
import "./SectionTitle.d5bd99a3.mjs";
import "./TextInput.93905041.mjs";
import "react";
import "./InputLabel.e9197da5.mjs";
import "./PrimaryButton.7df85486.mjs";
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
