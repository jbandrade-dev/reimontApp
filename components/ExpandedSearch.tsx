import { Transition } from "@headlessui/react";
import { ArrowBendUpLeft, MagnifyingGlass, X } from "phosphor-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Share } from "./Share";

interface Data {
  id: number;
  slug: string;
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

  return (
    <section>
      <button className={isShowing ? "" : " pt-1 text-white hover:text-yellow-500"}>
        <MagnifyingGlass
          size={37}
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
        <div className="wrapper">
          <form className="relative pc:px-4 text-white">
            <input
              className="w-full px-20 text-black-500 py-4 focus:ring-none focus:outline-none placeholder:text-gray-300"
              type="text"
              placeholder="Digite aqui a sua busca ..."
              onChange={(e) => setQuery(e.target.value.toLowerCase())}
            />
            <div
              className="absolute top-3.5 left-7 text-gray-300"
              onClick={() => setIsShowing((isShowing) => !isShowing)}
            >
              <ArrowBendUpLeft size={22} />
            </div>
          </form>
          <main className=" px-4 my-8">
            <ul className="grid pc:grid-cols-3 gap-4">
              {data
                .filter((card) => card.text.toLowerCase().indexOf(query) > -1)
                .map((searchedCard) => (
                  <li key={searchedCard.page} className="relative">
                    <div
                      onClick={() => setIsShowing((isShowing) => !isShowing)}
                    >
                      <Link href={searchedCard.href}>
                        <a className="flex min-h-[10.5rem] overflow-hidden border border-transparent rounded-md shadow-lg bg-white hover:border-red-500 ">
                          <div className="relative p-4 text-red-500">
                            <h3 className="text-xl">{searchedCard.page}</h3>
                            <p className="mt-2 mb-4 text-sm">
                              {searchedCard.title}
                            </p>
                          </div>
                        </a>
                      </Link>
                      <div className="absolute bottom-3 left-4 flex gap-2 items-center text-xs text-red-500">
                        <span>compartilhe:</span>
                        <Share size="12" slug={searchedCard.slug} tailwind="flex w-full gap-0.5" weight="regular" />
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </main>
        </div>
      </Transition>
    </section>
  );
}
