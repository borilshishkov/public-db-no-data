"use client";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  XMarkIcon,
  WrenchIcon,
  KeyIcon,
} from "@heroicons/react/24/outline";
import logo from "../../public/assets/placeLogoHere.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const teams = [
    {
      id: 1,
      name: "Můj Profil",
      href: "/profile",
      initial: <KeyIcon />,
      current: false,
    },
  ];
  const teams2 = [
    {
      id: 2,
      name: "Odhlásit se",
      href: "/",
      initial: <KeyIcon />,
      current: false,
    },
  ];

  const navigation = [
    {
      name: "Domů",
      href: "/",
      icon: HomeIcon,
      current: pathname === "/" ? true : false,
    },
    {
      name: "Stroje",
      href: "/machines",
      icon: WrenchIcon,
      current: pathname === "/machines" ? true : false,
    },
    {
      name: "Produkty",
      href: "/products",
      icon: FolderIcon,
      current: pathname === "/products" ? true : false,
    },
    {
      name: "Dokumenty",
      href: "/documents",
      icon: DocumentDuplicateIcon,
      current: pathname === "/documents" ? true : false,
    },
    {
      name: "Katalog Závad",
      href: "/katalog-zavad",
      icon: DocumentDuplicateIcon,
      current: pathname === "/katalog-zavad" ? true : false,
    },
  ];

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
                    <div className="flex h-16 shrink-0 items-center">
                      <Image className="h-8 w-auto" src={logo} alt="Zentiva" />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <a
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? "bg-gray-50 text-emerald-600"
                                      : "text-gray-700 hover:bg-gray-50 hover:text-emerald-600",
                                    "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                                  )}
                                >
                                  <item.icon
                                    className={classNames(
                                      item.current
                                        ? "text-emerald-600"
                                        : "text-gray-400 group-hover:text-emerald-600",
                                      "h-6 w-6 shrink-0"
                                    )}
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li>
                          <div className="text-xs font-semibold leading-6 text-gray-400">
                            Možnosti
                          </div>
                          <ul role="list" className="-mx-2 mt-2 space-y-1">
                            {teams.map((team) => (
                              <li key={team.name}>
                                <a
                                  href={team.href}
                                  className={classNames(
                                    team.current
                                      ? "bg-gray-50 text-emerald-600"
                                      : "text-gray-700 hover:bg-gray-50 hover:text-emerald-600",
                                    "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                                  )}
                                >
                                  <span
                                    className={classNames(
                                      team.current
                                        ? "border-emerald-600 text-emerald-600"
                                        : "border-gray-200 text-gray-400 group-hover:border-emerald-600 group-hover:text-emerald-600",
                                      "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium"
                                    )}
                                  >
                                    {team.initial}
                                  </span>

                                  <span className="truncate">{team.name}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                          <ul role="list" className="-mx-2 mt-2 space-y-1">
                            {teams2.map((team) => (
                              <li key={team.name}>
                                <button
                                  href={team.href}
                                  className={classNames(
                                    team.current
                                      ? "bg-gray-50 text-emerald-600"
                                      : "text-gray-700 hover:bg-gray-50 hover:text-emerald-600",
                                    "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                                  )}
                                >
                                  <span
                                    className={classNames(
                                      team.current
                                        ? "border-emerald-600 text-emerald-600"
                                        : "border-gray-200 text-gray-400 group-hover:border-emerald-600 group-hover:text-emerald-600",
                                      "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium"
                                    )}
                                  >
                                    {team.initial}
                                  </span>

                                  <span className="truncate">{team.name}</span>
                                </button>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
            <div className="flex h-16 shrink-0 items-center">
              <Image className="h-8 w-auto" src={logo} alt="Zentiva" />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-50 text-emerald-600"
                              : "text-gray-700 hover:bg-gray-50 hover:text-emerald-600",
                            "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? "text-emerald-600"
                                : "text-gray-400 group-hover:text-emerald-600",
                              "h-6 w-6 shrink-0"
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>

                <li>
                  <div className="text-xs font-semibold leading-6 text-gray-400">
                    Možnosti
                  </div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {teams.map((team) => (
                      <li key={team.name}>
                        <a
                          href={team.href}
                          className={classNames(
                            team.current
                              ? "bg-gray-50 text-emerald-600"
                              : "text-gray-700 hover:bg-gray-50 hover:text-emerald-600",
                            "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                          )}
                        >
                          <span
                            className={classNames(
                              team.current
                                ? "border-emerald-600 text-emerald-600"
                                : "border-gray-200 text-gray-400 group-hover:border-emerald-600 group-hover:text-emerald-600",
                              "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium"
                            )}
                          >
                            {team.initial}
                          </span>
                          <span className="truncate">{team.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {teams2.map((team) => (
                      <li key={team.name}>
                        <button
                          href={team.href}
                          className={classNames(
                            team.current
                              ? "bg-gray-50 text-emerald-600"
                              : "text-gray-700 hover:bg-gray-50 hover:text-emerald-600",
                            "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                          )}
                        >
                          <span
                            className={classNames(
                              team.current
                                ? "border-emerald-600 text-emerald-600"
                                : "border-gray-200 text-gray-400 group-hover:border-emerald-600 group-hover:text-emerald-600",
                              "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium"
                            )}
                          >
                            {team.initial}
                          </span>
                          <span className="truncate">{team.name}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <main className="py-10 lg:pl-72">
          <div className="px-4 sm:px-6 lg:px-8">{/* Content */}</div>
        </main>
      </div>
    </>
  );
}
