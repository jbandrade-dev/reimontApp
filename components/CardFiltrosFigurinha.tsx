import Image from "next/image";
import Link from "next/link";
import { Download } from "phosphor-react";

interface CardFiltrosProps {
  downloadCard: {
    category: string;
    fileUrl: string;
    filename: string;
    fileImage: string;
    width: number;
    height: number;
  };
}

export function CardFiltrosFigurinha({ downloadCard } : CardFiltrosProps){
  return(
    <div>
          <article>
            <div className="shadow-md bg-white">
              <div className="relative ">
                <Image
                  src={downloadCard.fileImage}
                  alt="Figurinha para download"
                  width={downloadCard.width}
                  height={downloadCard.height}
                  layout="responsive"
                  priority
                />
              </div>
            </div>
          </article>

          <Link href={downloadCard.fileUrl}>
            <a target="_blank" className="flex gap-2 px-3 py-1.5 bg-white text-black-500 hover:text-red-500 hover:underline">
              <Download size={20} />
              link para o app
            </a>
          </Link>
        </div>
  )
}