import Link from "next/link";

export const menu = [
  { name: "Quem sou eu", href: "/#reimont" },
  { name: "O Brasil que queremos", href: "/#propostas" },
  { name: "Ajude na campanha", href: "/#comoAjudar" },
  { name: "Lula", href: "/#lula" }
];

export function Menu() {
  return (
    <menu className="mob:hidden pc:flex justify-center mx-auto gap-3 uppercase text-sm">
      <ul className="inline-flex gap-8">
        {menu.map((item) => {
          return (
            <li key={item.name} className="itemMenu">
              <Link href={item.href}>
                <a>{item.name}</a>
              </Link>
            </li>
          );
        })}
        <li className="itemMenu">
          <Link href="https://reimont.financie.de">
            <a target="_blank">Doe</a>
          </Link>
        </li>
      </ul>
    </menu>
  );
}
