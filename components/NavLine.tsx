import Link from "next/link";
import { CaretRight, House } from "phosphor-react";


interface NavlineProps {
  text: string
  href: string;
}

;
export function NavLine({ text, href }: NavlineProps) {
  return (
    <nav className="mb-2 mt-6 text-black-500">
      <ul className="inline-flex mob:text-xs">
        <li>
          <Link href="/#navbar">
            <div className="inline-flex gap-1 mr-1 items-center cursor-pointer hover:underline">
              <House size={12} weight="bold" />
              Home
            </div>
          </Link>
        </li>

        <li>
          <div className="inline-flex gap-1 mr-1 items-center">
            <CaretRight size={12} />
            <Link
              href={href}
              className="flex gap-2 items-center cursor-pointer hover:underline"
            >
              <a className="hover:underline">{text}</a>
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
}
