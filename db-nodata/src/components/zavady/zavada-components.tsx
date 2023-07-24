"use client";

import useFeedbackStore from "@/store";
import ZavadaForm from "@/components/zavady/zavada-form";
import ZavadaList from "@/components/zavady/zavada-list";

export default function ZavadaComponents() {
  const store = useFeedbackStore();
  return (
    <>
      <div className="">
        <main className="">
          <ZavadaForm />
          <ZavadaList />
        </main>
      </div>
      {store.page_loading && (
        <div
          className="text-warning fixed left-5 top-5 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-yellow-400 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Načítání...
          </span>
        </div>
      )}
    </>
  );
}
