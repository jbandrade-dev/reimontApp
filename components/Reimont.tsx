import Image from "next/image";

export function Reimont() {
  return (
    <section
      id="reimont"
      className="wrapper pb-6 mb-16 bg-purple-500 px-4 mt-2 rounded-md"
    >
      <h2 className=" sectionTitle text-white">ESPERANÇA PARA O RIO</h2>

      <div className="mob:grid pc:flex rounded-md overflow-hidden shadow-lg bg-white w-full">
        <div className="pc:p-6 mob:pt-6 p-4 mob:order-2 pc:order-1 flex flex-col justify-between text-red-500 ">
          <strong className="pc:text-2xl mob:text-xl tablet:text-xl py-2 uppercase">
            Transformar a nossa realidade é possível
          </strong>
          <div className="mt-4 pc:text-xl mob:text-lg mb-6">
            <p className="mb-4">
              Ao lado de Lula, vou contribuir para a profunda reconstrução do
              nosso país, a partir do humanismo, da fraternidade, da igualdade,
              da justiça social.
            </p>
            <p>
              Há quatorze anos como vereador, luto, diariamente, por uma cidade
              mais justa para todas e todos, ao lado dos mais pobres. É hora de
              cuidarmos do Estado do Rio e do Brasil, é hora do amor vencer o
              ódio
            </p>
          </div>
        </div>

        <div className="mob:order-1 pc:order-2 pc:w-[46rem] bg-blue-500">
          <div className="">
            <Image
              src="/reimont-1333.png"
              alt="foto"
              width={2790}
              height={2646}
              layout="responsive"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
