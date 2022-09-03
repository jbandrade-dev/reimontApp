import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <section className="bg-blue-500 px-4">
      <footer>
        <div className="flex justify-center p-8">
          <Image
            src="/deputado-federal-reimont-1333.png"
            alt="Logo"
            width={490}
            height={80}
            loading="lazy"
          />
        </div>

        <ul className="flex justify-center text-sm text-white gap-4">
          <li className="flex hover:underline hover:text-yellow-500">
            <Link href="https://lula.com.br/">
              <a target="_blank">Lula 13</a>
            </Link>
          </li>
            <span>|</span>

          <li className="flex hover:underline hover:text-yellow-500">
            <Link href="https://andresenador133.com.br/">
              <a target="_blank">André Ceciliano 133</a>
            </Link>
          </li>
            <span>|</span>
          <li className="flex gap-4 hover:underline hover:text-yellow-500">
            <Link href="https://www.marcelofreixo.com.br/">
              <a target="_blank">Freixo 40</a>
            </Link>
          </li>
        </ul>

        <div className="flex gap-2 justify-center text-sm pt-2 text-white">
          <span>Federação Brasil da Esperança:</span>
          <ul className="flex gap-4">
            <li className="flex gap-4 hover:underline hover:text-yellow-500">
              <Link href="https://pt.org.br/">
                <a target="_blank">PT</a>
              </Link>
            </li>
              <span>|</span>
            <li className="flex gap-4 hover:underline hover:text-yellow-500">
              <Link href="https://pcdob.org.br/">
                <a target="_blank">PCdoB</a>
              </Link>
            </li>
              <span>|</span>
            <li className="flex gap-4 hover:underline hover:text-yellow-500">
              <Link href="https://pv.org.br/">
                <a target="_blank">PV</a>
              </Link>
            </li>
          </ul>
        </div>

        <span className="flex justify-center text-[0.5rem] pt-4 pb-2 text-white"> CNPJ 47.508.785/0001-71</span>
      </footer>
    </section>
  );
}
