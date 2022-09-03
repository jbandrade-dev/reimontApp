import Image from "next/image";
import Link from "next/link";
import { ArrowSquareOut } from "phosphor-react";

interface PropostaProps {
  proposta: {
    id: number;
    title: string;
    img: string;
    href: string;
    alt: string;
    icon: string;
  };
}

export function Proposta({ proposta }: PropostaProps) {
  return (
    <li>
      <Link href={proposta.href}>
        <a className="relative p-4 flex flex-col min-h-[10rem] border border-l-4 border-l-transparent shadow rounded-md bg-white text-red-500 cursor-pointer hover:bg-gray-100 hover:border-l-blue-500 transition-colors">
          <div>
            <Image
              src={proposta.icon}
              alt={proposta.alt}
              width={20}
              height={20}
              loading="lazy"
            />
          </div>

          <div>
            <h3 className="sectionSubTitle">{proposta.title}</h3>
            <span className="absolute flex gap-1 items-center bottom-3 text-xs hover:underline">
              saiba mais
              <ArrowSquareOut size={12} />
            </span>
          </div>
        </a>
      </Link>
    </li>
  );
}
