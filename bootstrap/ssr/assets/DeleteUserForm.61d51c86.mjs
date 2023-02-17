import { useForm } from "@inertiajs/react";
import classNames from "clsx";
import { useState, useRef } from "react";
import { A as ActionSection } from "./Modal.a2890560.mjs";
import { D as DangerButton } from "./DangerButton.e26c0380.mjs";
import { D as DialogModal } from "./DialogModal.b8b793ce.mjs";
import { T as TextInput, I as InputError } from "./TextInput.58f5ea4e.mjs";
import { S as SecondaryButton } from "./SecondaryButton.339df098.mjs";
import route from "ziggy-js";
import { a as jsxs, j as jsx } from "../ssr.mjs";
import "./SectionTitle.d544f27b.mjs";
import "@headlessui/react";
import "react-dom";
import "react-dom/server";
import "@inertiajs/react/server";
import "react/jsx-runtime";
function DeleteUserForm() {
  const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
  const form = useForm({
    password: ""
  });
  const passwordRef = useRef(null);
  function confirmUserDeletion() {
    setConfirmingUserDeletion(true);
    setTimeout(() => {
      var _a;
      return (_a = passwordRef.current) == null ? void 0 : _a.focus();
    }, 250);
  }
  function deleteUser() {
    form.delete(route("current-user.destroy"), {
      preserveScroll: true,
      onSuccess: () => closeModal(),
      onError: () => {
        var _a;
        return (_a = passwordRef.current) == null ? void 0 : _a.focus();
      },
      onFinish: () => form.reset()
    });
  }
  function closeModal() {
    setConfirmingUserDeletion(false);
    form.reset();
  }
  return /* @__PURE__ */ jsxs(ActionSection, {
    title: "Delete Account",
    description: "Permanently delete your account.",
    children: [/* @__PURE__ */ jsx("div", {
      className: "max-w-xl text-sm text-gray-600",
      children: "Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."
    }), /* @__PURE__ */ jsx("div", {
      className: "mt-5",
      children: /* @__PURE__ */ jsx(DangerButton, {
        onClick: confirmUserDeletion,
        children: "Delete Account"
      })
    }), /* @__PURE__ */ jsxs(DialogModal, {
      isOpen: confirmingUserDeletion,
      onClose: closeModal,
      children: [/* @__PURE__ */ jsxs(DialogModal.Content, {
        title: "Delete Account",
        children: ["Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account.", /* @__PURE__ */ jsxs("div", {
          className: "mt-4",
          children: [/* @__PURE__ */ jsx(TextInput, {
            type: "password",
            className: "mt-1 block w-3/4",
            placeholder: "Password",
            value: form.data.password,
            onChange: (e) => form.setData("password", e.currentTarget.value)
          }), /* @__PURE__ */ jsx(InputError, {
            message: form.errors.password,
            className: "mt-2"
          })]
        })]
      }), /* @__PURE__ */ jsxs(DialogModal.Footer, {
        children: [/* @__PURE__ */ jsx(SecondaryButton, {
          onClick: closeModal,
          children: "Cancel"
        }), /* @__PURE__ */ jsx(DangerButton, {
          onClick: deleteUser,
          className: classNames("ml-2", {
            "opacity-25": form.processing
          }),
          disabled: form.processing,
          children: "Delete Account"
        })]
      })]
    })]
  });
}
export {
  DeleteUserForm as default
};
