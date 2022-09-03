import { Listbox, Transition } from "@headlessui/react";
import {
  CaretDown,

  CheckCircle,

  NumberCircleOne,
} from "phosphor-react";
import { Fragment, useEffect, useState } from "react";
import { CardDownload } from "../components/CardDownload";
import { Container } from "../components/Container";
import { NavLine } from "../components/NavLine";

const CardsDownload = [
  {
    category: "Capa",
    fileUrl: "/capa-facebook-2022.png",
    filename: "capa-facebook-2022.png",
    fileImage: "",
    width: 820,
    height: 360,
  
  },
  {
    category: "Cédula",
    fileUrl: "/colinha.png",
    filename: "colinha.png",
    fileImage: "",
    width: 1080,
    height: 1350,
  
  },
  {
    category: "Cards",
    fileUrl: "/compromissos.png",
    filename: "compromissos.png",
    fileImage: "",
    width: 600,
    height: 600,
  
  },
  {
    category: "Vídeos",
    fileUrl: "https://drive.google.com/u/0/uc?id=16vU0uAX5JX8WO_gPzdVtU0WRoYJ8ybg7&export=download",
    filename: "Caminhada.mp4",
    fileImage: "/caminhada.jpg",
    width: 827,
    height: 1459,
  
  },
  {
    category: "Figurinhas",
    fileUrl: "",
    filename: "",
    fileImage: "",
    width: 0,
    height: 0,
  
  },
  {
    category: "Filtros",
    fileUrl: "",
    filename: "",
    fileImage: "",
    width: 0,
    height: 0,
  
  },
  {
    category: "Vídeos",
    fileUrl: "https://drive.google.com/u/0/uc?id=1bIgwRQZt9P0n37jd4nZbAmCST5DQYOVC&export=download",
    filename: "Campanha-reimont-01-2022.mp4",
    fileImage: "/escada.jpg",
    width: 380,
    height: 676,
  
  }
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
  const [selected, setSelected] = useState(CardsDownload[0].category);
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    setData(CardsDownload);
  }, []);

  return (
    <Container>
      <section className="wrapper px-4 mt-8 min-h-[calc(100vh-360px)]">
        <NavLine text="Como ajudar na campanha" href=""/>

        <main className="mb-16 mob:flex mob:flex-col pc:grid pc:grid-cols-3 gap-4">
          <aside className="flex flex-col gap-2 text-lg rounded-lg px-4 pt-4 text-black-500 bg-white shadow-lg pb-6">
            <h3 className="font-bold text-2xl uppercase text-red-500">
              Conteúdos para baixar
            </h3>

            <p className="ml-0.5">
              Ajude a ampliar a nossa voz! Selecione o tipo de material que você
              quer, baixe e compartilhe com as pessoas.
            </p>

            <div className="flex flex-col text-black-500 pl-1 pt-2 smartphone:justify-end tablet:justify-end desktop:justify-start ">
              <div className="grid gap-2">
                <label className="flex gap-1 items-center" htmlFor="">
                  <NumberCircleOne size={22} />
                  Escolha a peça:
                </label>

                <div className="z-40">
                  <div className="w-full">
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
                            {CardsDownload.map(
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
                                  value={cardDownload.category}
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
                                        {cardDownload.category}
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
