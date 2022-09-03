import Link from "next/link";

export function Menu() {
  return (
    <menu className="mob:hidden pc:flex justify-center mx-auto gap-3 uppercase text-sm">
      <ul className="inline-flex gap-8">
        <li className="itemMenu">
          <Link href="/#reimont">
            <a>Quem sou eu</a>
          </Link>
        </li>

        <li className="itemMenu">
          <Link href="/#proposals">
            <a>O Brasil que queremos</a>
          </Link>
        </li>

        <li className="itemMenu">
          <Link href="/#supports">
            <a>Ajude na campanha</a>
          </Link>
        </li>

        <li className="itemMenu">
          <Link href="/#lula">
            <a>Lula</a>
          </Link>
        </li>

        <li className="itemMenu">
          <Link href="https://reimont.financie.de">
            <a target="_blank">Doe</a>
          </Link>
        </li>
      </ul>
    </menu>
  );
}
