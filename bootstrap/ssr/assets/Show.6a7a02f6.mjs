import DeleteTeamForm from "./DeleteTeamForm.92bbb0d5.mjs";
import TeamMemberManager from "./TeamMemberManager.ccd65f47.mjs";
import UpdateTeamNameForm from "./UpdateTeamNameForm.18d8ac0f.mjs";
import { S as SectionBorder } from "./SectionBorder.78c61d02.mjs";
import { A as AppLayout } from "./AppLayout.7f7e46f9.mjs";
import { j as jsx, a as jsxs, F as Fragment } from "../ssr.mjs";
import "./Modal.a2890560.mjs";
import "./SectionTitle.d544f27b.mjs";
import "@headlessui/react";
import "clsx";
import "react";
import "react-dom";
import "./ConfirmationModal.3cb0771f.mjs";
import "./DangerButton.e26c0380.mjs";
import "./SecondaryButton.339df098.mjs";
import "@inertiajs/react";
import "ziggy-js";
import "react-dom/server";
import "@inertiajs/react/server";
import "react/jsx-runtime";
import "./useTypedPage.bca7ae03.mjs";
import "./ActionMessage.c3b49322.mjs";
import "./DialogModal.b8b793ce.mjs";
import "./FormSection.7bacf247.mjs";
import "./TextInput.58f5ea4e.mjs";
import "./InputLabel.25258eb4.mjs";
import "./PrimaryButton.94265e15.mjs";
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
