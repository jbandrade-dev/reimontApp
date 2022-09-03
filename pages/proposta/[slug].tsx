import Link from "next/link";
import Image from "next/image";
import { GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";
import { useRouter } from "next/router";
import { CaretRight, File, House } from "phosphor-react";
import { Container } from "../../components/Container";
;

interface SlugProps {
  proposta: {
    page: string;
    slug: string;
    text: string;
    href: string;
    img: string;
    alt: string;
    icon: string;
    subProposals: [
      {
        page: string;
        slug: string;
        text: string;
        href: string;
      }
    ];
    linhas: [
      {
        id: number;
        text: string;
      }
    ];
    tags: string;
  };
}

export default function Proposta({ proposta }: SlugProps) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return (
      <div role="status">
        <svg
          className="flex justify-center items-center mx-auto mt-[30vh] w-10 h-10 text-gray-200 animate-spin fill-red-500"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          ></path>
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          ></path>
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <section className="flex flex-col min-h-[100vh]">
      <Container>
        <header className="bg-[url('/background-site.png')] bg-cover w-full py-8">
          <div className="align-middle">
            <div className="relative max-w-[900px] mx-auto my-auto mob:px-6">
              <Image
                className=""
                src={proposta.img}
                alt="Título da Proposta"
                width={1600}
                height={350}
                layout="responsive"
              />
            </div>
          </div>
        </header>

        <article className="wrapper flex flex-col flex-1 px-4 mb-14">
          <div className="grid desktop:flex gap-4">
            <div>
              <div className="grid gap-3">
                <nav className="text-red-500 mt-10">
                  <ul className="inline-flex mob:text-xs">
                    <li>
                      <Link href="/#navbar">
                        <div className="inline-flex gap-1 mr-1 items-center cursor-pointer hover:underline">
                          <House size={12} weight="bold" />
                          Home
                        </div>
                      </Link>
                    </li>

                    <li>
                      <div className="inline-flex gap-1 mr-1 items-center">
                        <CaretRight size={12} />
                        <Link
                          href="/#propostas"
                          className="flex gap-2 items-center cursor-pointer hover:underline"
                        >
                          <a className="hover:underline">Propostas</a>
                        </Link>
                      </div>
                    </li>
                  </ul>
                </nav>
                {proposta.subProposals.map((items) => {
                  return (
                    <Link key={items.page} href={items.href}>
                      <a className="w-full grid border border-l-[6px] border-l-transparent rounded-lg px-3 py-4 bg-white shadow text-red-500 hover:bg-gray-100 hover:border-l-red-500 transition-colors">
                        <h3 className="pc:text-2xl mob:text-xl tablet:text-xl">
                          {items.page}
                        </h3>

                        <div>
                          <div className="flex gap-2 mt-4">
                            <button
                              type="button"
                              className="flex items-center justify-center gap-6 text-red-500 border border-red-500 hover:bg-red-500 hover:text-white text-xs rounded-lg  px-2 py-0.5 transition-colors duration-200"
                            >
                              saiba mais
                            </button>

                            <button
                              type="button"
                              className="flex items-center justify-center gap-6 text-red-500 border border-red-500 hover:bg-red-500 hover:text-white text-xs rounded-lg  px-2 py-0.5  transition-colors duration-200"
                            >
                              salvar
                            </button>
                          </div>
                        </div>
                      </a>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </article>
      </Container>
    </section>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`https://backend-reimont.vercel.app/proposals`);
  const data = await response.json();

  const paths = data.map((proposta: { slug: string }) => {
    return { params: { slug: proposta.slug } };
  });

  return {
    paths,
    fallback: true,
  };
};

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;

  const response = await fetch(`https://backend-reimont.vercel.app/${slug}`);
  const data = await response.json();

  return {
    props: {
      proposta: data,
    },
    revalidate: 60 * 60,
  };
};
