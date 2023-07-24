"use client";

import Link from "next/link";
import { useState } from "react";
import productdata from "./productdata";

export default function Products() {
  const [search, setSearch] = useState("");
  const transactions = productdata;

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">
              Seznam test
            </h1>
          </div>
          <div className="sm:flex-auto">
            <button
              type="button"
              className="rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
            >
              Dokumentace k test
            </button>
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
                ⌘K
              </kbd>
            </div>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="sticky">
                  <tr>
                    <th
                      scope="col"
                      className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Název
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Linka
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Formát
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Průměr
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Délka
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Šířka
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Výška
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Fólie
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Vyrobce
                    </th>
                    <th
                      scope="col"
                      className="relative whitespace-nowrap py-3.5 pl-3 pr-4 sm:pr-0"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {transactions
                    .filter((transaction) => {
                      return (
                        transaction.balicilinka.includes("*") ||
                        transaction.balicilinka.includes("**") ||
                        transaction.balicilinka.includes("***")
                      );
                    })
                    .filter((transaction) => {
                      return search.toLowerCase() === ""
                        ? transaction
                        : transaction.material.toLowerCase().includes(search);
                    })
                    .map((transaction) => (
                      <tr key={transaction.id}>
                        <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-left text-sm font-medium sm:pr-0">
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
                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
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
