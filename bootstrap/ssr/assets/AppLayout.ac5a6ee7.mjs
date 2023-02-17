import { usePage, Link, Head, router } from "@inertiajs/react";
import classNames from "clsx";
import { useState } from "react";
import { u as useTypedPage } from "./useTypedPage.bca7ae03.mjs";
import { a as jsxs, j as jsx, F as Fragment } from "../ssr.mjs";
import { Transition } from "@headlessui/react";
import route from "ziggy-js";
function ApplicationMark(props) {
  return /* @__PURE__ */ jsxs("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: [/* @__PURE__ */ jsx("path", {
      d: "M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z",
      fill: "#6875F5"
    }), /* @__PURE__ */ jsx("path", {
      d: "M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z",
      fill: "#6875F5"
    })]
  });
}
function Banner() {
  var _a, _b;
  const [show, setShow] = useState(true);
  const {
    props
  } = usePage();
  const style = ((_a = props.jetstream.flash) == null ? void 0 : _a.bannerStyle) || "success";
  const message = ((_b = props.jetstream.flash) == null ? void 0 : _b.banner) || "";
  return /* @__PURE__ */ jsx("div", {
    children: show && message ? /* @__PURE__ */ jsx("div", {
      className: classNames({
        "bg-indigo-500": style == "success",
        "bg-red-700": style == "danger"
      }),
      children: /* @__PURE__ */ jsx("div", {
        className: "mx-auto max-w-screen-xl py-2 px-3 sm:px-6 lg:px-8",
        children: /* @__PURE__ */ jsxs("div", {
          className: "flex flex-wrap items-center justify-between",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "flex w-0 min-w-0 flex-1 items-center",
            children: [/* @__PURE__ */ jsx("span", {
              className: classNames("flex rounded-lg p-2", {
                "bg-indigo-600": style == "success",
                "bg-red-600": style == "danger"
              }),
              children: (() => {
                switch (style) {
                  case "success":
                    return /* @__PURE__ */ jsx("svg", {
                      className: "h-5 w-5 text-white",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      children: /* @__PURE__ */ jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      })
                    });
                  case "danger":
                    return /* @__PURE__ */ jsx("svg", {
                      className: "h-5 w-5 text-white",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      children: /* @__PURE__ */ jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      })
                    });
                  default:
                    return null;
                }
              })()
            }), /* @__PURE__ */ jsx("p", {
              className: "ml-3 truncate text-sm font-medium text-white",
              children: message
            })]
          }), /* @__PURE__ */ jsx("div", {
            className: "flex-shrink-0 sm:ml-3",
            children: /* @__PURE__ */ jsx("button", {
              type: "button",
              className: classNames("-mr-1 flex rounded-md p-2 transition focus:outline-none sm:-mr-2", {
                "hover:bg-indigo-600 focus:bg-indigo-600": style == "success",
                "hover:bg-red-600 focus:bg-red-600": style == "danger"
              }),
              "aria-label": "Dismiss",
              onClick: (e) => {
                e.preventDefault();
                setShow(false);
              },
              children: /* @__PURE__ */ jsx("svg", {
                className: "h-5 w-5 text-white",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /* @__PURE__ */ jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M6 18L18 6M6 6l12 12"
                })
              })
            })
          })]
        })
      })
    }) : null
  });
}
function Dropdown({
  align = "right",
  width = "48",
  contentClasses = "py-1 bg-white",
  renderTrigger,
  children
}) {
  const [open, setOpen] = useState(false);
  const widthClass = {
    "48": "w-48"
  }[width.toString()];
  const alignmentClasses = (() => {
    if (align === "left") {
      return "origin-top-left left-0";
    } else if (align === "right") {
      return "origin-top-right right-0";
    } else {
      return "origin-top";
    }
  })();
  return /* @__PURE__ */ jsxs("div", {
    className: "relative",
    children: [/* @__PURE__ */ jsx("div", {
      onClick: () => setOpen(!open),
      children: renderTrigger()
    }), /* @__PURE__ */ jsx("div", {
      className: "fixed inset-0 z-40",
      style: {
        display: open ? "block" : "none"
      },
      onClick: () => setOpen(false)
    }), /* @__PURE__ */ jsx(Transition, {
      show: open,
      enter: "transition ease-out duration-200",
      enterFrom: "transform opacity-0 scale-95",
      enterTo: "transform opacity-100 scale-100",
      leave: "transition ease-in duration-75",
      leaveFrom: "transform opacity-100 scale-100",
      leaveTo: "transform opacity-0 scale-95",
      className: "relative z-50",
      children: /* @__PURE__ */ jsx("div", {
        className: classNames("absolute mt-2 rounded-md shadow-lg", widthClass, alignmentClasses),
        onClick: () => setOpen(false),
        children: /* @__PURE__ */ jsx("div", {
          className: classNames("rounded-md ring-1 ring-black ring-opacity-5", contentClasses),
          children
        })
      })
    })]
  });
}
function DropdownLink({
  as,
  href,
  children
}) {
  return /* @__PURE__ */ jsx("div", {
    children: (() => {
      switch (as) {
        case "button":
          return /* @__PURE__ */ jsx("button", {
            type: "submit",
            className: "block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 transition hover:bg-gray-100 focus:bg-gray-100 focus:outline-none",
            children
          });
        case "a":
          return /* @__PURE__ */ jsx("a", {
            href,
            className: "block px-4 py-2 text-sm leading-5 text-gray-700 transition hover:bg-gray-100 focus:bg-gray-100 focus:outline-none",
            children
          });
        default:
          return /* @__PURE__ */ jsx(Link, {
            href: href || "",
            className: "block px-4 py-2 text-sm leading-5 text-gray-700 transition hover:bg-gray-100 focus:bg-gray-100 focus:outline-none",
            children
          });
      }
    })()
  });
}
function NavLink({
  active,
  href,
  children
}) {
  const classes = active ? "inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition" : "inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition";
  return /* @__PURE__ */ jsx(Link, {
    href,
    className: classes,
    children
  });
}
function ResponsiveNavLink({
  active,
  href,
  children,
  ...props
}) {
  const classes = active ? "block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition" : "block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition";
  return /* @__PURE__ */ jsx("div", {
    children: "as" in props && props.as === "button" ? /* @__PURE__ */ jsx("button", {
      className: classNames("w-full text-left", classes),
      children
    }) : /* @__PURE__ */ jsx(Link, {
      href: href || "",
      className: classes,
      children
    })
  });
}
function AppLayout({
  title,
  renderHeader,
  children
}) {
  var _a, _b, _c;
  const {
    auth,
    jetstream
  } = useTypedPage().props;
  const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
  function switchToTeam(e, team) {
    e.preventDefault();
    router.put(route("current-team.update"), {
      team_id: team.id
    }, {
      preserveState: false
    });
  }
  function logout(e) {
    e.preventDefault();
    router.post(route("logout"));
  }
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx(Head, {
      title
    }), /* @__PURE__ */ jsx(Banner, {}), /* @__PURE__ */ jsxs("div", {
      className: "min-h-screen bg-gray-100",
      children: [/* @__PURE__ */ jsxs("nav", {
        className: "border-b border-gray-100 bg-white",
        children: [/* @__PURE__ */ jsx("div", {
          className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
          children: /* @__PURE__ */ jsxs("div", {
            className: "flex h-16 justify-between",
            children: [/* @__PURE__ */ jsxs("div", {
              className: "flex",
              children: [/* @__PURE__ */ jsx("div", {
                className: "flex flex-shrink-0 items-center",
                children: /* @__PURE__ */ jsx(Link, {
                  href: route("dashboard"),
                  children: /* @__PURE__ */ jsx(ApplicationMark, {
                    className: "block h-9 w-auto"
                  })
                })
              }), /* @__PURE__ */ jsx("div", {
                className: "hidden space-x-8 sm:-my-px sm:ml-10 sm:flex",
                children: /* @__PURE__ */ jsx(NavLink, {
                  href: route("dashboard"),
                  active: route().current("dashboard"),
                  children: "Dashboard"
                })
              })]
            }), /* @__PURE__ */ jsxs("div", {
              className: "hidden sm:ml-6 sm:flex sm:items-center",
              children: [/* @__PURE__ */ jsx("div", {
                className: "relative ml-3",
                children: jetstream.hasTeamFeatures ? /* @__PURE__ */ jsx(Dropdown, {
                  align: "right",
                  width: "60",
                  renderTrigger: () => {
                    var _a2;
                    return /* @__PURE__ */ jsx("span", {
                      className: "inline-flex rounded-md",
                      children: /* @__PURE__ */ jsxs("button", {
                        type: "button",
                        className: "inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:bg-gray-50 focus:outline-none active:bg-gray-50",
                        children: [(_a2 = auth.user.current_team) == null ? void 0 : _a2.name, /* @__PURE__ */ jsx("svg", {
                          className: "ml-2 -mr-0.5 h-4 w-4",
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 20 20",
                          fill: "currentColor",
                          children: /* @__PURE__ */ jsx("path", {
                            fillRule: "evenodd",
                            d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
                            clipRule: "evenodd"
                          })
                        })]
                      })
                    });
                  },
                  children: /* @__PURE__ */ jsx("div", {
                    className: "w-60",
                    children: jetstream.hasTeamFeatures ? /* @__PURE__ */ jsxs(Fragment, {
                      children: [/* @__PURE__ */ jsx("div", {
                        className: "block px-4 py-2 text-xs text-gray-400",
                        children: "Manage Team"
                      }), /* @__PURE__ */ jsx(DropdownLink, {
                        href: route("teams.show", [auth.user.current_team]),
                        children: "Team Settings"
                      }), jetstream.canCreateTeams ? /* @__PURE__ */ jsx(DropdownLink, {
                        href: route("teams.create"),
                        children: "Create New Team"
                      }) : null, /* @__PURE__ */ jsx("div", {
                        className: "border-t border-gray-100"
                      }), /* @__PURE__ */ jsx("div", {
                        className: "block px-4 py-2 text-xs text-gray-400",
                        children: "Switch Teams"
                      }), (_a = auth.user.all_teams) == null ? void 0 : _a.map((team) => /* @__PURE__ */ jsx("form", {
                        onSubmit: (e) => switchToTeam(e, team),
                        children: /* @__PURE__ */ jsx(DropdownLink, {
                          as: "button",
                          children: /* @__PURE__ */ jsxs("div", {
                            className: "flex items-center",
                            children: [team.id == auth.user.current_team_id && /* @__PURE__ */ jsx("svg", {
                              className: "mr-2 h-5 w-5 text-green-400",
                              fill: "none",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: "2",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              children: /* @__PURE__ */ jsx("path", {
                                d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              })
                            }), /* @__PURE__ */ jsx("div", {
                              children: team.name
                            })]
                          })
                        })
                      }, team.id))]
                    }) : null
                  })
                }) : null
              }), /* @__PURE__ */ jsx("div", {
                className: "relative ml-3",
                children: /* @__PURE__ */ jsxs(Dropdown, {
                  align: "right",
                  width: "48",
                  renderTrigger: () => jetstream.managesProfilePhotos ? /* @__PURE__ */ jsx("button", {
                    className: "flex rounded-full border-2 border-transparent text-sm transition focus:border-gray-300 focus:outline-none",
                    children: /* @__PURE__ */ jsx("img", {
                      className: "h-8 w-8 rounded-full object-cover",
                      src: auth.user.profile_photo_url,
                      alt: auth.user.name
                    })
                  }) : /* @__PURE__ */ jsx("span", {
                    className: "inline-flex rounded-md",
                    children: /* @__PURE__ */ jsxs("button", {
                      type: "button",
                      className: "inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition hover:text-gray-700 focus:outline-none",
                      children: [auth.user.name, /* @__PURE__ */ jsx("svg", {
                        className: "ml-2 -mr-0.5 h-4 w-4",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        children: /* @__PURE__ */ jsx("path", {
                          fillRule: "evenodd",
                          d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                          clipRule: "evenodd"
                        })
                      })]
                    })
                  }),
                  children: [/* @__PURE__ */ jsx("div", {
                    className: "block px-4 py-2 text-xs text-gray-400",
                    children: "Manage Account"
                  }), /* @__PURE__ */ jsx(DropdownLink, {
                    href: route("profile.show"),
                    children: "Profile"
                  }), jetstream.hasApiFeatures ? /* @__PURE__ */ jsx(DropdownLink, {
                    href: route("api-tokens.index"),
                    children: "API Tokens"
                  }) : null, /* @__PURE__ */ jsx("div", {
                    className: "border-t border-gray-100"
                  }), /* @__PURE__ */ jsx("form", {
                    onSubmit: logout,
                    children: /* @__PURE__ */ jsx(DropdownLink, {
                      as: "button",
                      children: "Log Out"
                    })
                  })]
                })
              })]
            }), /* @__PURE__ */ jsx("div", {
              className: "-mr-2 flex items-center sm:hidden",
              children: /* @__PURE__ */ jsx("button", {
                onClick: () => setShowingNavigationDropdown(!showingNavigationDropdown),
                className: "inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none",
                children: /* @__PURE__ */ jsxs("svg", {
                  className: "h-6 w-6",
                  stroke: "currentColor",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  children: [/* @__PURE__ */ jsx("path", {
                    className: classNames({
                      hidden: showingNavigationDropdown,
                      "inline-flex": !showingNavigationDropdown
                    }),
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M4 6h16M4 12h16M4 18h16"
                  }), /* @__PURE__ */ jsx("path", {
                    className: classNames({
                      hidden: !showingNavigationDropdown,
                      "inline-flex": showingNavigationDropdown
                    }),
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M6 18L18 6M6 6l12 12"
                  })]
                })
              })
            })]
          })
        }), /* @__PURE__ */ jsxs("div", {
          className: classNames("sm:hidden", {
            block: showingNavigationDropdown,
            hidden: !showingNavigationDropdown
          }),
          children: [/* @__PURE__ */ jsx("div", {
            className: "space-y-1 pt-2 pb-3",
            children: /* @__PURE__ */ jsx(ResponsiveNavLink, {
              href: route("dashboard"),
              active: route().current("dashboard"),
              children: "Dashboard"
            })
          }), /* @__PURE__ */ jsxs("div", {
            className: "border-t border-gray-200 pt-4 pb-1",
            children: [/* @__PURE__ */ jsxs("div", {
              className: "flex items-center px-4",
              children: [jetstream.managesProfilePhotos ? /* @__PURE__ */ jsx("div", {
                className: "mr-3 flex-shrink-0",
                children: /* @__PURE__ */ jsx("img", {
                  className: "h-10 w-10 rounded-full object-cover",
                  src: auth.user.profile_photo_url,
                  alt: auth.user.name
                })
              }) : null, /* @__PURE__ */ jsxs("div", {
                children: [/* @__PURE__ */ jsx("div", {
                  className: "text-base font-medium text-gray-800",
                  children: auth.user.name
                }), /* @__PURE__ */ jsx("div", {
                  className: "text-sm font-medium text-gray-500",
                  children: auth.user.email
                })]
              })]
            }), /* @__PURE__ */ jsxs("div", {
              className: "mt-3 space-y-1",
              children: [/* @__PURE__ */ jsx(ResponsiveNavLink, {
                href: route("profile.show"),
                active: route().current("profile.show"),
                children: "Profile"
              }), jetstream.hasApiFeatures ? /* @__PURE__ */ jsx(ResponsiveNavLink, {
                href: route("api-tokens.index"),
                active: route().current("api-tokens.index"),
                children: "API Tokens"
              }) : null, /* @__PURE__ */ jsx("form", {
                method: "POST",
                onSubmit: logout,
                children: /* @__PURE__ */ jsx(ResponsiveNavLink, {
                  as: "button",
                  children: "Log Out"
                })
              }), jetstream.hasTeamFeatures ? /* @__PURE__ */ jsxs(Fragment, {
                children: [/* @__PURE__ */ jsx("div", {
                  className: "border-t border-gray-200"
                }), /* @__PURE__ */ jsx("div", {
                  className: "block px-4 py-2 text-xs text-gray-400",
                  children: "Manage Team"
                }), /* @__PURE__ */ jsx(ResponsiveNavLink, {
                  href: route("teams.show", [auth.user.current_team]),
                  active: route().current("teams.show"),
                  children: "Team Settings"
                }), jetstream.canCreateTeams ? /* @__PURE__ */ jsx(ResponsiveNavLink, {
                  href: route("teams.create"),
                  active: route().current("teams.create"),
                  children: "Create New Team"
                }) : null, /* @__PURE__ */ jsx("div", {
                  className: "border-t border-gray-200"
                }), /* @__PURE__ */ jsx("div", {
                  className: "block px-4 py-2 text-xs text-gray-400",
                  children: "Switch Teams"
                }), (_c = (_b = auth.user) == null ? void 0 : _b.all_teams) == null ? void 0 : _c.map((team) => /* @__PURE__ */ jsx("form", {
                  onSubmit: (e) => switchToTeam(e, team),
                  children: /* @__PURE__ */ jsx(ResponsiveNavLink, {
                    as: "button",
                    children: /* @__PURE__ */ jsxs("div", {
                      className: "flex items-center",
                      children: [team.id == auth.user.current_team_id && /* @__PURE__ */ jsx("svg", {
                        className: "mr-2 h-5 w-5 text-green-400",
                        fill: "none",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /* @__PURE__ */ jsx("path", {
                          d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        })
                      }), /* @__PURE__ */ jsx("div", {
                        children: team.name
                      })]
                    })
                  })
                }, team.id))]
              }) : null]
            })]
          })]
        })]
      }), renderHeader ? /* @__PURE__ */ jsx("header", {
        className: "bg-white shadow",
        children: /* @__PURE__ */ jsx("div", {
          className: "mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8",
          children: renderHeader()
        })
      }) : null, /* @__PURE__ */ jsx("main", {
        children
      })]
    })]
  });
}
export {
  AppLayout as A
};
