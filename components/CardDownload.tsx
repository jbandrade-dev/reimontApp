import { CardImage } from "./CardImage";
import { CardLink } from "./CardLink";
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
        <CardLink downloadCard={downloadCard}/>
      ) : (
        <div>
          {downloadCard.category === "Figurinhas" ? (
            <CardLink downloadCard={downloadCard}/>
          ) : (
            <li>
              {downloadCard.category === "Vídeos" ? (
                <CardVideo downloadCard={downloadCard}/>
              ) : (
                <CardImage downloadCard={downloadCard}/>
              )}
            </li>
          )}
        </div>
      )}
    </div>
  );
}
