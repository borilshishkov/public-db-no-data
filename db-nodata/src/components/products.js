"use client";

import Link from "next/link";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import productdata from "./productdata";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Products() {
  const [search, setSearch] = useState("");
  const transactions = productdata;

  const [enabled, setEnabled] = useState(false);
  const [enabled2, setEnabled2] = useState(false);
  const [enabled3, setEnabled3] = useState(false);
  const [enabled4, setEnabled4] = useState(false);

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">
              Seznam Test
            </h1>
          </div>
        </div>
        <div className="w-64">
          <label
            htmlFor="search"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Hledat test
          </label>
          <div className="relative mt-2 flex items-center">
            <input
              placeholder="Zadej název produktu"
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              name="search"
              id="search"
              className="block w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
            />
            <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
              <kbd className="inline-flex items-center rounded border border-gray-200 px-1 font-sans text-xs text-gray-400">
                <MagnifyingGlassIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </kbd>
            </div>
          </div>
        </div>
        <div className="gap-3 lg:flex">
          <Switch.Group as="div" className="mt-5 flex items-center">
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className={classNames(
                enabled ? "bg-emerald-600" : "bg-gray-200",
                "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
              )}
            >
              <span
                aria-hidden="true"
                className={classNames(
                  enabled ? "translate-x-5" : "translate-x-0",
                  "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                )}
              />
            </Switch>
            <Switch.Label as="span" className="ml-3 text-sm">
              <span className="font-medium text-gray-900">Filtr1</span>{" "}
              <span className="text-gray-500">(test)</span>
            </Switch.Label>
          </Switch.Group>

          <Switch.Group as="div" className="mt-5 flex items-center">
            <Switch
              checked={enabled2}
              onChange={setEnabled2}
              className={classNames(
                enabled2 ? "bg-emerald-600" : "bg-gray-200",
                "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
              )}
            >
              <span
                aria-hidden="true"
                className={classNames(
                  enabled2 ? "translate-x-5" : "translate-x-0",
                  "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                )}
              />
            </Switch>
            <Switch.Label as="span" className="ml-3 text-sm">
              <span className="font-medium text-gray-900">Filtr2</span>{" "}
              <span className="text-gray-500">(test)</span>
            </Switch.Label>
          </Switch.Group>

          <Switch.Group as="div" className="mt-5 flex items-center">
            <Switch
              checked={enabled3}
              onChange={setEnabled3}
              className={classNames(
                enabled3 ? "bg-emerald-600" : "bg-gray-200",
                "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
              )}
            >
              <span
                aria-hidden="true"
                className={classNames(
                  enabled3 ? "translate-x-5" : "translate-x-0",
                  "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                )}
              />
            </Switch>
            <Switch.Label as="span" className="ml-3 text-sm">
              <span className="font-medium text-gray-900">Filtr3</span>{" "}
              <span className="text-gray-500">(test)</span>
            </Switch.Label>
          </Switch.Group>

          <Switch.Group as="div" className="mt-5 flex items-center">
            <Switch
              checked={enabled4}
              onChange={setEnabled4}
              className={classNames(
                enabled4 ? "bg-emerald-600" : "bg-gray-200",
                "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
              )}
            >
              <span
                aria-hidden="true"
                className={classNames(
                  enabled4 ? "translate-x-5" : "translate-x-0",
                  "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                )}
              />
            </Switch>
            <Switch.Label as="span" className="ml-3 text-sm">
              <span className="font-medium text-gray-900">Filtr4</span>{" "}
              <span className="text-gray-500">(Test)</span>
            </Switch.Label>
          </Switch.Group>
        </div>
        <div className="mt-8">
          <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle">
              <table className="w-4/5  border-spacing-0 divide-y">
                <thead className="">
                  <tr>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 w-fit whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-bold text-gray-900 backdrop-blur backdrop-filter sm:pl-0"
                    >
                      Název
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 whitespace-nowrap px-2 py-3.5 text-left text-sm font-bold text-gray-900 backdrop-blur backdrop-filter"
                    >
                      Linka
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 whitespace-nowrap px-2 py-3.5 text-left text-sm font-bold text-gray-900 backdrop-blur backdrop-filter"
                    >
                      Formát
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 whitespace-nowrap px-2 py-3.5 text-left text-sm font-bold text-gray-900 backdrop-blur backdrop-filter"
                    >
                      Průměr
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 whitespace-nowrap px-2 py-3.5 text-left text-sm font-bold text-gray-900 backdrop-blur backdrop-filter"
                    >
                      Délka
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 whitespace-nowrap px-2 py-3.5 text-left text-sm font-bold text-gray-900 backdrop-blur backdrop-filter"
                    >
                      Šířka
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 whitespace-nowrap px-2 py-3.5 text-left text-sm font-bold text-gray-900 backdrop-blur backdrop-filter"
                    >
                      Výška
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 whitespace-nowrap px-2  py-3.5 text-left text-sm font-bold text-gray-900 backdrop-blur backdrop-filter"
                    >
                      Fólie
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 w-fit whitespace-nowrap px-2 py-3.5 text-left text-sm font-bold text-gray-900 backdrop-blur backdrop-filter"
                    >
                      Vyrobce
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 whitespace-nowrap  py-3.5 pl-3 pr-4 backdrop-blur backdrop-filter sm:pr-0"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {/*Filtr funkce, stačí dosadit místo **/}

                  {transactions
                    .filter((transaction) => {
                      return search.toLowerCase() === ""
                        ? transaction
                        : transaction.material.toLowerCase().includes(search);
                    })
                    .filter((transaction) => {
                      return enabled === false
                        ? transaction
                        : transaction.balicilinka.includes("**") ||
                            transaction.balicilinka.includes("***") ||
                            transaction.balicilinka.includes("****");
                    })
                    .filter((transaction) => {
                      return enabled2 === false
                        ? transaction
                        : transaction.balicilinka.includes("*") ||
                            transaction.balicilinka.includes("**") ||
                            transaction.balicilinka.includes("***");
                    })
                    .filter((transaction) => {
                      return enabled3 === false
                        ? transaction
                        : transaction.balicilinka.includes("*") ||
                            transaction.balicilinka.includes("**") ||
                            transaction.balicilinka.includes("***");
                    })
                    .filter((transaction) => {
                      return enabled4 === false
                        ? transaction
                        : transaction.balicilinka.includes("***");
                    })
                    .map((transaction) => (
                      <tr key={transaction.id}>
                        <td className="relative w-fit whitespace-nowrap py-2 pl-3 pr-4 text-left text-sm font-medium sm:pr-0">
                          <Link
                            href={transaction.odkaz}
                            className="rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                          >
                            {transaction.material}
                          </Link>
                        </td>
                        <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
                          {transaction.balicilinka}
                        </td>
                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">
                          {transaction.format}
                        </td>
                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                          {transaction.prumer}
                        </td>
                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                          {transaction.delka}
                        </td>
                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                          {transaction.sirka}
                        </td>
                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                          {transaction.vyska}
                        </td>
                        <td className="w-fit whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                          {transaction.pvc}
                        </td>
                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                          {transaction.vyrobce}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
