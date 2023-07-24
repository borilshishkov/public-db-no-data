import Link from "next/link";

const people = [
  {
    name: "Test 100mg",
    format: "test",
    linka: "testest",
    datum: "05/2023",
    link: "/poslednitest1",
  },
  {
    name: "Test 50g",
    format: "test",
    linka: "testest",
    datum: "23.03.2023",
  },
];

export default function PosledniFD() {
  return (
    <div className="my-8 px-4  sm:px-6">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Testy formátových dílů
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Seznam nejnovějších formátových sad
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-emerald-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
          >
            Přidat Test
          </button>
        </div>
      </div>
      <div className=" mt-8 ">
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-4"
              >
                Název
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                Velikost Formátu
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
              >
                ADJ Linka
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Datum Testu
              </th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                <span className="sr-only">Více</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {people.map((person) => (
              <tr key={person.linka}>
                <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-4">
                  {person.name}
                  <dl className="font-normal lg:hidden">
                    <dt className="sr-only">format</dt>
                    <dd className="mt-1 truncate text-gray-700">
                      {person.format}
                    </dd>
                    <dt className="sr-only sm:hidden">linka</dt>
                    <dd className="mt-1 truncate text-gray-500 sm:hidden">
                      {person.linka}
                    </dd>
                  </dl>
                </td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
                  {person.format}
                </td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
                  {person.linka}
                </td>
                <td className="px-3 py-4 text-sm text-gray-500">
                  {person.datum}
                </td>
                <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                  <a
                    href={person.link}
                    className="text-emerald-600 hover:text-emerald-900"
                  >
                    Více info<span className="sr-only">, {person.name}</span>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
