import { Transition } from "@headlessui/react";
import Link from "next/link";
import { ArrowBendUpLeft, MagnifyingGlass, X } from "phosphor-react";
import { useEffect, useState } from "react";
import { SocialLinks } from "./SocialLinks";

interface Data {
  id: number;
  page: string;
  title: string;
  img: string;
  alt: string;
  href: string;
  text: string;
}
[];

export function ExpandedSearch() {
  const [isShowing, setIsShowing] = useState(false);
  const [data, setData] = useState<Data[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(`https://backend-reimont.vercel.app/downloads/search-card`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);

  return (
    <section className="mt-1">
      <button className={isShowing ? "" : "text-white"}>
        <MagnifyingGlass
          size={35}
          onClick={() => setIsShowing((isShowing) => !isShowing)}
        />
      </button>

      <Transition
        show={isShowing}
        enter="transition ease-out duration-[200ms]"
        enterFrom="opacity-100 translate-x-full"
        enterTo="opacity-100 translate-x-0"
        leave="transition ease-in duration-[150ms]"
        leaveFrom="opacity-100 translate-x-0"
        leaveTo="opacity-100 translate-x-full"
        className="fixed top-0 left-0 h-screen w-screen overflow-auto bg-gray-100 z-50"
      >
        <form className="relative text-white">
          <input
            className="w-full shadow px-14 text-black-500 py-4 focus:ring-none focus:outline-none placeholder:text-gray-300"
            type="text"
            placeholder="Digite aqui a sua busca ..."
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
          />
          <button
            className="absolute top-3.5 left-4 text-gray-300"
            onClick={() => setIsShowing((isShowing) => !isShowing)}
          >
            <ArrowBendUpLeft size={22} />
          </button>
        </form>
        <main className="wrapper px-4 my-8">
          <ul className="grid pc:grid-cols-3 tablet:grid-cols-2 mob:grid-cols-1 gap-4">
            {data
              .filter((card) => card.text.toLowerCase().indexOf(query) > -1)
              .map((searchedCard) => (
                <li key={searchedCard.page}>
                  <Link href={searchedCard.href}>
                    <a className="flex border-l-4 border-l-transparent rounded-md shadow bg-white hover:border-red-500 ">
                      <div className="relative p-4 text-red-500">
                        <h3 className="text-xl">{searchedCard.page}</h3>
                        <p className="mt-2 mb-4 text-sm">{searchedCard.title}</p>
                        <div className="absolute bottom-3 flex gap-2 items-center text-xs">
                  
                          <SocialLinks size="12" tailwind="flex" weight="thin"/>
                        </div>
                      </div>
                    </a>
                  </Link>
                </li>
              ))}
          </ul>
        </main>
      </Transition>
    </section>
  );
}
