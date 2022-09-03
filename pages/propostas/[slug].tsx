import Link from "next/link";
import { GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";
import { useRouter } from "next/router";
import { SocialLinks } from "../../components/SocialLinks";
import { CaretRight, House } from "phosphor-react";
import { Container } from "../../components/Container";

interface SlugProps {
  propostas: {
    page: string;
    slug: string;
    title: string;
    img: string;
    alt: string;
    paragraph: [
      {
        id: number;
        text: string;
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

export default function ProposalPage({ propostas }: SlugProps) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <p>Carregando...</p>;
  }

  return (
    <Container>
      
      <section className="text-black-500 wrapper shadow bg-white px-4">
        <div className="max-w-[900px] mx-auto mt-8 mob:pt-6 tablet:pt-6 pc:pt-24">
          <strong className="flex mob:ml-3 tablet:ml-3 mob:text-3xl tablet:text-3xl pc:text-5xl mb-10">
            {propostas.title}
          </strong>

          <nav className="flex justify-between px-3 text-black-500">
            <ul className="inline-flex mob:text-xs items-center">
              <li>
                <Link href="/#navbar">
                  <a className="inline-flex gap-1 mr-1 items-center cursor-pointer hover:underline hover:text-red-500">
                    <House size={12} weight="bold" />
                    <span>Home</span>
                  </a>
                </Link>
              </li>

              <CaretRight className="mr-1" size={12} />

              <li>
                <Link
                  href="/#proposals"
                  className="inline-flex gap-1 mr-1 items-center"
                >
                  <a className="inline-flex mr-1 items-center hover:underline hover:text-red-500">
                    <span>Propostas</span>
                  </a>
                </Link>
              </li>
            </ul>

            <div>
            <SocialLinks size="16" weight="thin" tailwind="flex gap-1"/>
            </div>
          </nav>

          <hr className="mb-4 mt-4 mx-3 border-gray-200" />

          <article className="max-w-[650px] mx-auto text-black-500 rounded-md p-4 ">
            <div className="grid gap-6 mb-6 pc:text-xl mob:text-lg tablet:text-lg">
              {propostas.paragraph.map((paragraph) => {
                return (
                  <p className="leading-relaxed" key={paragraph.id}>
                    {paragraph.text}
                  </p>
                );
              })}
            </div>

            <ul className="grid leading-relaxed gap-6 list-disc mob:px-6">
              {propostas.linhas.map((linha) => {
                return (
                  <li className="text-xl" key={linha.id}>
                    <span className="flex gap-2"> {linha.text}</span>
                  </li>
                );
              })}
            </ul>
            <p className="text-xs text-center mt-6 px-8 ">{propostas.tags}</p>
          </article>
        </div>
      </section>
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(
    `https://backend-reimont.vercel.app/sub-proposals`
  );
  const data = await response.json();

  const paths = data.map((proposal: { slug: string }) => {
    return { params: { slug: proposal.slug } };
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
      propostas: data,
    },
    revalidate: 60 * 60,
  };
};
