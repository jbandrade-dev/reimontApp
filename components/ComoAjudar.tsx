import Image from "next/image";
import Link from "next/link";

const formasDeAjudar = [
  { name: "financiamento coletivo", href: "https://reimont.financie.de", icon:"/icones-financiamento.svg" },
  { name: "compartilhe nosso material", href: "/compartilhe-nosso-material",icon:"/icones-compartilhar.svg" },
  { name: "reúna seus amigos", href: "/reuna-seus-amigos", icon:"/icones-amigos.svg" },
  { name: "outras formas de ajudar", href: "/outras-formas-de-ajudar", icon:"/icones-ajuda.svg" },
];

export function ComoAjudar() {
  return (
    <section className="wrapper mb-16 mob:px-4 pc:px-0" id="comoAjudar">
      <h2 className="sectionTitle text-red-500">Como ajudar na campanha</h2>

      <div className="grid items-center gap-2 pc:grid-cols-2">
        {formasDeAjudar.map((ajuda) => {
          return (
            <Link key={ajuda.name} href={ajuda.href}>
              <a target="_blank" className="itemSupport">
                <div>
                  <Image
                    src={ajuda.icon}
                    alt=""
                    width={45}
                    height={45}
                    layout="fixed"
                    loading="lazy"
                  />
                </div>

                <h3 className="sectionSubTitle">{ajuda.name}</h3>
              </a>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
