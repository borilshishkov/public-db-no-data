"use client";
import Image from "next/image";

export default function Knihavzor({ obj }) {
  return (
    <>
      <div className="flow-root lg:ml-8 lg:flex">
        <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
          <div className="-mx-2 overflow-x-auto sm:-mx-6 lg:mx-8">
            <h2 className="text-base font-semibold leading-7 text-emerald-600">
              DummyData Formátová Kniha
            </h2>
            <p className="pb-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {obj.pripravek}
            </p>
            <div className="inline-block py-2 align-top">
              <table className=" divide-y divide-gray-300 border-2">
                <thead>
                  <tr className="divide-x divide-gray-200 bg-white">
                    <th
                      scope="col"
                      className="py-3.5 pl-2 pr-2 text-left text-base font-semibold text-gray-900 sm:pl-2"
                    >
                      Název Přípravku
                    </th>
                    <th
                      colSpan="5"
                      cscope="col"
                      className="px-2 py-3.5 text-left text-base font-semibold text-gray-900"
                    >
                      {" "}
                      {obj.pripravek}{" "}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr className="divide-x divide-gray-200">
                    <td className="whitespace-nowrap py-2 pl-2 pr-2 text-sm font-medium text-gray-900 sm:pl-2">
                      Linka
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.linka1}
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.linka2}
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.linka3}
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.linka4}
                    </td>
                    <td className="whitespace-nowrap py-2 pl-2 pr-2 text-sm font-medium text-gray-600 sm:pr-0">
                      {obj.linka5}
                    </td>
                  </tr>
                  <tr className="divide-x divide-gray-200">
                    <td
                      rowspan="2"
                      className="divide-x whitespace-nowrap py-2 pl-2 pr-2 text-sm font-medium text-gray-900 sm:pl-2"
                    >
                      Název Form. Dílu
                    </td>
                    <td
                      colSpan="5"
                      className="divide-x whitespace-nowrap py-2 pl-2 pr-2 text-center text-sm font-medium text-gray-900 sm:pl-2"
                    >
                      Počet Tablet
                    </td>
                  </tr>
                  <tr className="divide-x divide-gray-200">
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.tablet1} tbl.
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.tablet2} tbl.
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.tablet3} tbl.
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.tablet4} tbl.
                    </td>
                    <td className="whitespace-nowrap py-2 pl-2 pr-2 text-sm font-medium text-gray-600 sm:pr-0">
                      {obj.tablet5} tbl.
                    </td>
                  </tr>
                  <tr className="divide-x divide-gray-200">
                    <td className="whitespace-nowrap py-2 pl-2 pr-2 text-sm font-medium text-gray-900 sm:pl-2">
                      Tvarovačka Horní
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.tvarovackaHorni1}
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.tvarovackaHorni2}
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.tvarovackaHorni3}
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.tvarovackaHorni4}
                    </td>
                    <td className="whitespace-nowrap py-2 pl-2 pr-2 text-sm font-medium text-gray-600 sm:pr-0">
                      {obj.tvarovackaHorni5}
                    </td>
                  </tr>
                  <tr className="divide-x divide-gray-200">
                    <td className="whitespace-nowrap py-2 pl-2 pr-2 text-sm font-medium text-gray-900 sm:pl-2">
                      Tvarovačka Spodní
                    </td>
                    <td className="whitespace-nowrap py-2 pl-2 pr-2 text-sm font-medium text-gray-600 sm:pl-2">
                      {obj.tvarovackaHorni1}
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.tvarovackaHorni2}
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.tvarovackaHorni3}
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.tvarovackaHorni4}
                    </td>
                    <td className="whitespace-nowrap py-2 pl-2 pr-2 text-sm font-medium text-gray-600 sm:pr-0">
                      {obj.tvarovackaHorni5}
                    </td>
                  </tr>
                  <tr className="divide-x divide-gray-200">
                    <td className="whitespace-nowrap py-2 pl-2 pr-2 text-sm font-medium text-gray-900 sm:pl-2">
                      Dráha Dlouhá
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.drahaDlouha1}
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.drahaDlouha2}
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.drahaDlouha3}
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.drahaDlouha4}
                    </td>
                    <td className="whitespace-nowrap py-2 pl-2 pr-2 text-sm font-medium text-gray-600 sm:pr-0">
                      {obj.drahaDlouha5}
                    </td>
                  </tr>
                  <tr className="divide-x divide-gray-200">
                    <td className="whitespace-nowrap py-2 pl-2 pr-2 text-sm font-medium text-gray-900 sm:pl-2">
                      Dráha Krátká
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.drahaKratka1}
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.drahaKratka2}
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.drahaKratka3}
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.drahaKratka4}
                    </td>
                    <td className="whitespace-nowrap py-2 pl-2 pr-2 text-sm font-medium text-gray-600 sm:pr-0">
                      {obj.drahaKratka5}
                    </td>
                  </tr>
                  <tr className="divide-x divide-gray-200">
                    <td className="whitespace-nowrap py-2 pl-2 pr-2 text-sm font-medium text-gray-900 sm:pl-2">
                      Zatáčka
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.zatacka1}
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.zatacka2}
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.zatacka3}
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.zatacka4}
                    </td>
                    <td className="whitespace-nowrap py-2 pl-2 pr-2 text-sm font-medium text-gray-600 sm:pr-0">
                      {obj.zatacka5}
                    </td>
                  </tr>
                  <tr className="divide-x divide-gray-200">
                    <td className="whitespace-nowrap py-2 pl-2 pr-2 text-sm font-medium text-gray-900 sm:pl-2">
                      Druh Zatáčky
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.druhZatacky1}
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.druhZatacky2}
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.druhZatacky3}
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.druhZatacky4}
                    </td>
                    <td className="whitespace-nowrap py-2 pl-2 pr-2 text-sm font-medium text-gray-600 sm:pr-0">
                      {obj.druhZatacky5}
                    </td>
                  </tr>
                  <tr className="divide-x divide-gray-200">
                    <td className="whitespace-nowrap py-2 pl-2 pr-2 text-sm font-medium text-gray-900 sm:pl-2">
                      Skluz
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.skluz1}
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.skluz2}
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.skluz3}
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.skluz4}
                    </td>
                    <td className="whitespace-nowrap py-2 pl-2 pr-2 text-sm font-medium text-gray-600 sm:pr-0">
                      {obj.skluz5}
                    </td>
                  </tr>
                  <tr className="divide-x divide-gray-200">
                    <td className="whitespace-nowrap py-2 pl-2 pr-2 text-sm font-medium text-gray-900 sm:pl-2">
                      Vedení šarže a nůžek
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.vedeni1}
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.vedeni2}
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.vedeni3}
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.vedeni4}
                    </td>
                    <td className="whitespace-nowrap py-2 pl-2 pr-2 text-sm font-medium text-gray-600 sm:pr-0">
                      {obj.vedeni5}
                    </td>
                  </tr>
                  <tr className="divide-x divide-gray-200">
                    <td className="whitespace-nowrap py-2 pl-2 pr-2 text-sm font-medium text-gray-900 sm:pl-2">
                      Svařovací Válec
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.svarovaciValec1}
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.svarovaciValec2}
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.svarovaciValec3}
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.svarovaciValec4}
                    </td>
                    <td className="whitespace-nowrap py-2 pl-2 pr-2 text-sm font-medium text-gray-600 sm:pr-0">
                      {obj.svarovaciValec5}
                    </td>
                  </tr>
                  <tr className="divide-x divide-gray-200">
                    <td className="whitespace-nowrap py-2 pl-2 pr-2 text-sm font-medium text-gray-900 sm:pl-2">
                      Válec Nůžek
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.valecNuzek1}
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.valecNuzek2}
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.valecNuzek3}
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.valecNuzek4}
                    </td>
                    <td className="whitespace-nowrap py-2 pl-2 pr-2 text-sm font-medium text-gray-600 sm:pr-0">
                      {obj.valecNuzek5}
                    </td>
                  </tr>
                  <tr className="divide-x divide-gray-200">
                    <td className="whitespace-nowrap py-2 pl-2 pr-2 text-sm font-medium text-gray-900 sm:pl-2">
                      Stohovač Blistrů
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.stohovac1}
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.stohovac2}
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.stohovac3}
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.stohovac4}
                    </td>
                    <td className="whitespace-nowrap py-2 pl-2 pr-2 text-sm font-medium text-gray-600 sm:pr-0">
                      {obj.stohovac5}
                    </td>
                  </tr>
                  <tr className="divide-x divide-gray-200">
                    <td></td>
                    <td
                      className="divide-x whitespace-nowrap py-2 pl-2 pr-2 text-center text-sm font-medium text-gray-900 sm:pl-2"
                      colSpan="5"
                    >
                      Počet Blistrů
                    </td>
                  </tr>

                  <tr className="divide-x divide-gray-200">
                    <td className="whitespace-nowrap py-2 pl-2 pr-2 text-sm font-medium text-gray-600 sm:pl-2"></td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.pocetBlistru1} bl.
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.pocetBlistru2} bl.
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.pocetBlistru3} bl.
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.pocetBlistru4} bl.
                    </td>
                    <td className="whitespace-nowrap py-2 pl-2 pr-2 text-sm font-medium text-gray-600 sm:pr-0">
                      {obj.pocetBlistru5} bl.
                    </td>
                  </tr>

                  <tr className="divide-x divide-gray-200">
                    <td className="whitespace-nowrap py-2 pl-2 pr-2 text-sm font-medium text-gray-900 sm:pl-2">
                      Zasouvač Blistrů
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.zasouvac1}
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.zasouvac2}
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.zasouvac3}
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.zasouvac4}
                    </td>
                    <td className="whitespace-nowrap py-2 pl-2 pr-2 text-sm font-medium text-gray-600 sm:pr-0">
                      {obj.zasouvac5}
                    </td>
                  </tr>
                  <tr className="divide-x divide-gray-200">
                    <td className="whitespace-nowrap py-2 pl-2 pr-2 text-sm font-medium text-gray-900 sm:pl-2">
                      Domeček Blistrů
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.domecek1}
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.domecek2}
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.domecek3}
                    </td>
                    <td className="whitespace-nowrap p-2 text-sm font-medium text-gray-600">
                      {obj.domecek4}
                    </td>
                    <td className="whitespace-nowrap py-2 pl-2 pr-2 text-sm font-medium text-gray-600 sm:pr-0">
                      {obj.domecek5}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="inline-block py-2 align-top sm:px-1 lg:px-2">
              <table className="divide-y divide-gray-300 border-2">
                <thead>
                  <tr className="divide-x divide-gray-200">
                    <th
                      colSpan="2"
                      className="bg-white py-3.5 pl-2 pr-2 text-left text-base font-semibold text-gray-900 sm:pl-2"
                    >
                      Procesní parametry
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr className="divide-x divide-gray-200">
                    <td className="whitespace-nowrap py-2 pl-2 pr-2 text-sm font-medium text-gray-900 sm:pl-2">
                      Rychlost (bl/min)
                    </td>
                    <td className="whitespace-nowrap py-2 pl-2 pr-2 text-sm text-gray-600 sm:pr-2">
                      {obj.rychlost}
                    </td>
                  </tr>
                  <tr className="divide-x divide-gray-200">
                    <td className="whitespace-nowrap py-2 pl-2 pr-2 text-sm font-medium text-gray-900 sm:pl-2">
                      Teplota pecí (°C)
                    </td>
                    <td className="whitespace-nowrap py-2 pl-2 pr-2 text-sm text-gray-600 sm:pr-2">
                      {obj.teplotaPeci}
                    </td>
                  </tr>
                  <tr className="divide-x divide-gray-200">
                    <td className="whitespace-nowrap py-2 pl-2 pr-2 text-sm font-medium text-gray-900 sm:pl-2">
                      Debl. válečky
                    </td>
                    <td className="whitespace-nowrap py-2 pl-2 pr-2 text-sm text-gray-600 sm:pr-2">
                      {obj.valecky}
                    </td>
                  </tr>
                  <tr className="divide-x divide-gray-200">
                    <td className="whitespace-nowrap py-2 pl-2 pr-2 text-sm font-medium text-gray-900 sm:pl-2">
                      Vysavač
                    </td>
                    <td className="whitespace-nowrap py-2 pl-2 pr-2 text-sm text-gray-600 sm:pr-2">
                      {obj.vysavac}
                    </td>
                  </tr>
                  <tr className="divide-x divide-gray-200">
                    <td className="whitespace-nowrap py-2 pl-2 pr-2 text-sm font-medium text-gray-900 sm:pl-2">
                      Výrobce FD
                    </td>
                    <td className="whitespace-nowrap py-2 pl-2 pr-2 text-sm text-gray-600 sm:pr-2">
                      {obj.vyrobce}
                    </td>
                  </tr>
                  <tr className="divide-x divide-gray-200">
                    <td
                      className="whitespace-nowrap py-2 pl-2 pr-2 text-sm font-medium text-gray-600 sm:pl-2"
                      colSpan="2"
                    >
                      <button
                        type="button"
                        className="rounded-md bg-emerald-600 px-5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                      >
                        Výkres
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="max-w-fit">
            <Image
              className="h-auto w-auto max-w-4xl object-scale-down"
              src={obj.vykres}
              alt="Výkres"
            />
            <Image
              className="my-4 h-auto w-auto max-w-4xl object-scale-down"
              src={obj.vykres2}
              alt="Výkres"
            />
          </div>
        </div>
      </div>
    </>
  );
}
