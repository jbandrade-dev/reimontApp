import Image from "next/image";
import Link from "next/link";
import { ExpandedMenu } from "./ExpandedMenu";
import { ExpandedSearch } from "./ExpandedSearch";
import { Menu } from "./Menu";

export function NavBar() {
  return (
    <section className="bg-blue-500 px-4 py-2">
      <nav className="flex wrapper justify-between items-center">
        <Link href="/#home">
          <a className="pt-1">
            <Image src="/estrela-pt.png" alt="Logo" width={53} height={49} priority />
          </a>
        </Link>

        <Menu />

        <div className="flex items-center">
          <ExpandedSearch />
          <ExpandedMenu />
        </div>
      </nav>
    </section>
  );
}
