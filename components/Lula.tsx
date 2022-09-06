import Image from "next/image";
import Link from "next/link";

export function Lula() {
  return (
    <section id="lula">
      <div className="wrapper pb-6 mb-16 bg-red-500 px-4 rounded-md">
        <h2 className="sectionTitle text-white">O AMOR VAI VENCER O ÓDIO</h2>
        <Link href="https://lula.com.br/">
          <a target="_blank">
            <div className="grid rounded-md overflow-hidden shadow-lg bg-white border-b-[6px] border-transparent hover:border-yellow-500 w-full transition-colors">
              <div className="relative w-full">
                <Image
                  src="/lula.jpg"
                  alt="foto"
                  width={1168}
                  height={730}
                  layout="responsive"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col justify-between text-red-500 ">
                <strong className="pc:text-2xl mob:text-xl tablet:text-xl py-2 uppercase">
                  O nosso país era melhor e mais feliz com Lula
                </strong>
                <div className="mt-4 pc:text-xl mob:text-lg mb-6">
                  <p className="mb-4">
                    Vocês lembram quando ele era o nosso presidente? Saímos do
                    Mapa da Fome. A saúde, a educação e a ciência eram
                    prioridades. Foram criados mais de 15 milhões de empregos
                    com carteira assinada. A diversidade, as regiões e o meio
                    ambiente eram respeitados.
                  </p>
                  <p>
                    O Brasil pode voltar a ser feliz de novo, depende de nós.
                    Vamos juntos e juntas!
                  </p>
                </div>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </section>
  );
}
