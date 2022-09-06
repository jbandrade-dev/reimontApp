import Image from "next/image";
import useDownloader from "react-use-downloader";
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

export function CardCapaCardCedula({ downloadCard }: CardFiltrosProps) {
  const { download } = useDownloader();
  return (
    <li>
      <article>
        <div className="">
          <div className="relative ">
            <Image
              src={downloadCard.fileUrl}
              alt="Card para download"
              width={downloadCard.width}
              height={downloadCard.height}
              layout="responsive"
              loading="lazy"
            />
          </div>
        </div>
      </article>

      <button
        className="flex gap-2 px-3 py-1.5 text-black-500 hover:text-red-500 hover:underline"
        onClick={() => download(downloadCard.fileUrl, downloadCard.filename)}
      >
        <Download size={20} />
        baixar
      </button>
    </li>
  );
}
