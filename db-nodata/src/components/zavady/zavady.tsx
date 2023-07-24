import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { apiFetchFeedbacks } from "@/api-requests";
import useFeedbackStore from "@/store";
import Link from "next/link";

const Zavady: React.FC = () => {
  const store = useFeedbackStore();
  const feedbackList = store.feedbacks;

  const fetchFeedbacks = async () => {
    const page = 1;
    const limit = 10;

    store.setPageLoading(true);

    try {
      const feedbacks = await apiFetchFeedbacks(page, limit);
      store.setFeedbackList(feedbacks);
    } catch (error: any) {
      toast.error(error.toString());
    }

    store.setPageLoading(false);
  };
  console.log(feedbackList);

  useEffect(() => {
    fetchFeedbacks();
    window.addEventListener("focus", fetchFeedbacks);
    return () => {
      window.removeEventListener("focus", fetchFeedbacks);
    };
  }, []);

  return (
    <div>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">
              Závady a poruchy na PLF ADJ
            </h1>
            <p className="mt-2 text-sm text-gray-700">seznam</p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <Link
              href="/katalog-zavad/pridatzavadu/"
              type="button"
              className="block rounded-md bg-emerald-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
            >
              Přidat
            </Link>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Linka
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Typ
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Část Linky
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Vytvořeno
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Popis chyby
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      ></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {feedbackList.map((feedback) => (
                      <tr key={feedback.id}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {feedback.linka}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {feedback.typ}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {feedback.castLinky}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {feedback.typ}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {feedback.kratkyPopis}
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <a
                            href={"/katalog-zavad/" + feedback.id}
                            className="text-emerald-600 hover:text-emerald-900"
                          >
                            Zobrazit
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {feedbackList.length === 0 && (
                  <div className="mx-auto flex w-full text-center">
                    <div className="ml-3 w-0 flex-1 pt-0.5">
                      <p className="text-sm font-medium text-gray-900">
                        Seznam závad se právě načítá z databáze..
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Zavady;
