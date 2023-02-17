import DeleteTeamForm from "./DeleteTeamForm.ca53759b.mjs";
import TeamMemberManager from "./TeamMemberManager.8cd3b0e2.mjs";
import UpdateTeamNameForm from "./UpdateTeamNameForm.03878a30.mjs";
import { S as SectionBorder } from "./SectionBorder.83091097.mjs";
import { A as AppLayout } from "./AppLayout.ac5a6ee7.mjs";
import { j as jsx, a as jsxs, F as Fragment } from "../ssr.mjs";
import "./Modal.9382fc3d.mjs";
import "./SectionTitle.d5bd99a3.mjs";
import "@headlessui/react";
import "clsx";
import "react";
import "react-dom";
import "./ConfirmationModal.9b0cc550.mjs";
import "./DangerButton.c63b93ef.mjs";
import "./SecondaryButton.78d66b17.mjs";
import "@inertiajs/react";
import "ziggy-js";
import "react-dom/server";
import "@inertiajs/react/server";
import "react/jsx-runtime";
import "./useTypedPage.bca7ae03.mjs";
import "./ActionMessage.1f23d4e7.mjs";
import "./DialogModal.3c0aea45.mjs";
import "./FormSection.49849577.mjs";
import "./TextInput.93905041.mjs";
import "./InputLabel.e9197da5.mjs";
import "./PrimaryButton.7df85486.mjs";
function Show({
  team,
  availableRoles,
  permissions
}) {
  return /* @__PURE__ */ jsx(AppLayout, {
    title: "Team Settings",
    renderHeader: () => /* @__PURE__ */ jsx("h2", {
      className: "text-xl font-semibold leading-tight text-gray-800",
      children: "Team Settings"
    }),
    children: /* @__PURE__ */ jsx("div", {
      children: /* @__PURE__ */ jsxs("div", {
        className: "mx-auto max-w-7xl py-10 sm:px-6 lg:px-8",
        children: [/* @__PURE__ */ jsx(UpdateTeamNameForm, {
          team,
          permissions
        }), /* @__PURE__ */ jsx("div", {
          className: "mt-10 sm:mt-0",
          children: /* @__PURE__ */ jsx(TeamMemberManager, {
            team,
            availableRoles,
            userPermissions: permissions
          })
        }), permissions.canDeleteTeam && !team.personal_team ? /* @__PURE__ */ jsxs(Fragment, {
          children: [/* @__PURE__ */ jsx(SectionBorder, {}), /* @__PURE__ */ jsx("div", {
            className: "mt-10 sm:mt-0",
            children: /* @__PURE__ */ jsx(DeleteTeamForm, {
              team
            })
          })]
        }) : null]
      })
    })
  });
}
export {
  Show as default
};
