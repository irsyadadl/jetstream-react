import ReactDOMServer from "react-dom/server";
import { createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import { createContext } from "react";
import route from "ziggy-js";
import * as jsxRuntime from "react/jsx-runtime";
const RouteContext = createContext(null);
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
  resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, /* @__PURE__ */ Object.assign({ "./Pages/API/Index.tsx": () => import("./assets/Index.c66e6966.mjs"), "./Pages/API/Partials/APITokenManager.tsx": () => import("./assets/APITokenManager.9c788d23.mjs"), "./Pages/Auth/ConfirmPassword.tsx": () => import("./assets/ConfirmPassword.e54551f4.mjs"), "./Pages/Auth/ForgotPassword.tsx": () => import("./assets/ForgotPassword.7a46c950.mjs"), "./Pages/Auth/Login.tsx": () => import("./assets/Login.da04259e.mjs"), "./Pages/Auth/Register.tsx": () => import("./assets/Register.e6d84d13.mjs"), "./Pages/Auth/ResetPassword.tsx": () => import("./assets/ResetPassword.ae6df365.mjs"), "./Pages/Auth/TwoFactorChallenge.tsx": () => import("./assets/TwoFactorChallenge.c623cbf7.mjs"), "./Pages/Auth/VerifyEmail.tsx": () => import("./assets/VerifyEmail.3ed3cfed.mjs"), "./Pages/Dashboard.tsx": () => import("./assets/Dashboard.d730a24f.mjs"), "./Pages/PrivacyPolicy.tsx": () => import("./assets/PrivacyPolicy.b0a6c64c.mjs"), "./Pages/Profile/Partials/DeleteUserForm.tsx": () => import("./assets/DeleteUserForm.61d51c86.mjs"), "./Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.tsx": () => import("./assets/LogoutOtherBrowserSessionsForm.052a287c.mjs"), "./Pages/Profile/Partials/TwoFactorAuthenticationForm.tsx": () => import("./assets/TwoFactorAuthenticationForm.8f7da440.mjs"), "./Pages/Profile/Partials/UpdatePasswordForm.tsx": () => import("./assets/UpdatePasswordForm.81a10e1e.mjs"), "./Pages/Profile/Partials/UpdateProfileInformationForm.tsx": () => import("./assets/UpdateProfileInformationForm.bd6bdfb1.mjs"), "./Pages/Profile/Show.tsx": () => import("./assets/Show.5dad5352.mjs"), "./Pages/Teams/Create.tsx": () => import("./assets/Create.3a30e8b8.mjs"), "./Pages/Teams/Partials/CreateTeamForm.tsx": () => import("./assets/CreateTeamForm.6474f77b.mjs"), "./Pages/Teams/Partials/DeleteTeamForm.tsx": () => import("./assets/DeleteTeamForm.92bbb0d5.mjs"), "./Pages/Teams/Partials/TeamMemberManager.tsx": () => import("./assets/TeamMemberManager.ccd65f47.mjs"), "./Pages/Teams/Partials/UpdateTeamNameForm.tsx": () => import("./assets/UpdateTeamNameForm.18d8ac0f.mjs"), "./Pages/Teams/Show.tsx": () => import("./assets/Show.6a7a02f6.mjs"), "./Pages/TermsOfService.tsx": () => import("./assets/TermsOfService.63001bb0.mjs"), "./Pages/Welcome.tsx": () => import("./assets/Welcome.e97bfbfd.mjs") })),
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
  jsx as j
};
