import { A as ActionSection } from "./Modal.a2890560.mjs";
import { C as ConfirmationModal } from "./ConfirmationModal.3cb0771f.mjs";
import { D as DangerButton } from "./DangerButton.e26c0380.mjs";
import { S as SecondaryButton } from "./SecondaryButton.339df098.mjs";
import { useForm } from "@inertiajs/react";
import classNames from "clsx";
import { useState } from "react";
import route from "ziggy-js";
import { a as jsxs, j as jsx } from "../ssr.mjs";
import "./SectionTitle.d544f27b.mjs";
import "@headlessui/react";
import "react-dom";
import "react-dom/server";
import "@inertiajs/react/server";
import "react/jsx-runtime";
function DeleteTeamForm({
  team
}) {
  const [confirmingTeamDeletion, setConfirmingTeamDeletion] = useState(false);
  const form = useForm({});
  function confirmTeamDeletion() {
    setConfirmingTeamDeletion(true);
  }
  function deleteTeam() {
    form.delete(route("teams.destroy", [team]), {
      errorBag: "deleteTeam"
    });
  }
  return /* @__PURE__ */ jsxs(ActionSection, {
    title: "Delete Team",
    description: "Permanently delete this team.",
    children: [/* @__PURE__ */ jsx("div", {
      className: "max-w-xl text-sm text-gray-600",
      children: "Once a team is deleted, all of its resources and data will be permanently deleted. Before deleting this team, please download any data or information regarding this team that you wish to retain."
    }), /* @__PURE__ */ jsx("div", {
      className: "mt-5",
      children: /* @__PURE__ */ jsx(DangerButton, {
        onClick: confirmTeamDeletion,
        children: "Delete Team"
      })
    }), /* @__PURE__ */ jsxs(ConfirmationModal, {
      isOpen: confirmingTeamDeletion,
      onClose: () => setConfirmingTeamDeletion(false),
      children: [/* @__PURE__ */ jsx(ConfirmationModal.Content, {
        title: "Delete Team",
        children: "Are you sure you want to delete this team? Once a team is deleted, all of its resources and data will be permanently deleted."
      }), /* @__PURE__ */ jsxs(ConfirmationModal.Footer, {
        children: [/* @__PURE__ */ jsx(SecondaryButton, {
          onClick: () => setConfirmingTeamDeletion(false),
          children: "Cancel"
        }), /* @__PURE__ */ jsx(DangerButton, {
          onClick: deleteTeam,
          className: classNames("ml-2", {
            "opacity-25": form.processing
          }),
          disabled: form.processing,
          children: "Delete Team"
        })]
      })]
    })]
  });
}
export {
  DeleteTeamForm as default
};
