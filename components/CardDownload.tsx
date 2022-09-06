import { CardCapaCardCedula } from "./CardCapaCardCedula";
import { CardFiltrosFigurinha } from "./CardFiltrosFigurinha";
import { CardVideo } from "./CardVideos";

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
  return (
    <div className="shadow-md bg-white rounded-md overflow-hidden">
      {downloadCard.category === "Filtros" ? (
        <CardFiltrosFigurinha downloadCard={downloadCard}/>
      ) : (
        <div>
          {downloadCard.category === "Figurinhas" ? (
            <CardFiltrosFigurinha downloadCard={downloadCard}/>
          ) : (
            <li>
              {downloadCard.category === "Vídeos" ? (
                <CardVideo downloadCard={downloadCard}/>
              ) : (
                <CardCapaCardCedula downloadCard={downloadCard}/>
              )}
            </li>
          )}
        </div>
      )}
    </div>
  );
}
