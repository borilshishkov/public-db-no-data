import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { apiCreateFeedback, apiPatchFeedback } from "@/api-requests";
import { twMerge } from "tailwind-merge";
import { PhotoIcon } from "@heroicons/react/24/solid";
import useFeedbackStore from "@/store";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";

interface FeedbackComponentProps {
  id: Object;
}

interface Feedback {
  id: string;
  typ: string;
  createdAt: string;
  kratkyPopis: string;
  linka: string;
  castLinky: string;
  dlouhyPopis: string;
  // Add other properties of the feedback object as needed
}

const EditItemComponent: React.FC<FeedbackComponentProps> = ({ id }) => {
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [typ, setTyp] = useState(feedback?.typ);
  const [kratkyPopis, setKratkyPopis] = useState(feedback?.kratkyPopis);
  const [dlouhyPopis, setDlouhyPopis] = useState(feedback?.dlouhyPopis);
  const [linka, setLinka] = useState(feedback?.linka);
  const [castLinky, setCastLinky] = useState(feedback?.castLinky);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [reseni, setReseni] = useState("");

  const store = useFeedbackStore();
  const response = "";

  function goBack() {
    router.back();
    console.log("Im trying to go back");
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/feedbacks/${id}`);
        setFeedback(response.data.data.feedback);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  if (!feedback) {
    return <div>Nic se zadaným ID nenalezeno.</div>;
  }
  const handleInputTyp = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTyp(value);
  };

  const handleInputKratkyPopis = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setKratkyPopis(value);
  };

  const handleInputLinka = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setLinka(value);
  };

  const handleInputCastLinky = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCastLinky(value);
  };

  const handleInputDlouhyPopis = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const value = event.target.value;
    setDlouhyPopis(value);
  };

  if (!isLoading) {
  }

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    store.setPageLoading(true);

    const feedbackData = JSON.stringify({
      typ: typ,
      kratkyPopis: kratkyPopis,
      linka: linka,
      castLinky: castLinky,
      dlouhyPopis: dlouhyPopis,
    });

    const feedbackId = feedback.id;

    try {
      const feedback = await apiPatchFeedback(feedbackId, feedbackData);
      store.addFeedback(feedback);
      store.setPageLoading(false);
      toast.info("Feedback added successfully");
      setIsOpen(true);
      router.push("/katalog-zavad");
    } catch (error: any) {
      toast.error(error.toString());
      console.error(error);
      store.setPageLoading(false);
    }
  };

  return (
    <div>
      {/* Modal Start */}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Úspěšně uloženo!!
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Prosím počkejte, za chvíli budete přesměrování na katalog
                      závad.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Zavřít
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      {/* Modal End */}

      <div className="space-y-10 divide-y divide-gray-900/10">
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
          <div className="px-4 sm:px-0">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Katalog Závad
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Zde popište závadu, případně její řešení.
            </p>
          </div>

          <form
            onSubmit={onSubmit}
            className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2"
          >
            <div className="px-4 py-6 sm:p-8">
              <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="website"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Krátké označení závady
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        defaultValue={feedback.kratkyPopis}
                        onChange={handleInputKratkyPopis}
                        type="text"
                        name="website"
                        id="website"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="např. IMA7 šlape"
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label
                    htmlFor="website"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Označení Linky
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        defaultValue={feedback.linka}
                        onChange={handleInputLinka}
                        type="text"
                        name="website"
                        id="website"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="např. IMA1, UHL1"
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label
                    htmlFor="website"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Typ Linky
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        defaultValue={feedback.typ}
                        onChange={handleInputTyp}
                        type="text"
                        name="website"
                        id="website"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="např. C80, UHL"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="website"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Část Stroje
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        defaultValue={feedback.castLinky}
                        onChange={handleInputCastLinky}
                        type="text"
                        name="website"
                        id="website"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Blistrovačka, Kartonka,.."
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Popis Závady
                  </label>
                  <div className="mt-2">
                    <textarea
                      defaultValue={feedback.dlouhyPopis}
                      onChange={handleInputDlouhyPopis}
                      id="about"
                      name="about"
                      rows={3}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    Popište závadu a její případné řešení.
                  </p>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="cover-photo"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Fotodokumentace k závadě či opravě
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                      <PhotoIcon
                        className="mx-auto h-12 w-12 text-gray-300"
                        aria-hidden="true"
                      />
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Nahrajte soubor</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">nebo přetáhněte do okna</p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        PNG, jpg, GIF do max. 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
              <button
                onClick={goBack}
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Zrušit
              </button>
              <button
                disabled={store.page_loading}
                type="submit"
                className={twMerge(
                  "rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                  store.page_loading
                    ? "bg-[#ccc] text-gray-800"
                    : "bg-indigo-600 text-white"
                )}
              >
                Uložit
              </button>
            </div>
          </form>
          <Image
            src={`/uploads/${feedback.id}.jpg`}
            width={500}
            height={500}
            alt="uploaded image"
          />
        </div>
      </div>
    </div>
  );
};

export default EditItemComponent;
