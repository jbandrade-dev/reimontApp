import Image from "next/image";
import Link from "next/link";
import { Download } from "phosphor-react";
import useDownloader from "react-use-downloader";

interface DownloadCardProps {
  downloadCard: {
    category: string;
    fileUrl: string;
    filename: string;
    fileImage: string;
    width: number;
    height: number;
  };
}

export function CardDownload({ downloadCard }: DownloadCardProps) {
  const { download } = useDownloader();
  console.log(downloadCard.width)
  return (
    <li className="shadow-md bg-white rounded-md overflow-hidden">
      {downloadCard.category === "Vídeos" ? (
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
      ) : (
        <li>
          <article>
            <div className="bg-white">
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
            onClick={() =>
              download(downloadCard.fileUrl, downloadCard.filename)
            }
          >
            <Download size={20} />
            baixar
          </button>
        </li>
      )}
    </li>
  );
}
