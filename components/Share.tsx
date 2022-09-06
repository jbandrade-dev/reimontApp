import Link from "next/link";
import {
  FacebookLogo,
  IconWeight,
  TelegramLogo,
  TwitterLogo,
  WhatsappLogo,
} from "phosphor-react";

interface SocialLinksProps {
  size: string;
  tailwind: string;
  weight: IconWeight;
  slug: string;
}

export function Share({ size, tailwind, weight, slug }: SocialLinksProps) {
  return (
    <ul className={tailwind}>
      <li className="socialLinks">
        <Link
          href={`https://api.whatsapp.com/send?text=https://www.reimont1333.com.br/propostas/${slug}`}
        >
          <a target="_blank" aria-label="Link para compartilhar no telegram">
            <WhatsappLogo size={size} weight={weight} />
          </a>
        </Link>
      </li>
      <li className="socialLinks">
        <Link
          href={`https://t.me/share/url?url={https://api.whatsapp.com/send?text=https://www.reimont1333.com.br/propostas/${slug}}`}
        >
          <a target="_blank" aria-label="Link para compartilhar no telegram">
            <TelegramLogo size={size} weight={weight} />
          </a>
        </Link>
      </li>
      <li className="socialLinks">
        <Link
          href={`https://www.facebook.com/sharer/sharer.php?u=https://www.reimont1333.com.br/propostas/${slug}`}
        >
          <a target="_blank" aria-label="Link para compartilhar no facebook">
            <FacebookLogo size={size} weight={weight} />
          </a>
        </Link>
      </li>
      <li className="socialLinks">
        <Link
          href={`https://twitter.com/intent/tweet?url="+https://www.reimont1333.com.br/propostas/${slug}+"`}
        >
          <a target="_blank" aria-label="Link para compartilhar no telegram">
            <TwitterLogo size={size} weight={weight} />
          </a>
        </Link>
      </li>
    </ul>
  );
}
