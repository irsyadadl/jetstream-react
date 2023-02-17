import { useForm, router } from "@inertiajs/react";
import classNames from "clsx";
import { useState, useRef } from "react";
import { A as ActionMessage } from "./ActionMessage.1f23d4e7.mjs";
import { F as FormSection } from "./FormSection.49849577.mjs";
import { I as InputError, T as TextInput } from "./TextInput.93905041.mjs";
import { I as InputLabel } from "./InputLabel.e9197da5.mjs";
import { P as PrimaryButton } from "./PrimaryButton.7df85486.mjs";
import { S as SecondaryButton } from "./SecondaryButton.78d66b17.mjs";
import route from "ziggy-js";
import { u as useTypedPage } from "./useTypedPage.bca7ae03.mjs";
import { a as jsxs, F as Fragment, j as jsx } from "../ssr.mjs";
import "@headlessui/react";
import "./SectionTitle.d5bd99a3.mjs";
import "react-dom/server";
import "@inertiajs/react/server";
import "react/jsx-runtime";
function UpdateProfileInformationForm({
  user
}) {
  const form = useForm({
    _method: "PUT",
    name: user.name,
    email: user.email,
    photo: null
  });
  const [photoPreview, setPhotoPreview] = useState(null);
  const photoRef = useRef(null);
  const {
    jetstream
  } = useTypedPage().props;
  function updateProfileInformation() {
    form.post(route("user-profile-information.update"), {
      errorBag: "updateProfileInformation",
      preserveScroll: true,
      onSuccess: () => clearPhotoFileInput()
    });
  }
  function selectNewPhoto() {
    var _a;
    (_a = photoRef.current) == null ? void 0 : _a.click();
  }
  function updatePhotoPreview() {
    var _a, _b;
    const photo = (_b = (_a = photoRef.current) == null ? void 0 : _a.files) == null ? void 0 : _b[0];
    if (!photo) {
      return;
    }
    form.setData("photo", photo);
    const reader = new FileReader();
    reader.onload = (e) => {
      var _a2;
      setPhotoPreview((_a2 = e.target) == null ? void 0 : _a2.result);
    };
    reader.readAsDataURL(photo);
  }
  function deletePhoto() {
    router.delete(route("current-user-photo.destroy"), {
      preserveScroll: true,
      onSuccess: () => {
        setPhotoPreview(null);
        clearPhotoFileInput();
      }
    });
  }
  function clearPhotoFileInput() {
    var _a;
    if ((_a = photoRef.current) == null ? void 0 : _a.value) {
      photoRef.current.value = "";
      form.setData("photo", null);
    }
  }
  return /* @__PURE__ */ jsxs(FormSection, {
    onSubmit: updateProfileInformation,
    title: "Profile Information",
    description: `Update your account's profile information and email address.`,
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
    children: [jetstream.managesProfilePhotos ? /* @__PURE__ */ jsxs("div", {
      className: "col-span-6 sm:col-span-4",
      children: [/* @__PURE__ */ jsx("input", {
        type: "file",
        className: "hidden",
        ref: photoRef,
        onChange: updatePhotoPreview
      }), /* @__PURE__ */ jsx(InputLabel, {
        htmlFor: "photo",
        value: "Photo"
      }), photoPreview ? /* @__PURE__ */ jsx("div", {
        className: "mt-2",
        children: /* @__PURE__ */ jsx("span", {
          className: "block h-20 w-20 rounded-full",
          style: {
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundImage: `url('${photoPreview}')`
          }
        })
      }) : /* @__PURE__ */ jsx("div", {
        className: "mt-2",
        children: /* @__PURE__ */ jsx("img", {
          src: user.profile_photo_url,
          alt: user.name,
          className: "h-20 w-20 rounded-full object-cover"
        })
      }), /* @__PURE__ */ jsx(SecondaryButton, {
        className: "mt-2 mr-2",
        type: "button",
        onClick: selectNewPhoto,
        children: "Select A New Photo"
      }), user.profile_photo_path ? /* @__PURE__ */ jsx(SecondaryButton, {
        type: "button",
        className: "mt-2",
        onClick: deletePhoto,
        children: "Remove Photo"
      }) : null, /* @__PURE__ */ jsx(InputError, {
        message: form.errors.photo,
        className: "mt-2"
      })]
    }) : null, /* @__PURE__ */ jsxs("div", {
      className: "col-span-6 sm:col-span-4",
      children: [/* @__PURE__ */ jsx(InputLabel, {
        htmlFor: "name",
        value: "Name"
      }), /* @__PURE__ */ jsx(TextInput, {
        id: "name",
        type: "text",
        className: "mt-1 block w-full",
        value: form.data.name,
        onChange: (e) => form.setData("name", e.currentTarget.value),
        autoComplete: "name"
      }), /* @__PURE__ */ jsx(InputError, {
        message: form.errors.name,
        className: "mt-2"
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "col-span-6 sm:col-span-4",
      children: [/* @__PURE__ */ jsx(InputLabel, {
        htmlFor: "email",
        value: "Email"
      }), /* @__PURE__ */ jsx(TextInput, {
        id: "email",
        type: "email",
        className: "mt-1 block w-full",
        value: form.data.email,
        onChange: (e) => form.setData("email", e.currentTarget.value)
      }), /* @__PURE__ */ jsx(InputError, {
        message: form.errors.email,
        className: "mt-2"
      })]
    })]
  });
}
export {
  UpdateProfileInformationForm as default
};
