import Image from "next/image";
import Link from "next/link";
import { Download } from "phosphor-react";

interface CardVideoProps {
  downloadCard: {
    category: string;
    fileUrl: string;
    filename: string;
    fileImage: string;
    width: number;
    height: number;
  };
}

export function CardVideo({ downloadCard } : CardVideoProps){
  return(
    <article>
                  <div>
                    <div className="w-full ">
                      <Image
                        src={downloadCard.fileImage}
                        alt="Vídeo para download"
                        width={downloadCard.width}
                        height={downloadCard.height}
                        layout="responsive"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Link href={downloadCard.fileUrl}>
                      <a className="flex gap-2 px-3 py-1.5 bg-white text-black-500 hover:text-red-500 hover:underline">
                        <Download size={20} />
                        baixar
                      </a>
                    </Link>
                  </div>
                </article>
  )}