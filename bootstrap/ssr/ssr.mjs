import ReactDOMServer from "react-dom/server";
import { createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import { createContext, useContext } from "react";
import route from "ziggy-js";
import * as jsxRuntime from "react/jsx-runtime";
const RouteContext = createContext(null);
function useRoute() {
  const fn = useContext(RouteContext);
  if (!fn) {
    throw new Error("Route function must be provided");
  }
  return fn;
}
async function resolvePageComponent(path, pages) {
  const page = pages[path];
  if (typeof page === "undefined") {
    throw new Error(`Page not found: ${path}`);
  }
  return typeof page === "function" ? page() : page;
}
const Fragment = jsxRuntime.Fragment;
const jsx = jsxRuntime.jsx;
const jsxs = jsxRuntime.jsxs;
const appName = "Jetstream";
createServer((page) => createInertiaApp({
  page,
  render: ReactDOMServer.renderToString,
  title: (title) => `${title} / ${appName}`,
  resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, /* @__PURE__ */ Object.assign({ "./Pages/API/Index.tsx": () => import("./assets/Index.4a88db58.mjs"), "./Pages/API/Partials/APITokenManager.tsx": () => import("./assets/APITokenManager.e636f73d.mjs"), "./Pages/Auth/ConfirmPassword.tsx": () => import("./assets/ConfirmPassword.9375fc2e.mjs"), "./Pages/Auth/ForgotPassword.tsx": () => import("./assets/ForgotPassword.349b8266.mjs"), "./Pages/Auth/Login.tsx": () => import("./assets/Login.59b208ab.mjs"), "./Pages/Auth/Register.tsx": () => import("./assets/Register.ccd69c25.mjs"), "./Pages/Auth/ResetPassword.tsx": () => import("./assets/ResetPassword.b57731a2.mjs"), "./Pages/Auth/TwoFactorChallenge.tsx": () => import("./assets/TwoFactorChallenge.a54968d9.mjs"), "./Pages/Auth/VerifyEmail.tsx": () => import("./assets/VerifyEmail.c2dbdab9.mjs"), "./Pages/Dashboard.tsx": () => import("./assets/Dashboard.c0e55b6d.mjs"), "./Pages/PrivacyPolicy.tsx": () => import("./assets/PrivacyPolicy.ba663856.mjs"), "./Pages/Profile/Partials/DeleteUserForm.tsx": () => import("./assets/DeleteUserForm.78f0901a.mjs"), "./Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.tsx": () => import("./assets/LogoutOtherBrowserSessionsForm.3edb2612.mjs"), "./Pages/Profile/Partials/TwoFactorAuthenticationForm.tsx": () => import("./assets/TwoFactorAuthenticationForm.2e687d22.mjs"), "./Pages/Profile/Partials/UpdatePasswordForm.tsx": () => import("./assets/UpdatePasswordForm.8cc54f67.mjs"), "./Pages/Profile/Partials/UpdateProfileInformationForm.tsx": () => import("./assets/UpdateProfileInformationForm.0e980877.mjs"), "./Pages/Profile/Show.tsx": () => import("./assets/Show.8bd20a96.mjs"), "./Pages/Teams/Create.tsx": () => import("./assets/Create.440f7a02.mjs"), "./Pages/Teams/Partials/CreateTeamForm.tsx": () => import("./assets/CreateTeamForm.a5a29ee1.mjs"), "./Pages/Teams/Partials/DeleteTeamForm.tsx": () => import("./assets/DeleteTeamForm.ca53759b.mjs"), "./Pages/Teams/Partials/TeamMemberManager.tsx": () => import("./assets/TeamMemberManager.8cd3b0e2.mjs"), "./Pages/Teams/Partials/UpdateTeamNameForm.tsx": () => import("./assets/UpdateTeamNameForm.03878a30.mjs"), "./Pages/Teams/Show.tsx": () => import("./assets/Show.15b40f0f.mjs"), "./Pages/TermsOfService.tsx": () => import("./assets/TermsOfService.a289ae0b.mjs"), "./Pages/Welcome.tsx": () => import("./assets/Welcome.de1393d2.mjs"), "./Pages/Welcome2.tsx": () => import("./assets/Welcome2.6dba458c.mjs") })),
  setup: ({
    App,
    props
  }) => {
    const ssrRoute = (name, params, absolute, config) => {
      return route(name, params, absolute, {
        ...page.props.ziggy,
        location: new URL(page.props.ziggy.url),
        ...config
      });
    };
    return /* @__PURE__ */ jsx(RouteContext.Provider, {
      value: ssrRoute,
      children: /* @__PURE__ */ jsx(App, {
        ...props
      })
    });
  }
}), 13715);
export {
  Fragment as F,
  jsxs as a,
  jsx as j,
  useRoute as u
};
