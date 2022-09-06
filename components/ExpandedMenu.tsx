import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { ArrowBendUpRight, List } from "phosphor-react";
import { SocialLinks } from "./SocialLinks";
import { menu } from "./Menu";

export function ExpandedMenu() {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <section className="mt-2">
      <button
        className={isShowing ? "" : "pc:hidden text-white"}
        onClick={() => setIsShowing((isShowing) => !isShowing)}
      >
        <List size={45} />
      </button>

      <Transition
        show={isShowing}
        enter="transition ease-out duration-[200ms]"
        enterFrom="opacity-100 translate-x-full"
        enterTo="opacity-100 translate-x-0"
        leave="transition ease-in duration-[150ms]"
        leaveFrom="opacity-100 translate-x-0"
        leaveTo="opacity-100 translate-x-full"
        className="fixed top-0 left-0 h-screen w-screen bg-red-500 z-50"
      >
        <div className="wrapper px-4">
          <button
            className="absolute top-4 right-5 px-4"
            onClick={() => setIsShowing((isShowing) => !isShowing)}
          >
            <ArrowBendUpRight className="text-white" size={30} weight="bold" />
          </button>

          <a className="flex justify-center mt-14">
            <Image
              src="/deputado-federal-reimont-1333.png"
              alt="Logo"
              width={380}
              height={70}
            />
          </a>

          <menu className="grid text-center mt-8">
            <ul className="flex flex-col text-white px-12">
              {menu.map((item) => {
                return (
                  <li key={item.name} className="itemExpandedMenu">
                    <Link href="/#reimont">
                      <a
                        onClick={() => setIsShowing((isShowing) => !isShowing)}
                      >
                        {item.name}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <SocialLinks
              size="60"
              weight="thin"
              tailwind="flex justify-center p-8 gap-4 text-white"
            />
          </menu>
        </div>
      </Transition>
    </section>
  );
}
