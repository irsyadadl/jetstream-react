import { u as useTypedPage } from "./useTypedPage.bca7ae03.mjs";
import { A as ActionMessage } from "./ActionMessage.c3b49322.mjs";
import { A as ActionSection } from "./Modal.a2890560.mjs";
import { C as ConfirmationModal } from "./ConfirmationModal.3cb0771f.mjs";
import { D as DangerButton } from "./DangerButton.e26c0380.mjs";
import { D as DialogModal } from "./DialogModal.b8b793ce.mjs";
import { F as FormSection } from "./FormSection.7bacf247.mjs";
import { T as TextInput, I as InputError } from "./TextInput.58f5ea4e.mjs";
import { I as InputLabel } from "./InputLabel.25258eb4.mjs";
import { P as PrimaryButton } from "./PrimaryButton.94265e15.mjs";
import { S as SecondaryButton } from "./SecondaryButton.339df098.mjs";
import { S as SectionBorder } from "./SectionBorder.78c61d02.mjs";
import { useForm, router } from "@inertiajs/react";
import classNames from "clsx";
import { useState } from "react";
import route from "ziggy-js";
import { a as jsxs, j as jsx, F as Fragment } from "../ssr.mjs";
import "@headlessui/react";
import "./SectionTitle.d544f27b.mjs";
import "react-dom";
import "react-dom/server";
import "@inertiajs/react/server";
import "react/jsx-runtime";
function TeamMemberManager({
  team,
  availableRoles,
  userPermissions
}) {
  const addTeamMemberForm = useForm({
    email: "",
    role: null
  });
  const updateRoleForm = useForm({
    role: null
  });
  const leaveTeamForm = useForm({});
  const removeTeamMemberForm = useForm({});
  const [currentlyManagingRole, setCurrentlyManagingRole] = useState(false);
  const [managingRoleFor, setManagingRoleFor] = useState(null);
  const [confirmingLeavingTeam, setConfirmingLeavingTeam] = useState(false);
  const [teamMemberBeingRemoved, setTeamMemberBeingRemoved] = useState(null);
  const {
    auth
  } = useTypedPage().props;
  function addTeamMember() {
    addTeamMemberForm.post(route("team-members.store", [team]), {
      errorBag: "addTeamMember",
      preserveScroll: true,
      onSuccess: () => addTeamMemberForm.reset()
    });
  }
  function cancelTeamInvitation(invitation) {
    router.delete(route("team-invitations.destroy", [invitation]), {
      preserveScroll: true
    });
  }
  function manageRole(teamMember) {
    setManagingRoleFor(teamMember);
    updateRoleForm.setData("role", teamMember.membership.role);
    setCurrentlyManagingRole(true);
  }
  function updateRole() {
    if (!managingRoleFor) {
      return;
    }
    updateRoleForm.put(route("team-members.update", [team, managingRoleFor]), {
      preserveScroll: true,
      onSuccess: () => setCurrentlyManagingRole(false)
    });
  }
  function confirmLeavingTeam() {
    setConfirmingLeavingTeam(true);
  }
  function leaveTeam() {
    leaveTeamForm.delete(route("team-members.destroy", [team, auth.user]));
  }
  function confirmTeamMemberRemoval(teamMember) {
    setTeamMemberBeingRemoved(teamMember);
  }
  function removeTeamMember() {
    if (!teamMemberBeingRemoved) {
      return;
    }
    removeTeamMemberForm.delete(route("team-members.destroy", [team, teamMemberBeingRemoved]), {
      errorBag: "removeTeamMember",
      preserveScroll: true,
      preserveState: true,
      onSuccess: () => setTeamMemberBeingRemoved(null)
    });
  }
  function displayableRole(role) {
    var _a;
    return (_a = availableRoles.find((r) => r.key === role)) == null ? void 0 : _a.name;
  }
  return /* @__PURE__ */ jsxs("div", {
    children: [userPermissions.canAddTeamMembers ? /* @__PURE__ */ jsxs("div", {
      children: [/* @__PURE__ */ jsx(SectionBorder, {}), /* @__PURE__ */ jsxs(FormSection, {
        onSubmit: addTeamMember,
        title: "Add Team Member",
        description: "Add a new team member to your team, allowing them to collaborate with you.",
        renderActions: () => /* @__PURE__ */ jsxs(Fragment, {
          children: [/* @__PURE__ */ jsx(ActionMessage, {
            on: addTeamMemberForm.recentlySuccessful,
            className: "mr-3",
            children: "Added."
          }), /* @__PURE__ */ jsx(PrimaryButton, {
            className: classNames({
              "opacity-25": addTeamMemberForm.processing
            }),
            disabled: addTeamMemberForm.processing,
            children: "Add"
          })]
        }),
        children: [/* @__PURE__ */ jsx("div", {
          className: "col-span-6",
          children: /* @__PURE__ */ jsx("div", {
            className: "max-w-xl text-sm text-gray-600",
            children: "Please provide the email address of the person you would like to add to this team."
          })
        }), /* @__PURE__ */ jsxs("div", {
          className: "col-span-6 sm:col-span-4",
          children: [/* @__PURE__ */ jsx(InputLabel, {
            htmlFor: "email",
            value: "Email"
          }), /* @__PURE__ */ jsx(TextInput, {
            id: "email",
            type: "email",
            className: "mt-1 block w-full",
            value: addTeamMemberForm.data.email,
            onChange: (e) => addTeamMemberForm.setData("email", e.currentTarget.value)
          }), /* @__PURE__ */ jsx(InputError, {
            message: addTeamMemberForm.errors.email,
            className: "mt-2"
          })]
        }), availableRoles.length > 0 ? /* @__PURE__ */ jsxs("div", {
          className: "col-span-6 lg:col-span-4",
          children: [/* @__PURE__ */ jsx(InputLabel, {
            htmlFor: "roles",
            value: "Role"
          }), /* @__PURE__ */ jsx(InputError, {
            message: addTeamMemberForm.errors.role,
            className: "mt-2"
          }), /* @__PURE__ */ jsx("div", {
            className: "relative z-0 mt-1 cursor-pointer rounded-lg border border-gray-200",
            children: availableRoles.map((role, i) => /* @__PURE__ */ jsx("button", {
              type: "button",
              className: classNames("relative inline-flex w-full rounded-lg px-4 py-3 focus:z-10 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200", {
                "rounded-t-none border-t border-gray-200": i > 0,
                "rounded-b-none": i != Object.keys(availableRoles).length - 1
              }),
              onClick: () => addTeamMemberForm.setData("role", role.key),
              children: /* @__PURE__ */ jsxs("div", {
                className: classNames({
                  "opacity-50": addTeamMemberForm.data.role && addTeamMemberForm.data.role != role.key
                }),
                children: [/* @__PURE__ */ jsxs("div", {
                  className: "flex items-center",
                  children: [/* @__PURE__ */ jsx("div", {
                    className: classNames("text-sm text-gray-600", {
                      "font-semibold": addTeamMemberForm.data.role == role.key
                    }),
                    children: role.name
                  }), addTeamMemberForm.data.role == role.key ? /* @__PURE__ */ jsx("svg", {
                    className: "ml-2 h-5 w-5 text-green-400",
                    fill: "none",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /* @__PURE__ */ jsx("path", {
                      d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    })
                  }) : null]
                }), /* @__PURE__ */ jsx("div", {
                  className: "mt-2 text-xs text-gray-600",
                  children: role.description
                })]
              })
            }, role.key))
          })]
        }) : null]
      })]
    }) : null, team.team_invitations.length > 0 && userPermissions.canAddTeamMembers ? /* @__PURE__ */ jsxs("div", {
      children: [/* @__PURE__ */ jsx(SectionBorder, {}), /* @__PURE__ */ jsx("div", {
        className: "mt-10 sm:mt-0"
      }), /* @__PURE__ */ jsx(ActionSection, {
        title: "Pending Team Invitations",
        description: "These people have been invited to your team and have been sent an invitation email. They may join the team by accepting the email invitation.",
        children: /* @__PURE__ */ jsx("div", {
          className: "space-y-6",
          children: team.team_invitations.map((invitation) => /* @__PURE__ */ jsxs("div", {
            className: "flex items-center justify-between",
            children: [/* @__PURE__ */ jsx("div", {
              className: "text-gray-600",
              children: invitation.email
            }), /* @__PURE__ */ jsx("div", {
              className: "flex items-center",
              children: userPermissions.canRemoveTeamMembers ? /* @__PURE__ */ jsx("button", {
                className: "ml-6 cursor-pointer text-sm text-red-500 focus:outline-none",
                onClick: () => cancelTeamInvitation(invitation),
                children: "Cancel"
              }) : null
            })]
          }, invitation.id))
        })
      })]
    }) : null, team.users.length > 0 ? /* @__PURE__ */ jsxs("div", {
      children: [/* @__PURE__ */ jsx(SectionBorder, {}), /* @__PURE__ */ jsx("div", {
        className: "mt-10 sm:mt-0"
      }), /* @__PURE__ */ jsx(ActionSection, {
        title: "Team Members",
        description: "All of the people that are part of this team.",
        children: /* @__PURE__ */ jsx("div", {
          className: "space-y-6",
          children: team.users.map((user) => /* @__PURE__ */ jsxs("div", {
            className: "flex items-center justify-between",
            children: [/* @__PURE__ */ jsxs("div", {
              className: "flex items-center",
              children: [/* @__PURE__ */ jsx("img", {
                className: "h-8 w-8 rounded-full",
                src: user.profile_photo_url,
                alt: user.name
              }), /* @__PURE__ */ jsx("div", {
                className: "ml-4",
                children: user.name
              })]
            }), /* @__PURE__ */ jsxs("div", {
              className: "flex items-center",
              children: [userPermissions.canAddTeamMembers && availableRoles.length ? /* @__PURE__ */ jsx("button", {
                className: "ml-2 text-sm text-gray-400 underline",
                onClick: () => manageRole(user),
                children: displayableRole(user.membership.role)
              }) : availableRoles.length ? /* @__PURE__ */ jsx("div", {
                className: "ml-2 text-sm text-gray-400",
                children: displayableRole(user.membership.role)
              }) : null, auth.user.id === user.id ? /* @__PURE__ */ jsx("button", {
                className: "ml-6 cursor-pointer text-sm text-red-500",
                onClick: confirmLeavingTeam,
                children: "Leave"
              }) : null, userPermissions.canRemoveTeamMembers ? /* @__PURE__ */ jsx("button", {
                className: "ml-6 cursor-pointer text-sm text-red-500",
                onClick: () => confirmTeamMemberRemoval(user),
                children: "Remove"
              }) : null]
            })]
          }, user.id))
        })
      })]
    }) : null, /* @__PURE__ */ jsxs(DialogModal, {
      isOpen: currentlyManagingRole,
      onClose: () => setCurrentlyManagingRole(false),
      children: [/* @__PURE__ */ jsx(DialogModal.Content, {
        title: "Manage Role"
      }), managingRoleFor ? /* @__PURE__ */ jsx("div", {
        children: /* @__PURE__ */ jsx("div", {
          className: "relative z-0 mt-1 cursor-pointer rounded-lg border border-gray-200",
          children: availableRoles.map((role, i) => /* @__PURE__ */ jsx("button", {
            type: "button",
            className: classNames("relative inline-flex w-full rounded-lg px-4 py-3 focus:z-10 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200", {
              "rounded-t-none border-t border-gray-200": i > 0,
              "rounded-b-none": i !== Object.keys(availableRoles).length - 1
            }),
            onClick: () => updateRoleForm.setData("role", role.key),
            children: /* @__PURE__ */ jsxs("div", {
              className: classNames({
                "opacity-50": updateRoleForm.data.role && updateRoleForm.data.role !== role.key
              }),
              children: [/* @__PURE__ */ jsxs("div", {
                className: "flex items-center",
                children: [/* @__PURE__ */ jsx("div", {
                  className: classNames("text-sm text-gray-600", {
                    "font-semibold": updateRoleForm.data.role === role.key
                  }),
                  children: role.name
                }), updateRoleForm.data.role === role.key ? /* @__PURE__ */ jsx("svg", {
                  className: "ml-2 h-5 w-5 text-green-400",
                  fill: "none",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: /* @__PURE__ */ jsx("path", {
                    d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  })
                }) : null]
              }), /* @__PURE__ */ jsx("div", {
                className: "mt-2 text-xs text-gray-600",
                children: role.description
              })]
            })
          }, role.key))
        })
      }) : null, /* @__PURE__ */ jsxs(DialogModal.Footer, {
        children: [/* @__PURE__ */ jsx(SecondaryButton, {
          onClick: () => setCurrentlyManagingRole(false),
          children: "Cancel"
        }), /* @__PURE__ */ jsx(PrimaryButton, {
          onClick: updateRole,
          className: classNames("ml-2", {
            "opacity-25": updateRoleForm.processing
          }),
          disabled: updateRoleForm.processing,
          children: "Save"
        })]
      })]
    }), /* @__PURE__ */ jsxs(ConfirmationModal, {
      isOpen: confirmingLeavingTeam,
      onClose: () => setConfirmingLeavingTeam(false),
      children: [/* @__PURE__ */ jsx(ConfirmationModal.Content, {
        title: "Leave Team",
        children: "Are you sure you would like to leave this team?"
      }), /* @__PURE__ */ jsxs(ConfirmationModal.Footer, {
        children: [/* @__PURE__ */ jsx(SecondaryButton, {
          onClick: () => setConfirmingLeavingTeam(false),
          children: "Cancel"
        }), /* @__PURE__ */ jsx(DangerButton, {
          onClick: leaveTeam,
          className: classNames("ml-2", {
            "opacity-25": leaveTeamForm.processing
          }),
          disabled: leaveTeamForm.processing,
          children: "Leave"
        })]
      })]
    }), /* @__PURE__ */ jsxs(ConfirmationModal, {
      isOpen: !!teamMemberBeingRemoved,
      onClose: () => setTeamMemberBeingRemoved(null),
      children: [/* @__PURE__ */ jsx(ConfirmationModal.Content, {
        title: "Remove Team Member",
        children: "Are you sure you would like to remove this person from the team?"
      }), /* @__PURE__ */ jsxs(ConfirmationModal.Footer, {
        children: [/* @__PURE__ */ jsx(SecondaryButton, {
          onClick: () => setTeamMemberBeingRemoved(null),
          children: "Cancel"
        }), /* @__PURE__ */ jsx(DangerButton, {
          onClick: removeTeamMember,
          className: classNames("ml-2", {
            "opacity-25": removeTeamMemberForm.processing
          }),
          disabled: removeTeamMemberForm.processing,
          children: "Remove"
        })]
      })]
    })]
  });
}
export {
  TeamMemberManager as default
};
