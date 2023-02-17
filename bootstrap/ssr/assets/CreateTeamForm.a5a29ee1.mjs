import { useForm } from "@inertiajs/react";
import { u as useTypedPage } from "./useTypedPage.bca7ae03.mjs";
import { A as ActionMessage } from "./ActionMessage.1f23d4e7.mjs";
import { F as FormSection } from "./FormSection.49849577.mjs";
import { T as TextInput, I as InputError } from "./TextInput.93905041.mjs";
import { I as InputLabel } from "./InputLabel.e9197da5.mjs";
import { P as PrimaryButton } from "./PrimaryButton.7df85486.mjs";
import classNames from "clsx";
import route from "ziggy-js";
import { a as jsxs, F as Fragment, j as jsx } from "../ssr.mjs";
import "@headlessui/react";
import "./SectionTitle.d5bd99a3.mjs";
import "react";
import "react-dom/server";
import "@inertiajs/react/server";
import "react/jsx-runtime";
function CreateTeamForm() {
  const {
    auth
  } = useTypedPage().props;
  const form = useForm({
    name: ""
  });
  function createTeam() {
    form.post(route("teams.store"), {
      errorBag: "createTeam",
      preserveScroll: true
    });
  }
  return /* @__PURE__ */ jsxs(FormSection, {
    onSubmit: createTeam,
    title: "Team Details",
    description: "Create a new team to collaborate with others on projects.",
    renderActions: () => /* @__PURE__ */ jsxs(Fragment, {
      children: [/* @__PURE__ */ jsx(ActionMessage, {
        on: form.recentlySuccessful,
        className: "mr-3",
        children: "Saved."
      }), /* @__PURE__ */ jsx(PrimaryButton, {
        className: classNames({
          "opacity-25": form.processing
        }),
        disabled: form.processing,
        children: "Save"
      })]
    }),
    children: [/* @__PURE__ */ jsxs("div", {
      className: "col-span-6",
      children: [/* @__PURE__ */ jsx(InputLabel, {
        value: "Team Owner"
      }), /* @__PURE__ */ jsxs("div", {
        className: "mt-2 flex items-center",
        children: [/* @__PURE__ */ jsx("img", {
          className: "h-12 w-12 rounded-full object-cover",
          src: auth.user.profile_photo_url,
          alt: auth.user.name
        }), /* @__PURE__ */ jsxs("div", {
          className: "ml-4 leading-tight",
          children: [/* @__PURE__ */ jsx("div", {
            children: auth.user.name
          }), /* @__PURE__ */ jsx("div", {
            className: "text-sm text-gray-700",
            children: auth.user.email
          })]
        })]
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "col-span-6 sm:col-span-4",
      children: [/* @__PURE__ */ jsx(InputLabel, {
        htmlFor: "name",
        value: "Team Name"
      }), /* @__PURE__ */ jsx(TextInput, {
        id: "name",
        type: "text",
        className: "mt-1 block w-full",
        value: form.data.name,
        onChange: (e) => form.setData("name", e.currentTarget.value),
        autoFocus: true
      }), /* @__PURE__ */ jsx(InputError, {
        message: form.errors.name,
        className: "mt-2"
      })]
    })]
  });
}
export {
  CreateTeamForm as default
};
