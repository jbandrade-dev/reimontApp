import Link from "next/link";
import {
  FacebookLogo,
  IconWeight,
  InstagramLogo,
  TwitterLogo,
  YoutubeLogo,
} from "phosphor-react";

interface SocialLinksProps {
  size: string;
  tailwind: string;
  weight: IconWeight;
}

export function SocialLinks({ size, tailwind, weight }: SocialLinksProps) {
  return (
    <ul className={tailwind}>
      <li className="socialLinks">
        <Link href="www.instagram.com/reimont">
          <a target="_blank" aria-label="Link para compartilhar no instagram">
            <InstagramLogo size={size} weight={weight}/>
          </a>
        </Link>
      </li>
      <li className="socialLinks">
        <Link href="www.facebook/reimont13">
          <a target="_blank" aria-label="Link para compartilhar no facebook">
            <FacebookLogo size={size} weight={weight} />
          </a>
        </Link>
      </li>
      <li className="socialLinks">
        <Link href="www.twitter.com/reimont">
          <a target="_blank" aria-label="Link para compartilhar no telegram">
            <TwitterLogo size={size} weight={weight} />
          </a>
        </Link>
      </li>
      <li className="socialLinks">
        <Link href="www.youtube.com/reimont">
          <a target="_blank" aria-label="Link para compartilhar no twitter">
            <YoutubeLogo size={size} weight={weight} />
          </a>
        </Link>
      </li>
    </ul>
  );
}
