import { u as useTypedPage } from "./useTypedPage.bca7ae03.mjs";
import { Head, Link } from "@inertiajs/react";
import route from "ziggy-js";
import { a as jsxs, F as Fragment, j as jsx } from "../ssr.mjs";
import "react-dom/server";
import "@inertiajs/react/server";
import "react";
import "react/jsx-runtime";
function Welcome({
  laravelVersion,
  phpVersion
}) {
  const {
    auth
  } = useTypedPage().props;
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(Head, {
      title: "Jetstream React"
    }), /* @__PURE__ */ jsxs("div", {
      className: "relative min-h-screen bg-gray-900",
      children: [/* @__PURE__ */ jsx("div", {
        className: "fixed z-50 flex w-full max-w-screen-2xl items-center justify-end gap-x-4 p-6",
        children: auth.user ? /* @__PURE__ */ jsxs(Fragment, {
          children: [/* @__PURE__ */ jsx(Link, {
            className: "font-medium text-slate-400 transition hover:text-white",
            href: route("profile.show"),
            children: "Profile"
          }), /* @__PURE__ */ jsx(Link, {
            className: "font-medium text-slate-400 transition hover:text-white",
            href: route("dashboard"),
            children: "Dashboard"
          })]
        }) : /* @__PURE__ */ jsxs(Fragment, {
          children: [/* @__PURE__ */ jsx(Link, {
            className: "font-medium text-slate-400 transition hover:text-white",
            href: route("login"),
            children: "Login"
          }), /* @__PURE__ */ jsx(Link, {
            className: "font-medium text-slate-400 transition hover:text-white",
            href: route("register"),
            children: "Register"
          })]
        })
      }), /* @__PURE__ */ jsx("div", {
        className: "absolute bottom-0 h-80 w-full xl:inset-0 xl:h-full",
        children: /* @__PURE__ */ jsx("div", {
          className: "h-full w-full xl:grid xl:grid-cols-2",
          children: /* @__PURE__ */ jsxs("div", {
            className: "h-full xl:relative xl:col-start-2",
            children: [/* @__PURE__ */ jsx("img", {
              className: "h-full w-full object-cover opacity-25 xl:absolute xl:inset-0",
              src: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100",
              alt: "People working on laptops"
            }), /* @__PURE__ */ jsx("div", {
              "aria-hidden": "true",
              className: "absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
            })]
          })
        })
      }), /* @__PURE__ */ jsx("div", {
        className: "mx-auto max-w-4xl px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8",
        children: /* @__PURE__ */ jsxs("div", {
          className: "relative pt-12 pb-64 sm:pt-16 sm:pb-24 xl:col-start-1 xl:pb-16",
          children: [/* @__PURE__ */ jsx("h2", {
            className: "text-base font-semibold text-indigo-300",
            children: "Jetstream With React"
          }), /* @__PURE__ */ jsx("p", {
            className: "mt-3 text-3xl font-bold tracking-tight text-white",
            children: "Welcome to your Jetstream application!"
          }), /* @__PURE__ */ jsx("p", {
            className: "mt-5 text-lg text-gray-300",
            children: "Laravel Jetstream provides a beautiful, robust starting point for your next Laravel application. Laravel is designed to help you build your application using a development environment that is simple, powerful, and enjoyable."
          }), /* @__PURE__ */ jsxs("div", {
            className: "mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2",
            children: [/* @__PURE__ */ jsxs("p", {
              children: [/* @__PURE__ */ jsx("span", {
                className: "block text-2xl font-bold text-white",
                children: "Laravel"
              }), /* @__PURE__ */ jsx("span", {
                className: "mt-1 block text-base text-gray-300",
                children: "Laravel is a web application framework with expressive, elegant syntax. We\u2019ve already laid the foundation \u2014 freeing you to create without sweating the small things."
              })]
            }), /* @__PURE__ */ jsxs("p", {
              children: [/* @__PURE__ */ jsx("span", {
                className: "block text-2xl font-bold text-white",
                children: "Jetstream"
              }), /* @__PURE__ */ jsx("span", {
                className: "mt-1 block text-base text-gray-300",
                children: "Laravel Jetstream is a beautifully designed application starter kit for Laravel and provides the perfect starting point for your next Laravel application."
              })]
            }), /* @__PURE__ */ jsxs("p", {
              children: [/* @__PURE__ */ jsx("span", {
                className: "block text-2xl font-bold text-white",
                children: "React"
              }), /* @__PURE__ */ jsx("span", {
                className: "mt-1 block text-base text-gray-300",
                children: "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies."
              })]
            }), /* @__PURE__ */ jsxs("p", {
              children: [/* @__PURE__ */ jsx("span", {
                className: "block text-2xl font-bold text-white",
                children: "Inertia.js"
              }), /* @__PURE__ */ jsx("span", {
                className: "mt-1 block text-base text-gray-300",
                children: "Inertia.js is a tool for building single-page apps using server-side rendering and the Laravel framework."
              })]
            })]
          })]
        })
      })]
    })]
  });
}
export {
  Welcome as default
};
