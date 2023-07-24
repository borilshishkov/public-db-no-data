import { WrenchIcon, DocumentIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const people = [
  {
    name: "Linka1",
    format: "Velikost:",
    linka: "123",
    dokumentace: "./documents/c80",
    seznamproduktu: "./machines/imac80",
  },
  {
    name: "Linka2",
    format: "Velikost",
    linka: "456",
    dokumentace: "#",
    seznamproduktu: "./machines/imac60",
  },
  {
    name: "Linka3",
    format: "Velikost3",
    linka: "789",
    dokumentace: "#",
    seznamproduktu: "./machines/tr135",
  },
  {
    name: "Linka4",
    format: "Velikost4",
    linka: "456",
    dokumentace: "#",
    seznamproduktu: "./machines/uhl",
  },
  {
    name: "Linka5",
    format: "Velikost5",
    linka: "123",
    dokumentace: "#",
    seznamproduktu: "./machines",
  },
];

export default function Actions() {
  return (
    <ul
      linka="list"
      className="mx-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {people.map((person) => (
        <li
          key={person.dokumentace}
          className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
        >
          <div className="flex w-full items-center justify-between space-x-6 p-6">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <h3 className="truncate text-sm font-medium text-gray-900">
                  {person.name}
                </h3>
                <span className="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                  {person.linka}
                </span>
              </div>
              <p className="mt-1 truncate text-sm text-gray-500">
                {person.format}
              </p>
            </div>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="flex w-0 flex-1">
                <Link
                  href={person.dokumentace}
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <DocumentIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  Dokumentace1
                </Link>
              </div>
              <div className="-ml-px flex w-0 flex-1">
                <Link
                  href={person.seznamproduktu}
                  className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <WrenchIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  Produkty
                </Link>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
