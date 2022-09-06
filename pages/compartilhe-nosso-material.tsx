import { Listbox, Transition } from "@headlessui/react";
import { CaretDown, CheckCircle, NumberCircleOne } from "phosphor-react";
import { Fragment, useEffect, useState } from "react";
import { CardDownload } from "../components/CardDownload";
import { Container } from "../components/Container";
import { NavLine } from "../components/NavLine";


const selectOptions = [
  { name: "Capa" },
  { name: "Cédula" },
  { name: "Cards" },
  { name: "Vídeos" },
  { name: "Figurinhas" },
  { name: "Filtros" },
];

interface Data {
  category: string;
  fileUrl: string;
  filename: string;
  fileImage: string;
  width: number;
  height: number;
}
[];

export default function CompartilheNossoMaterial() {
  const [selected, setSelected] = useState("Capa");
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    fetch(`https://backend-reimont.vercel.app/downloads/cards`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <Container>
      <section className="wrapper px-4 mt-8 mb-16">
        <NavLine text="Como ajudar na campanha" href="" />

        <main className="grid pc:grid-cols-3 pc:gap-4">
          <aside className="flex flex-col mob:mb-4 tablet:mb-4 gap-2 text-lg">
            <div className="rounded-lg p-4 text-black-500 bg-white shadow-lg">
              <h3 className="font-bold text-2xl uppercase text-red-500">
                Conteúdos para baixar
              </h3>

              <p className="ml-0.5">
                Ajude a ampliar a nossa voz! Selecione o tipo de material que
                você quer, baixe e compartilhe com as pessoas.
              </p>

              <div className="flex flex-col text-black-500 pl-1 pt-2 smartphone:justify-end tablet:justify-end desktop:justify-start ">
                <div className="grid gap-2">
                  <label className="flex gap-1 items-center" htmlFor="">
                    <NumberCircleOne size={22} />
                    Escolha a peça:
                  </label>

                  <div className="z-40">
                    <div className="">
                      <Listbox value={selected} onChange={setSelected}>
                        <div className="relative mt-1">
                          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 mob:text-sm">
                            <span className="block truncate">{selected}</span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                              <CaretDown size={32} />
                            </span>
                          </Listbox.Button>
                          <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none mob:text-sm">
                              {selectOptions.map(
                                (cardDownload, cardDownloadIdx) => (
                                  <Listbox.Option
                                    key={cardDownloadIdx}
                                    className={({ active }) =>
                                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                        active
                                          ? "bg-amber-100 text-amber-900"
                                          : "text-gray-900"
                                      }`
                                    }
                                    value={cardDownload.name}
                                  >
                                    {({ selected }) => (
                                      <>
                                        <span
                                          className={`block truncate ${
                                            selected
                                              ? "font-medium"
                                              : "font-normal"
                                          }`}
                                        >
                                          {cardDownload.name}
                                        </span>
                                        {selected ? (
                                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                            <CheckCircle />
                                          </span>
                                        ) : null}
                                      </>
                                    )}
                                  </Listbox.Option>
                                )
                              )}
                            </Listbox.Options>
                          </Transition>
                        </div>
                      </Listbox>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <div className="col-span-2">
            <ul className="grid pc:grid-cols-3 tablet:grid-cols-2 mob:grid-cols-1 gap-4">
              {data
                .filter((card) => {
                  return card.category === selected;
                })
                .map((downloadCard) => (
                  <CardDownload
                    key={downloadCard.fileUrl}
                    downloadCard={downloadCard}
                  />
                ))}
            </ul>
          </div>
        </main>
      </section>
    </Container>
  );
}
